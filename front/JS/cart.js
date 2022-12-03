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
  })
  .catch(function (err) {
    // Une erreur est survenue
  });

// Retrieving data:
let color = localStorage.getItem("Panier");
let obj = JSON.parse(color);
/*document.getElementById("data-id").innerHTML = obj.Id;
document.getElementById("data-color").innerHTML = obj.color;*/
document.getElementById("demo").innerHTML = obj.quantity;
