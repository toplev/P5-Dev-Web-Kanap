//déclaration panier//

let panier;

//Mettre à jour localstorage//

updatelocalstorage();

//Vérifir localstorage si vide desactiver le bouton Commander sinon afficher le panier/localstorage //

function updatelocalstorage() {
  panier = localStorage.getItem("Panier");

  if (panier === null) {
    document.querySelector("#order").disabled = true;
  } else {
    panier = JSON.parse(panier);
    afficherpaniers();
  }
}

//Vider le panier/hmtl et Afficher les produits avec API + Localstorage//

function afficherpaniers() {
  resetpanier();
  let articleIndex = 0;
  let totalPrice = 0;
  let numberOfProducts = 0;

  //Ajout ID + les informations sur les produits depuis API dans HTML //

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
          document.getElementsByClassName("cart__item")[articleIndex];
        const cart__item__img = document.createElement("div");
        itemimg.appendChild(cart__item__img);
        cart__item__img.classList.add("cart__item__img");

        const image =
          document.getElementsByClassName("cart__item__img")[articleIndex];
        const element_img = document.createElement("img");
        element_img.src = data.imageUrl;
        element_img.setAttribute("alt", "Photographie d'un canapé");
        image.appendChild(element_img);

        const itemcontent =
          document.getElementsByClassName("cart__item")[articleIndex];
        const cart__content = document.createElement("div");
        itemcontent.appendChild(cart__content);
        cart__content.classList.add("cart__item__content");

        const itemcontentdescription = document.getElementsByClassName(
          "cart__item__content"
        )[articleIndex];
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
        )[articleIndex];
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
        //Ecouter bouton Supprimer et lancer fonctionne deleteitem si besoin //
        cartitemdelete.addEventListener("click", deleteitem);

        const itemQuantityEl =
          document.getElementsByName("itemQuantity")[articleIndex];
        itemQuantityEl.product = product;
        //Ecouter bouton quantité et lancer fonctionne changequantity si besoin //
        itemQuantityEl.addEventListener("change", changequantity);

        //Calcul prix total avec le prix et la quantité //

        totalPrice += product.quantity * data.price;
        numberOfProducts += product.quantity;
        articleIndex++;
      })
      .then((data) => {
        const totalQuantity = document.getElementById("totalQuantity");
        totalQuantity.innerText = numberOfProducts;

        const totalNewPrice = document.getElementById("totalPrice");
        totalNewPrice.innerText = totalPrice;

        //Ecouter bouton Commander et lancer valider la commande //

        const commander = document.querySelector("#order");
        commander.addEventListener("click", validerlacommande);
      });
  });
}

//vider le panier avant affichage depuis localStorage  //

function resetpanier() {
  document.getElementById("cart__items").innerHTML = "";
  document.getElementById("totalQuantity").innerHTML = "";
  document.getElementById("totalPrice").innerHTML = "";
}

//supprimer le produit et lancer updatelocalstorage //

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

//modifier la quantité et afficher le prix total//

function changequantity(event) {
  let product = event.currentTarget.product;
  let newQuantity = event.target.value;
  let newNumberOfProducts = 0;

  newQuantity = parseInt(newQuantity);
  panier.forEach((updatEquantity) => {
    if (
      product.Id === updatEquantity.Id &&
      updatEquantity.color === product.color
    ) {
      updatEquantity.quantity = newQuantity;
    }
    newNumberOfProducts += updatEquantity.quantity;
  });
  localStorage.setItem("Panier", JSON.stringify(panier));

  const totalQuantity = document.getElementById("totalQuantity");
  totalQuantity.innerText = newNumberOfProducts;

  calculatetotalprice();
}

// afficher le prix total//

function calculatetotalprice() {
  let totalPrice = 0;
  panier.forEach((product) => {
    fetch("http://localhost:3000/api/products/" + product.Id)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        totalPrice += product.quantity * data.price;
      })
      .then((data) => {
        const totalNewPrice = document.getElementById("totalPrice");
        totalNewPrice.innerText = totalPrice;
      });
  });
}

function validerlacommande() {
  /*
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
  //let nowYouHaveToPay = [];

  let firstName = document.querySelector("#firstName");
  let lastName = document.querySelector("#lastName");
  let address = document.querySelector("#address");
  let city = document.querySelector("#city");
  let email = document.querySelector("#email");
  let nowYouHaveToPay = panier.map((product) => product.Id);

  let readyCommande = {
    contact: {
      firstName: firstName.value,
      lastName: lastName.value,
      address: address.value,
      city: city.value,
      email: email.value,
    },
    products: nowYouHaveToPay,
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
    const order = readyCommande;

    fetch("http://localhost:3000/api/products/order", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        alert("Merci de noter le numéro de la commande");
        window.location = "confirmation.html?id=" + data.orderId;
        localStorage.setItem("orderId", data.orderId);
        alert("Voici votre n° de la commande : " + data.orderId);
        window.location = "confirmation.html?id=" + data.orderId;
      })
      .catch((error) => {
        alert("API HS : " + error);
      });
  }
}
