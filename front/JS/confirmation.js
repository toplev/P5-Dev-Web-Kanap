//Utilisation de SearchParams afin de recuperer Order ID //

const orderID = window.location.search;
const urlParams = new URLSearchParams(orderID);
const id = urlParams.get("id");
//console.log(id);

//récuperer numéro de la commande depuis localStorage//
//let order = localStorage.getItem("orderId");
localStorage.removeItem("Panier");

//afficher numéro de la commande//

const orderId = document.getElementById("orderId");
orderId.innerText = id;

//Vider localStorage//
//localStorage.removeItem("orderId");
