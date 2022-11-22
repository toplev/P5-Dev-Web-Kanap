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
    for (let i = 0; i <= 0; i++) {
      console.log(data);

      const image = document.getElementById("item__img");
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
    }
  })
  .catch(function (err) {
    // Une erreur est survenue
  });
