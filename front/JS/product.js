const apiID = window.location.search;
const urlParams = new URLSearchParams(apiID);
const id = urlParams.get("id");

fetch("http://localhost:3000/api/products/" + id)
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((data) => {
    console.log(data);

    const image = document.getElementsByClassName("item__img")[0];
    const element_img = document.createElement("img");
    image.appendChild(element_img);
    element_img.src = data.imageUrl;

    const produits = document.getElementById("title");
    const element_h1 = document.createElement("h1");
    produits.appendChild(element_h1);
    element_h1.innerText = data.name;

    const price = document.getElementById("price");
    const element_price = document.createElement("span");
    price.appendChild(element_price);
    const number = data.price;
    element_price.innerText = number.toLocaleString({
      style: "currency",
    });

    const description = document.getElementById("description");
    const element_description = document.createElement("p");
    description.appendChild(element_description);
    element_description.innerText = data.description;

    let colors = data.colors;
    for (let i = 0; i < colors.length; i++) {
      const color = document.getElementById("colors");
      const element_color = document.createElement("option");
      element_color.setAttribute("value", colors[i]);
      color.appendChild(element_color);
      element_color.innerText = colors[i];
    }
  })
  .catch(function (err) {
    // Une erreur est survenue
  });

document.getElementById().value;
console.log(colors);
/*const newcolor = document.getElementById("colors");
newcolor.addEventListener("click", function () {
  console.log(newcolor);
});

let quantity = document.querySelector("quantity");
console.log(quantity);*/

const buttonPanier = document.getElementById("addToCart");
buttonPanier.addEventListener("click", function () {
  let productInPanier = {
    Id: id,
    color: newcolor,
    quantity: quantity,
  };
  console.log(productInPanier);
});

/*function panier() {
  const btnAddCart = document.getElementById("addToCart");
  btnAddCart.addEventListener("click", () => {
    if (itemQuantity.value > 0 && itemQuantity.value < 1000) {
      let productInPanier = {
        name: (element_h1.innerText = data.name),
      };
    }
  });
}*/
