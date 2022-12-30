//récuperer numéro de la commande depuis localStorage//

let order = localStorage.getItem("orderId");

//afficher numéro de la commande//

const orderId = document.getElementById("orderId");
orderId.innerText = order;

//Vider localStorage//

localStorage.removeItem("orderId");
