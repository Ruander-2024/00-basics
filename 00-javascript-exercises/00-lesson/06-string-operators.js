let userName = "Bill Gates";

console.log(userName.toLocaleLowerCase()); // kisbetűssé alakítás
console.log(userName.toLocaleUpperCase()); // nagybetűssé alakítás

console.log(userName.charAt(0)); // n-edik karakter kiírása

userName[0] = "F";
console.log(userName); //* Nem megváltoztatható!!

//Substring

console.log(userName.substring(0, 4)); // 0. karaktertől a 4-ig, de a 4. nincsen benne
console.log(userName.substring(4)); // A 4-től a végéig és a 4-es is benne van

// userName = userName.substring(4); // Így felül lehet írni
// console.log(userName);

//Slice
console.log(userName.slice(2, 6)); // 2. karakter benne van, a 6. pedig nincsen
console.log(userName.slice(-3)); // Utolsó 3 karaktert adja vissza
console.log(userName.slice(2, userName.length)); // A 2. karaktertől a változó hosszáig

//String hossza
console.log(userName.length);

//Replace
console.log(userName.replace("l", "x")); // Csak az első karaktert változtatja meg
console.log(userName.replace(/l/g, "x")); // Globálisan az összes "l" betűt cseréljük le

//Trim
let str = "          Hello World         ";
console.log(str.trim()); // Csak az elejéről és a végéről vágja le a szóközöket

//Includes
let sentence = "Bill Gates is very rich";
console.log(sentence.includes("Gates")); // Keres, hogy létezik-e ilyen és true vagy false értékkel tér vissza
console.log(sentence.includes("gates")); // Kis és nagy betű érzékeny

//IndexOf
console.log(sentence.indexOf("Gates")); // Számot ad vissza, pontosabban az első karakter indexét
console.log(sentence.indexOf("gates")); // -1, ha nem talál egyezést

//Split
console.log(sentence.split(" ")); // A "" közé írt karakter szerint választja szét a változó értéket

//Template literals
let firstName = "Ben"
let job = "Frontend developer"
console.log(firstName + " is a " + job + " at Microsoft.");
console.log(`${firstName} is a ${job} at Microsoft.`);