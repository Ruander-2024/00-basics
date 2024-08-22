// Függvények

const sumOfAgesWomen = getSumAges("30", "28", "53");
const sumOfAgesMen = getSumAges(73, 12, 34);

console.log(sumOfAgesMen);
console.log(sumOfAgesWomen);

function getSumAges(age1, age2, age3){
    // Függvény body
    return age1 + age2 + age3; // return után nem kerül semmi lefutattásra
    let result = age1 + age2 + age3;
    return result; // nem kell külön változóban eltárolni
}

console.log(getSumAges(11, 34, 23));

const BASE_URL = "https";

function sendDataToServer() {
    function name() {
        console.log(BASE_URL, "sent");
        console.log(`${BASE_URL} sent`);
    }
    name();
}

sendDataToServer();