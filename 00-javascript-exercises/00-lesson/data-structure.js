// tömb adatok átstrukturálása


const userData = [
    'Dávid',
    'Farkas',
    30,
    'Kecskemét',
    'f.david@gmail.com',
]

const userAge = userData[2];
console.log (userAge)
// új fajta szintaktika 
//változó neveinek felsorolása
const [firstName, lastName, age, city, email] = userData
//5 db változó jött léte nem egy tömb
console.log(lastName, email)
