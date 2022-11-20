const items = document.getElementById("price");

fetch("http://localhost:3000/api/products")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((data) => {
    for (let i = 0; i <= data.length; i++) {
      const myImg = document.createElement("img");
      console.log(data[i].imageUrl);
      myImg.src = data[i].imageUrl;
      price.appendChild(myImg);
      myImg.height = 150;
      myImg.width = 150;
      const prixElement = document.createElement("p");
      prixElement.innerText = data[i].price;
      produits.appendChild(prixElement);
    }
    //document.getElementById("test").innerHTML = data[0].name;
  })
  .catch(function (err) {
    // Une erreur est survenue
  });
