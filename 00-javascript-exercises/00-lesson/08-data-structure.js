// tömb adatok átstruktúrálása

const userData = ['Dávid', 'Farkas', 30, 'Kecskemét', 'fdavid@gmail.com'];
console.log(userData);

// Eddig így mentettük ki a tömb adott elemét
const userAge = userData[2];
console.log(userAge);

// Új fajta színtaktika
// Változó neveinek felsorolása
const [firstName, lastName, age, city] = userData
// 5 db változó jött létre, nem 1 tömb

console.log(lastName, city);
console.log(userData);