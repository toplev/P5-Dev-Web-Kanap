const items = document.getElementById("items");

fetch("http://localhost:3000/api/products")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((data) => {
    for (let i = 0; i <= data.length; i++) {
      const myImg = document.createElement("img");
      console.log(data[i]);
      myImg.src = data[i].imageUrl;
      items.appendChild(myImg);
      myImg.height = 150;
      myImg.width = 150;

      const nomElement = document.createElement("p");
      nomElement.innerText = data[i].name;
      items.appendChild(nomElement);

      const prixElement = document.createElement("p");
      prixElement.innerText = data[i].price;
      items.appendChild(prixElement);

      const descriptionElement = document.createElement("p");
      descriptionElement.innerText = data[i].description;
      items.appendChild(descriptionElement);
    }
    //document.getElementById("test").innerHTML = data[0].name;
  })
  .catch(function (err) {
    // Une erreur est survenue
  });
