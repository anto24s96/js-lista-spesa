//CREARE UN ARRAY CONTENENTE GLI ELEMENTI DELLA SPESA;
const tiramisu = ["Mascarpone", "Savoiardi", "Caffè", "Uova", "Zucchero", "Cacao amaro in polvere"];

const list = document.getElementById("container-list");

//INIZIALIZZARE LA VARIABILE CONTATORE PRIMA DEL CICLO "WHILE";
let i = 0;

//CREARE IL CICLO "WHILE" E IMPOSTARE LA CONDIZIONE;
while(i < tiramisu.length){
    let li = document.createElement("li");
    li.innerText = tiramisu[i];
     
    list.appendChild(li);

    i++
}