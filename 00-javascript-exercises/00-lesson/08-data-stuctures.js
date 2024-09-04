// tömb adatok átstruktúrálása

const userData = ['Dávid','Farkas', 30, 'Kecskemét', 'fdavid@gmail.com'];

// Eddig így mentettük ki a tömb adott elemét
const userAge = userData[2];
console.log(userAge);

// Új fajta szintaktika
// Változó neveinek felsorolása
const [firstName, lastName, age, city, email] = userData
// 5db változó jött létre és nem 1 tömb

console.log(lastName, city);
console.log(userData);
