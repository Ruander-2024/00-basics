let userName = "Bill Gates"

console.log(userName.toLocaleLowerCase());   // kisbetű
console.log(userName.toLocaleUpperCase());   // nagybetű

console.log(userName.charAt(0));  // hanyadik karaktert jelenitse meg a szövegből (n-edik karakter kiirása)

userName[0] = "F";
console.log(userName);  // Nem megváltoztatható!!!

// Substring

console.log(userName.substring(0, 4));  // a 0. karaktertől a 4-ig, de a 4. nincsen benne
console.log(userName.substring(4));    // a 4-től a végéig es a 4-es is benne van

// userName = userName.substring(4);  // így felül lehet írni
// console.log(userName);

//  Slice

console.log(userName.slice(2, 6));   // a 2. karakter benne van, a 6. pedig nincsen
console.log(userName.slice(-3));    // az utolsó 3 karaktert adja vissza
console.log(userName.slice(2, userName.length));   // a 2. karaktertől a változó hosszáig

// String hossza
console.log(userName.length);

// Replace
console.log(userName.replace("l", "x"));    // csak az első "L" karaktert változtatja meg
console.log(userName.replace(/l/g, "x"));    // globálisan(g) az összes "L" betűt cseréli ki

// Trim
let str = "        Hello World       ";
console.log(str.trim());   // Csak az elejéről és a végéről vágja le a szóközöket

// Includes
let sentence = "Bill Gates is very rich";
console.log(sentence.includes("Gates"));   // Keres, hogy létezik-e ilyen és true vagy false értékkel tér vissza
console.log(sentence.includes("gates")); 
console.log(sentence.toLocaleLowerCase(sentence.includes("gates")));  //  kis és nagybetű érzékeny

// IndexOf
console.log(sentence.indexOf("Gates"));    // azt a számot adja vissza ahonnan indexelni kezd

// Split
console.log(sentence.split(" "));   // A "" közé írt karakter szerint választja szét a változó értéket

// Template literals
let firstName = "Ben"
let job = "Frontend developer"
console.log(firstName + " is a " + job + " at Microsoft. ");
console.log(`${firstName} is a ${job} at Microsoft.`);