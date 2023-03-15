/*
Descrizione:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano)
gli elementi della lista individualmente con un ciclo while.
Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo while al posto del ciclo for.
Facciamo attenzione a non dimenticare tutte le differenze
implementative che il ciclo while ci impone, in particolare alla variabile di indice.
*/

const shoppingList = ["mela", "pera", "latte", "uova", "carne", "yogurt"];
let toBuy = "";
const myList = document.querySelector("ul");
console.log(myList);


let i = 0;
while (i < shoppingList.length) {
    toBuy += `<li>${i + 1} - ${shoppingList[i]}</li>`;
    console.log(toBuy);
    i++;
}

myList.innerHTML = toBuy


const addInput = document.getElementById("add-alim");
console.log(addInput);

const addBtn = document.getElementById("submit");
console.log(addBtn);

addBtn.addEventListener("click", function() {
    if (addInput.value !== "" && !shoppingList.includes(addInput.value)) {
        const addAlim = addInput.value;
        console.log(addAlim);
        shoppingList.push(addAlim);
        console.log(shoppingList);
        myList.innerHTML = toBuy += `<li>${i += 1} - ${addAlim}</li>`;
        addInput.value = "";
    }
})







