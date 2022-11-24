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
    {
      let colors = [];
      for (let i = 0; i <= data.length; i++) {
        colors.push(data.colors[i]);
        console.log(data.colors[i]);
      }
      const color = document.getElementById("colors");
      const element_color = document.createElement("option");
      element_color.setAttribute("class", "value");
      color.appendChild(element_color);
      element_color.innerText = data.colors[i];
      console.log(data.name);
    }
  })
  .catch(function (err) {
    // Une erreur est survenue
  });
