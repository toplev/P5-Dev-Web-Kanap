let panier;

updatelocalstorage();

function changequantity(event) {
  let product = event.currentTarget.product;
  let newquantity = event.target.value;
  let newnumberofproducts = 0;

  newquantity = parseInt(newquantity);
  panier.forEach((updatequantity) => {
    if (
      product.Id === updatequantity.Id &&
      updatequantity.color === product.color
    ) {
      updatequantity.quantity = newquantity;
    }
    newnumberofproducts += updatequantity.quantity;
  });
  localStorage.setItem("Panier", JSON.stringify(panier));

  const totalQuantity = document.getElementById("totalQuantity");
  totalQuantity.innerText = newnumberofproducts;

  totalprice();
}

function afficherpaniers() {
  resetpanier();
  let articleindex = 0;
  let totalprice = 0;
  let numberofproducts = 0;

  panier.forEach((product) => {
    fetch("http://localhost:3000/api/products/" + product.Id)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        const items = document.getElementById("cart__items");
        const cart__article = document.createElement("article");
        cart__article.classList.add("cart__item");
        cart__article.setAttribute("data-id", product.Id);
        cart__article.setAttribute("data-color", product.color);
        items.appendChild(cart__article);

        const itemimg =
          document.getElementsByClassName("cart__item")[articleindex];
        const cart__item__img = document.createElement("div");
        itemimg.appendChild(cart__item__img);
        cart__item__img.classList.add("cart__item__img");

        const image =
          document.getElementsByClassName("cart__item__img")[articleindex];
        const element_img = document.createElement("img");
        element_img.src = data.imageUrl;
        element_img.setAttribute("alt", "Photographie d'un canapé");
        image.appendChild(element_img);

        const itemcontent =
          document.getElementsByClassName("cart__item")[articleindex];
        const cart__content = document.createElement("div");
        itemcontent.appendChild(cart__content);
        cart__content.classList.add("cart__item__content");

        const itemcontentdescription = document.getElementsByClassName(
          "cart__item__content"
        )[articleindex];
        const cart__description = document.createElement("div");
        itemcontentdescription.appendChild(cart__description);
        cart__description.classList.add("cart__item__content__description");

        const cart__h2 = document.createElement("h2");
        cart__description.appendChild(cart__h2);
        cart__h2.innerText = data.name;

        const cart__color = document.createElement("p");
        cart__description.appendChild(cart__color);
        cart__color.innerText = product.color;

        const cart__price = document.createElement("p");
        cart__description.appendChild(cart__price);
        const number = data.price;
        cart__price.innerText = number.toLocaleString("en-EU", {
          style: "currency",
          currency: "EUR",
        });

        const itemcontentsettings = document.getElementsByClassName(
          "cart__item__content"
        )[articleindex];
        const cart__settings = document.createElement("div");
        itemcontentsettings.appendChild(cart__settings);
        cart__settings.classList.add("cart__item__content__settings");

        const cart__contentsettings = document.createElement("div");
        cart__settings.appendChild(cart__contentsettings);
        cart__contentsettings.classList.add(
          "cart__item__content__settings__quantity"
        );

        const cartitem__p = document.createElement("p");
        cart__contentsettings.appendChild(cartitem__p);
        cartitem__p.innerText = "Qté :";

        const itemQuantity = document.createElement("input");
        cart__contentsettings.appendChild(itemQuantity);
        itemQuantity.setAttribute("type", "number");
        itemQuantity.classList.add("itemQuantity");
        itemQuantity.setAttribute("name", "itemQuantity");
        itemQuantity.setAttribute("min", 1);
        itemQuantity.setAttribute("max", 100);
        itemQuantity.setAttribute("value", product.quantity);

        const cart__contentdelete = document.createElement("div");
        cart__settings.appendChild(cart__contentdelete);
        cart__contentdelete.classList.add(
          "cart__item__content__settings__delete"
        );

        const cartitemdelete = document.createElement("p");
        cart__contentdelete.appendChild(cartitemdelete);
        cartitemdelete.classList.add("deleteItem");
        cartitemdelete.innerText = "Supprimer";
        cartitemdelete.product = product;
        cartitemdelete.addEventListener("click", deleteitem);

        const itemQuantityEl =
          document.getElementsByName("itemQuantity")[articleindex];
        itemQuantityEl.product = product;
        itemQuantityEl.addEventListener("change", changequantity);

        totalprice += product.quantity * data.price;
        numberofproducts += product.quantity;
        articleindex++;
      })
      .then((data) => {
        const totalQuantity = document.getElementById("totalQuantity");
        totalQuantity.innerText = numberofproducts;

        const totalPrice = document.getElementById("totalPrice");
        totalPrice.innerText = totalprice;

        const commander = document.querySelector("#order");
        commander.addEventListener("click", validerlacommande);
      });
  });
}

function totalprice() {
  let totalprice = 0;
  panier.forEach((product) => {
    fetch("http://localhost:3000/api/products/" + product.Id)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        totalprice += product.quantity * data.price;
      })
      .then((data) => {
        const totalPrice = document.getElementById("totalPrice");
        totalPrice.innerText = totalprice;
      });
  });
}

function deleteitem(event) {
  const found = panier.findIndex(
    (product) =>
      product.Id === event.currentTarget.product.Id &&
      event.currentTarget.product.color === product.color
  );
  panier.splice(found, 1);
  localStorage.setItem("Panier", JSON.stringify(panier));
  updatelocalstorage();
}

function updatelocalstorage() {
  panier = localStorage.getItem("Panier");

  if (panier === null) {
    document.querySelector("#order").disabled = true;
  } else {
    panier = JSON.parse(panier);
    afficherpaniers();
  }
}

function resetpanier() {
  document.getElementById("cart__items").innerHTML = "";
  document.getElementById("totalQuantity").innerHTML = "";
  document.getElementById("totalPrice").innerHTML = "";
}

function validerlacommande() {
  /**
   *
   * Expects request to contain:
   * contact: {
   *   firstName: string,
   *   lastName: string,
   *   address: string,
   *   city: string,
   *   email: string
   * }
   * products: [string] <-- array of product _id
   *
   */
  let nowyouhavetopay = [];

  let firstName = document.querySelector("#firstName");
  let lastName = document.querySelector("#lastName");
  let address = document.querySelector("#address");
  let city = document.querySelector("#city");
  let email = document.querySelector("#email");

  let readycommande = {
    contact: {
      firstName: firstName.value,
      lastName: lastName.value,
      address: address.value,
      city: city.value,
      email: email.value,
    },
    products: nowyouhavetopay,
  };

  function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    alert("Merci de vérifier le format de votre mail");
    return false;
  }

  var valideMail = ValidateEmail(email.value);

  if (
    firstName.value === "" ||
    lastName.value === "" ||
    address.value === "" ||
    city.value === "" ||
    valideMail === false
  ) {
    alert("Merci de vérifier tous les champs ");
  } else {
    const order = readycommande;

    fetch("http://localhost:3000/api/products/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((response) => response.json())
      .then((data) => {
        document.location.href = "confirmation.html";
        localStorage.setItem("orderId", data.orderId);
        localStorage.removeItem("Panier", JSON.stringify(panier));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}
