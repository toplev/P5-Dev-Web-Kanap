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

    for (let i = 0; i <= data.length; i++) {
      const image = document.getElementsByClassName("cart__item__img")[0];
      const element_img = document.createElement("img");
      element_img.src = data[i].imageUrl;
      element_img.setAttribute("alt", "Photographie d'un canapé");
      image.appendChild(element_img);
    }

    const itemcontent = document.getElementsByClassName("cart__item")[0];
    const cart__content = document.createElement("article");
  })
  .catch(function (err) {
    // Une erreur est survenue
  });

// Retrieving data:
let quantity = localStorage.getItem("Panier");
let obj = JSON.parse(quantity);
document.getElementById("demo").innerHTML = obj.quantity;

document.getElementById("data-id").innerHTML = obj.Id;
document.getElementById("data-color").innerHTML = obj.color;
