/*const items = document.getElementById("items");

fetch("http://localhost:3000/api/products")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((data) => {
      items.innerHTML = data.name;
      let li = document.createElement("li");
      li.textContent = data.name;
      console.log(data.name);
    });
  })
  .catch((error) => console.log(error));

const items = document.getElementById("items");
fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data[0].imageUrl);
    items.innerHTML = data[0].imageUrl;
  });

for (i = 0; i < items.length; i++) {
  console.log(typeof item[i]);
}*/

const items = document.getElementById("items");

fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.getElementById("items").innerHTML =
      data[0].name + " " + data[0].description;
  });

const passengers = [
  fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)};,
  "Sarah Kate'",
  "Audrey Simon",
  "Tao Perkington",
];

for (let i in passengers) {
  console.log("Embarquement du passager " + passengers[i]);
}

/* const items = () => {
  fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      items.innerHTML = data;
    })
    .catch((error) => console.log(error));
};

for (i = 0; i < quote.length; i++) {
  console.log(typeof quote[i]);
}

getitems();
 users.forEach(function (user) {
  let li = document.createElement("li");
  li.classList.add("list-group-item");
  li.textContent = user.name;
  document.querySelector(".list-group").appendChild(li);
  console.log(user.name);
});

const item = [
  fetch("http://localhost:3000/api/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      items.forEach(function (item) {
        console.log(data);
        let li = document.createElement("li");
        li.classList.add("list-group-item");
        li.textContent = data.name;
        document.querySelector(".list-group").appendChild(li);
      });
    }),
];

const ite = [
  fetch("http://localhost:3000/api/products")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data[0].name);
    }),
];

for (i = 0; i < items.length; i++) {
  console.log(typeof items[i]);
}*/
