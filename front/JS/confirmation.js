var order = localStorage.getItem("orderId");

const orderId = document.getElementById("orderId");
orderId.innerText = order;

var order = localStorage.removeItem("orderId");
