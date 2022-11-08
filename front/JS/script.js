const news = document.getElementById("new");

fetch("http://localhost:3000/api/products")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((data) => {
      news.innerHTML = data.name;
      console.log(data.name);
    });
  })
  .catch((error) => console.log(error));

const quote = document.getElementById("quote");

fetch("http://api.quotable.io/random")
  .then((res) => res.json())
  .then((data) => {
    quote.innerHTML = data.content;
  })
  .catch((error) => console.log(error));
