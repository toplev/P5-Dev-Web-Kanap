//Faire apparaitre les produits de API dans HTML //

const produits = document.getElementById("items");

fetch("http://localhost:3000/api/products")
  .then((res) => {
    if (res.ok) {
      return res.json();
      console.log(res);
    }
  })
  .then((data) => {
    for (let i = 0; i <= data.length; i++) {
      const element_a = document.createElement("a");
      produits.appendChild(element_a);
      element_a.href += "product.html?id=" + data[i]._id;

      const element_article = document.createElement("article");
      element_a.appendChild(element_article);

      const element_img = document.createElement("img");
      element_article.appendChild(element_img);
      element_img.src = data[i].imageUrl;

      const element_h3 = document.createElement("h3");
      element_article.appendChild(element_h3);
      element_h3.innerText = data[i].name;

      const element_p = document.createElement("p");
      element_article.appendChild(element_p);
      element_p.innerText = data[i].description;
    }
  })
  .catch(function (err) {
    console.log(err);
  });
