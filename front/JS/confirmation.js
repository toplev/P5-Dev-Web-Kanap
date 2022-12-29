//récuperer numéro de la commande depuis localStorage//

var order = localStorage.getItem("orderId");

//afficher numéro de la commande//

const orderId = document.getElementById("orderId");
orderId.innerText = order;

//Vider localStorage//

var order = localStorage.removeItem("orderId");
