fetch("http://localhost:3000/api/products/")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((data) => {
    console.log(data);

    const produits = document.getElementById("cart__items");
    const cart__items = document.createElement("article");
  })
  .catch(function (err) {
    // Une erreur est survenue
  });
