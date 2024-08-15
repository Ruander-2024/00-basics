// JS primitívek

// Numerikus

let age = 50;
console.log(typeof age);

let avgWeight = 74.5;
console.log(avgWeight);

console.log(Number.MAX_SAFE_INTEGER);

// Szöveges vagy string

let fullName = "Pávity Patrik"
console.log(fullName);
let postCode = "1234"
console.log(postCode);

// undefined
var x;
console.log(x);

// null

let emptyObj = null; // Kezdőérték

// boolean

let isActive = true;
isActive = false;

// Symbol ---> unique, azaz egyedi értéket adok meg valaminek

const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log("symbol are equal", sym1 === sym2);

// bigint

let numberOfGalaxies = 4743863475675664387846n;
console.log(numberOfGalaxies);
