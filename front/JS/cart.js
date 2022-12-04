fetch("http://localhost:3000/api/products/")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((data) => {
    console.log(data);

    const items = document.getElementById("cart__items");
    const cart__article = document.createElement("article");
    cart__article.classList.add("cart__item");
    cart__article.setAttribute("data-id", obj.Id);
    cart__article.setAttribute("data-color", obj.color);
    items.appendChild(cart__article);

    const itemimg = document.getElementsByClassName("cart__item")[0];
    const cart__item__img = document.createElement("div");
    itemimg.appendChild(cart__item__img);
    cart__item__img.classList.add("cart__item__img");

    const image = document.getElementsByClassName("cart__item__img")[0];
    const element_img = document.createElement("img");
    element_img.src = data.imageUrl;
    element_img.setAttribute("alt", "Photographie d'un canapé");
    image.appendChild(element_img);

    const itemcontent = document.getElementsByClassName("cart__item")[0];
    const cart__content = document.createElement("div");
    itemcontent.appendChild(cart__content);
    cart__content.classList.add("cart__item__content");

    const itemcontentdescription = document.getElementsByClassName(
      "cart__item__content"
    )[0];
    const cart__description = document.createElement("div");
    itemcontentdescription.appendChild(cart__description);
    cart__description.classList.add("cart__item__content__description");

    const cart__h2 = document.createElement("h2");
    cart__description.appendChild(cart__h2);
    cart__h2.innerText = data.name;

    const cart__color = document.createElement("p");
    cart__description.appendChild(cart__color);
    cart__color.innerText = obj.color;

    const cart__price = document.createElement("p");
    cart__description.appendChild(cart__price);
    cart__price.innerText = data.price;

    const itemcontentsettings = document.getElementsByClassName(
      "cart__item__content"
    )[0];
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
    itemQuantity.setAttribute("value", obj.quantity);

    const cart__contentdelete = document.createElement("div");
    cart__settings.appendChild(cart__contentdelete);
    cart__contentdelete.classList.add("cart__item__content__settings__delete");

    const cartitemdelete = document.createElement("p");
    cart__contentdelete.appendChild(cartitemdelete);
    cartitemdelete.classList.add("deleteItem");
    cartitemdelete.innerText = "Supprimer";
  })
  .catch(function (err) {
    // Une erreur est survenue
  });

let panier = localStorage.getItem("Panier");
let obj = JSON.parse(panier);
console.log(panier);
