// Matematikai és numerikus operátorok

const { compileString } = require("sass");

let num1 = 10;
let num2 = 20;

let result = num1 + num2;
console.log(result);
result = num1 - num2;
console.log(result);
result = num1 * num2;
result1 = num1 / num2;
result2 = num1 % num2; // maradékos osztás, 10-et elosztottam 20-al, 10-ben a 20 megvan 0-szor, marad a 10...
console.log(result1);
console.log(result2);

num1++;
console.log(num1);

console.log("++  operátor");

num1 = 0;
console.log(++num1); //mindig előre dolgozik       -- előjellel is működnek

num1 = 0
console.log(num1++); // midnig utána dolgozik
console.log(num1++);
console.log(num1);

// operátor
console.log("-- operátor");

num1 = 5;
console.log(--num1); //mindig előre dolgozik       -- előjellel is működnek

num1 = 0
console.log(num1--); // midnig utána dolgozik
console.log(num1--);
console.log(num1);

// Hatvány
console.log("Hatvány");

num1=10;
num1=num1**3;
console.log("Harmadik hatvány", num1);

// Aricmetic assignment

let age = 42;
age = age + 10;
age += 10;
age -= 10;
age *= 10;
age /= 10;

console.log(age);

// Maradékos osztás
console.log("maradékos osztás");  //pl súlynál

let weight = 115 / 4;
console.log(weight);

weight = 115 % 4;
console.log("Maradék:", weight);

const avgAge = 22;
console.log(avgAge % 3);

// avgAge = 22 % 3; Nem tudod megváltoztatni az értékét
// console.log(avgAge);


let result4 = avgAge % 3;    // műveletet tudsz vele kezelni
console.log(result4);

console.log(5 + 5 + "abc" + 5 + 5 + "def" + 5 + 5);
//  10abc55def55

let stringToNum = "123"
console.log(stringToNum);
console.log(Number(stringToNum));

let stringToNum1 = "asd"
console.log(stringToNum1);
console.log(Number(stringToNum1));

