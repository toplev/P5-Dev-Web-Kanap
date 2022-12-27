order = localStorage.getItem("orderId");

const orderId = document.getElementById("orderId");
orderId.innerText = order;

order = localStorage.removeItem("orderId");
