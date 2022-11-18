const produits = document.getElementById("items");

fetch("http://localhost:3000/api/products")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((data) => {
    for (let i = 0; i <= data.length; i++) {
      const element_a = document.createElement("a");
      produits.appendChild(element_a);
      const element_article = document.createElement("article");
      produits.appendChild(element_article);
      const element_h3 = document.createElement("h3");
      element_article.appendChild(element_h3);
      element_h3.innerText = data[i].description;

      /* const myImg = document.createElement("img");
      console.log(data[i]);
      myImg.src = data[i].imageUrl;
      produits.appendChild(myImg);
      myImg.height = 150;
      myImg.width = 150;

      const nomElement = document.createElement("p");
      nomElement.innerText = data[i].name;
      produits.appendChild(nomElement);

      const prixElement = document.createElement("p");
      prixElement.innerText = data[i].price;
      produits.appendChild(prixElement);

      const descriptionElement = document.createElement("p");
      descriptionElement.innerText = data[i].description;
      produits.appendChild(descriptionElement);*/
    }
  })
  .catch(function (err) {
    // Une erreur est survenue
  });
