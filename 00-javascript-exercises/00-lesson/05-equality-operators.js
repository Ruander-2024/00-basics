  // Összehasonlító operátorok és elágazások
// ==, ===, !, !=, !==, >=, <=, <, >
// || (OR), && (AND)

let num1 = 10;
let num2 = -20;

// if-else elágazás

if (num1 > num2) {
    console.log("num1 nagyobb");
}
else{
    console.log("num2 nagyobb");
}

if (num1 > num2) {
    console.log("num1 nagyobb");
} 
else if(num1 > 0){
    console.log("num1 pozitív szám");
} 
else if(num2 > 0){
    console.log("num2 pozitív szám");
} 
else{
    console.log("egyik sem");
}

// ==, ===
 if("10" == 10){
    // egyenlőek, nem néz típust
    console.log("egyenlőek a számok");
 }
 else{
    console.log("nem egyenlőek a számok");
 }

 if("10" === 10){
    // nem egyenlőek, típust is néz
    console.log("egyenlőek a számok");
 }
 else{
    console.log("nem egyenlőek a számok");
 }

 // Truthy values
 // if (true)
 // if ({})
 // if ([])
 // if (42)
 // if ("0")
 // if ("false")
 // if (new Date())
 // if (-42)
 // if (12n)
 // if (3.14)
 // if (-3.14)
 // if (Infinity)
 // if (-Infinity)

 // Falsy values
 // if (false)
 // if (null)
 // if (undefined)
 // if (0)
 // if (-0)
 // if (0n)
 // if (NaN)
 // if ("")

 // num1 = 10
 // num2 = -20

 //OR és AND operátor

 if(num1 !== 10 || num1 > 0){
    console.log("OR operator return 1");
 }

 if(num1 === "10" || num1 > 100){
    console.log("OR operator return 2");
 }

 if(num1 !== 10 || num1 > 100 || num1 < 11){
    console.log("OR operator return 3");
 }

// num1 = 10
// num2 = -20

if(num1 > 0 && num1 < 20){
    console.log("AND operator return 1");
}

if(num1 > 0 && num1 < 20 && num1 < 3){
    console.log("AND operator return 2");
}

if((num1 > 0 && num1 < 10) || num1 !== num2){
    console.log("AND with OR operator return 1");
}

if(num1 > 0 || (num1 < 10 && num1 < num2)){
    console.log("AND with OR operator return 2");
}

//ternary operator
// condition ? trueExpression : falseExpression

// const result = condition
//  ? trueExpression
//  : falseExpression

const score = 80;
let scoreRating;

if (score > 70){
    scoreRating = "Excellent";
}
else{
    scoreRating = "Do it better";
}

console.log(scoreRating);

const score2 = 80;

const scoreRating2 = score2 > 70 
    ? "Excellent"
    : "Do it better"

console.log(scoreRating2);