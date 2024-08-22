// Js primitívek

// Numerikus

let age = 50
console.log(typeof age);

let avgWeight = 74.5;
console.log(avgWeight);

console.log(Number.MAX_SAFE_INTEGER);

// Szöveges vagy string

let fullname = "Kohlrusz Péter"
console.log(fullname);
let postCode = "1234"
console.log(postCode);

// undefined
var x;
console.log(x);

// null

let emptyObj = null; // Kezdőérték

// Boolean - igaz vagy hamis értéket ad

let isActive = true;
isActive = false;

// Symbol --> Unique, azaz egyedi értéket adok meg valaminek

const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log("symbol are equal", sym1 === sym2);

// bigInt

let numberOfGalaxies = 4511545445584421266212n;
console.log(numberOfGalaxies);


