fetch("http://localhost:3000/api/products")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((data) => {
    for (let i = 0; i <= 0; i++) {
      const produits = document.getElementById("title");
      const element_h1 = document.createElement("h1");
      produits.appendChild(element_h1);
      element_h1.innerText = data[i].name;

      const price = document.getElementById("price");
      const element_price = document.createElement("span");
      price.appendChild(element_price);
      element_price.innerText = data[i].price;

      const description = document.getElementById("description");
      const element_description = document.createElement("p");
      description.appendChild(element_description);
      element_description.innerText = data[i].description;
    }
  })
  .catch(function (err) {
    // Une erreur est survenue
  });
