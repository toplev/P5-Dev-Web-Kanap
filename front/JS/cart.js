let panier = localStorage.getItem("Panier");
let obj = JSON.parse(panier);
let articleindex = 0;
let newprice = 0;
if (obj === null) {
  console.log("Panier Vide");
} else {
  obj.forEach((product) => {
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

        document
          .getElementsByName("itemQuantity")
          [articleindex].addEventListener("change", changequantity);

        function changequantity() {
          let paniers = JSON.parse(localStorage.getItem("Panier"));
          let newnumberofproducts = 0;
          let newquantity = this.value;
          newquantity = parseInt(newquantity);
          paniers.forEach((updatequantity) => {
            if (
              product.Id === updatequantity.Id &&
              updatequantity.color === product.color
            ) {
              updatequantity.quantity = newquantity;
            }
            newnumberofproducts += updatequantity.quantity;
          });
          localStorage.setItem("Panier", JSON.stringify(paniers));

          const totalQuantity = document.getElementById("totalQuantity");
          totalQuantity.innerText = newnumberofproducts;

          console.log(newquantity);
          console.log(data.price);
          leo += data.price * newquantity;
          console.log(leo);
          const totalPrice = document.getElementById("totalPrice");
          totalPrice.innerText = leo;
        }

        const localStorageContent = localStorage.getItem("Panier");
        if (localStorageContent === null) {
          paniers = [];
        } else {
          paniers = JSON.parse(localStorageContent);
        }
        let numberofproducts = 0;
        paniers.forEach((product) => {
          numberofproducts += product.quantity;
        });

        const cart__contentdelete = document.createElement("div");
        cart__settings.appendChild(cart__contentdelete);
        cart__contentdelete.classList.add(
          "cart__item__content__settings__delete"
        );

        const cartitemdelete = document.createElement("p");
        cart__contentdelete.appendChild(cartitemdelete);
        cartitemdelete.classList.add("deleteItem");
        cartitemdelete.innerText = "Supprimer";

        articleindex++;

        const totalQuantity = document.getElementById("totalQuantity");
        totalQuantity.innerText = numberofproducts;

        newprice = newprice + data.price;
        const totalPrice = document.getElementById("totalPrice");
        totalPrice.innerText = newprice;
      })
      .catch(function (err) {
        // Une erreur est survenue
      });
  });
}
