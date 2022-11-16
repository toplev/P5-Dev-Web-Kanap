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
}

const items = document.getElementById("tems");

fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.getElementById("tems").innerHTML =
      data[0].name + " " + data[0].description;
  });

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
}

const items = document.getElementById("test");

fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.getElementById("test").innerHTML =
      data[0].name + " " + data[0].description;
  });*/

/*const items = document.getElementById("myDIV");

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
      items.appendChild(myImg);
      myImg.height = 150;
      myImg.width = 150;
      const name = document.createElement("p");
      name.innerHTML = data[i].name;
      document.getElementById("myDIV").appendChild(name);
      const price = document.createElement("p");
      price.innerHTML = data[i].price;
      document.getElementById("myDIV").appendChild(price);
      const description = document.createElement("p");
      description.innerHTML = data[i].description;
      document.getElementById("myDIV").appendChild(description);
    }
    //document.getElementById("test").innerHTML = data[0].name;
  })
  .catch(function (err) {
    // Une erreur est survenue
  });

var button = document.getElementsByTagName("button")[0];
var i = 0;

function addCar(i) {
  var cars = ["audi", "bmw", "volvo"];
  var paragraph = document.getElementsByTagName("p")[0];

  if (i < cars.length) {
    var newLine = document.createElement("br");
    var newCar = document.createTextNode(cars[i]);
    paragraph.appendChild(newLine);
    paragraph.appendChild(newCar);
  }
}

button.addEventListener(
  "click",
  function () {
    addCar(i);
    i++;
  },
  false
);

/* const name = document.getElementById("myDIV");

fetch("http://localhost:3000/api/products")
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((data) => {
    for (let i = 0; i <= data.length; i++) {
      console.log(data[i].name);
      const para = document.createElement("p");
      para.innerHTML = data[i].name;
      document.getElementById("myDIV").appendChild(para);
    }
    //document.getElementById("test").innerHTML = data[0].name;
  })
  .catch(function (err) {
    // Une erreur est survenue
  });

/* Create element:
const para = document.createElement("p");
para.innerHTML = "This is a paragraph.";

// Append to another element:
document.getElementById("myDIV").appendChild(para);

/*let btnText = document.querySelector("#btnText");
let btnHtml = document.querySelector("#btnHtml");
let content = document.querySelector(".content");*/

/*let myString =
  '<p>dssd</p><img src="http://localhost:3000/images/kanap01.jpeg"/>';*/

/*btnText.addEventListener("click", () => {
  content.innerText = myString;
});

btnHtml.addEventListener("click", () => {
  content.innerHTML = myString;
});*/

const items = document.getElementById("myDIV");

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
      items.appendChild(myImg);
      myImg.height = 150;
      myImg.width = 150;
      const name = document.createElement("p");
      name.innerHTML = data[i].name;
      document.getElementById("myDIV").appendChild(name);
      const price = document.createElement("p");
      price.innerHTML = data[i].price;
      document.getElementById("myDIV").appendChild(price);
      const description = document.createElement("p");
      description.innerHTML = data[i].description;
      document.getElementById("myDIV").appendChild(description);
    }
    //document.getElementById("test").innerHTML = data[0].name;
  })
  .catch(function (err) {
    // Une erreur est survenue
  });
