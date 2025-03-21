/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
const alphPets = pets.sort();
console.log(alphPets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

const revPets = pets.reverse();
console.log(revPets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const invFirst = pets.shift();
pets.push(invFirst);
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const plates = ["AB123CD", "AD123BC", "CD123AB"];
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = plates[i];
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newCar = { brand: "Fiat", model: "500", color: "orange", trims: ["abarth", "GT", "s-line"], licensePlate: "AC123BD" };
cars.push(newCar);
console.log(cars);

for (let i = 0; i < cars.length; i++) {
  const carTrims = cars[i].trims;
  const noTrims = carTrims.pop();
  console.log(carTrims);
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
let justTrims = [];
for (let i = 0; i < cars.length; i++) {
  const carTrims = cars[i].trims;
  justTrims.push(carTrims[0]);
}
console.log(justTrims);
console.log(cars);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
  const car = cars[i];
  if (car.color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];

let i = 0;
while (i < numericArray.length) {
  console.log(numericArray[i]);
  i++;
  if (numericArray[i] === 32) {
    break;
  }
}

/* ESERCIZIO 10
Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
dell'alfabeto italiano.
es. [f, b, e] --> [6, 2, 5]
*/

const charactersArray = ["g", "n", "u", "z", "d"];
const itAlph = "abcdefghilmnopqrstuvz".split("");
const indexArray = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      indexArray.push(1);
      break;
    case "b":
      indexArray.push(2);
      break;
    case "c":
      indexArray.push(3);
      break;
    case "d":
      indexArray.push(4);
      break;
    case "e":
      indexArray.push(5);
      break;
    case "f":
      indexArray.push(6);
      break;
    case "g":
      indexArray.push(7);
      break;
    case "h":
      indexArray.push(8);
      break;
    case "i":
      indexArray.push(9);
      break;
    case "l":
      indexArray.push(10);
      break;
    case "m":
      indexArray.push(11);
      break;
    case "n":
      indexArray.push(12);
      break;
    case "o":
      indexArray.push(13);
      break;
    case "p":
      indexArray.push(14);
      break;
    case "q":
      indexArray.push(15);
      break;
    case "r":
      indexArray.push(16);
      break;
    case "s":
      indexArray.push(17);
      break;
    case "t":
      indexArray.push(18);
      break;
    case "u":
      indexArray.push(19);
      break;
    case "v":
      indexArray.push(20);
      break;
    case "z":
      indexArray.push(21);
      break;
  }
}

console.log(indexArray);
