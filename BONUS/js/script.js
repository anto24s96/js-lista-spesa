//CREARE UN ARRAY CONTENENTE GLI ELEMENTI DELLA SPESA;
const tiramisu = ["Mascarpone", "Savoiardi", "Caffè", "Uova", "Zucchero", "Cacao amaro in polvere"];

const list = document.getElementById("container-list");

tiramisu.push("Latte");

let flag = false;

let ingredient = "Latte";

let preference_1;
let preference_2;

//INIZIALIZZARE LA VARIABILE CONTATORE PRIMA DEL CICLO "WHILE";
let i = 0;

//CREARE IL CICLO "WHILE" E IMPOSTARE LA CONDIZIONE;
while(i < tiramisu.length){
    let li = document.createElement("li");
    li.innerText = tiramisu[i];
     
    list.appendChild(li);

    if(ingredient == tiramisu[i]){
        flag = true;
    }

    i++
}

if(flag){
    preference_1= prompt("Preferisci con Latte scremato o non scremato?");
    console.log(preference_1);
    
    preference_2= prompt("Preferisci con Cacao dolce o amaro?")
    console.log(preference_2);
}
else{
    console.log("Il Latte non è presente nella ricetta");
}


