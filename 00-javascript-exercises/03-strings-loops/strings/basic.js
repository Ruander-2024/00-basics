console.log('---------------- Concat string -------------------');

// Készíts egy metódust, ami összefűz két stringet egy stringgé

console.log(concatStrings('we are ', 'heroes')); //Output: 'we are heroes'
console.log(concatStrings('camel', 'Case')); //Output: 'camelCase'
function concatStrings(str1, str2) {
    let word = '';
    word = str1 + str2;
    return word;
 }
 
console.log('------------------ make Full Name --------------');

// Készíts egy metódust ami két névből egy teljes nevet készít szóközzel középen.
// Inputként numbert vagy stringeket kapsz, ha bármelyik paraméter number, akkor
// adja vissza üzenetként: 'invalid name'

console.log(makeFullNames('Steve', 'Jobs')); //Output: 'Steve Jobs';
console.log(makeFullNames('Jim', 120)); //Output: 'invalid name';
console.log(makeFullNames(120, 'Ibrahim')); //Output: 'invalid name';
function makeFullNames(firstName, secondName) { 
    if(typeof firstName == 'number' || typeof secondName == 'number') {
        return 'invalid name';
    }
    return `${firstName} ${secondName}`;
    
}
console.log(' ---------------- get longer string ---------------');

// Készíts metódust, ami két string paraméterből visszaadja azt, amelyik a hosszabb
// Egyenlőség esetén adja vissza az első paramétert

console.log(getLongerString('rövidd', 'hosszabb')); //Output: 'hosszabb';
console.log(getLongerString('first', '')); //Output: 'first';
console.log(getLongerString('abba', 'same')); //Output: 'abba';
function getLongerString(str1, str2) { 
    if(str1.length >= str2.length){
        return str1;
    }
    else{
        return str2;
    }
}

console.log('---------------- check Letters --------------------');

// Készíts metódust, ami ellenőrzi, hogy egy string első betűje nagy betű, de a többi kis betű.
// Hint: használd a substring metódust ciklus helyet.
// Visszatérésként adjon boolean-t (true, false).

 console.log(checkLetters('Jackson')); //Output: true;
 console.log(checkLetters('camelCAse')); //Output: false;
 console.log(checkLetters('WaWe')); //Output: false;
function checkLetters(str) {
    let firstChar = str[0];
    let otherChars = str.substring(1);

    if(firstChar === firstChar.toLowerCase() ||
       otherChars !== otherChars.toLowerCase()
    ) {
        return false;
    } else{
        return true;
    }
 }

console.log(' ----------- check UserName -----------------');

// Készíts metódust, ami ellenőrzi hogy egy 'egy szavas' felhasználónév érvényes-e?
// Adjon vissza true értéket, ha legalább 5 karakter és az első betűje nagy
// Minden más esetben térjen vissza false értékkel

console.log(checkUserNameIsValid('BZoli')); //Output: true;
console.log(checkUserNameIsValid('anonim')); //Output: false;
console.log(checkUserNameIsValid('Boy')); //Output: false;
function checkUserNameIsValid(userName) { 
    if(userName.length >= 5 && userName[0] === userName[0].toUpperCase()){
        return true;
    }
    else{
        return false;
    }
}

console.log('---------------- check string lenght is even ------------');

// Készíts egy metódust, ami ellenőrzi hogy egy string hossza páros, vagy páratlan szám.
// Adja vissza a megfelelő boolean értéket

console.log(checkStringLengthIsEven('alma')); //Output: true;
console.log(checkStringLengthIsEven('Vad ember')); //Output: false;
console.log(checkStringLengthIsEven('vadEmber')); //Output: true;
function checkStringLengthIsEven(str) { 
    if(str.length % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}


console.log('----------------- check valid email -------------');

// Készíts metódust, ami ellenőrzi, hogy egy mail cím érvényes-e?
// Adjon vissza true értéket, ha legalább 7 karakter és tartalmaz '.' és '@' karaktert.
// Minden más esetben térjen vissza false értékkel

 console.log(checkValidEmail('mail@mail.hu')); //Output: true;
 console.log(checkValidEmail('me@h.h')); //Output: false;
 console.log(checkValidEmail('invelid@ksdkl')); //Output: false;
 console.log(checkValidEmail('anonym.com')); //Output: false;
function checkValidEmail(email) { 
    if(email.length > 7 && email.includes('.') && email.includes('@')){
        return true;
    }
    else{
        return false;
    }
}


console.log('------------------ replace first dot --------------');


// Készíts egy metódust, ami kicseréli az első '.' karaktert '@' karakterre egy stringben
// Adja vissza az új stringet.

console.log(replaceFirstDotToAt('name.family.hu')); //Output: 'name@family.hu';
console.log(replaceFirstDotToAt('noDot')); //Output: 'noDot';
function replaceFirstDotToAt(str) {
    return str.replace('.', '@')
 }


console.log('-------------------- remove spaces ----------------');

// Készíts egy metódust, ami "kiszedi" az szóközöket egy mondatból

console.log(removeSpaces('#we love coding')); //Output: '#welovecoding';
console.log(removeSpaces('noSpace')); //Ouput: 'noSpace;
function removeSpaces(str) {
    return str.replaceAll(' ', '');
    // return str.replace(/\s/g, '');
    // return str.split(" ").join('');
 }

console.log('------------------ get Family Name ----------------');

// Készíts egy metódust, ami paraméterként kap egy nevet,
// ami lehet egy keresztnév, vagy egy teljes név, ami egy keresztnévből és egy család névből áll. 
// Ha teljes névet kap paraméterként adja vissza a családnevet
// Ha egyetlen nevet kap paraméterként, akkor adja vissza: 'invalid name'

console.log(getFamilyName('John')); //Output: 'invalid name';
console.log(getFamilyName('Barack Obama')); //Output: 'Obama';
function getFamilyName(fullName) {
    if(fullName.indexOf(' ') !== -1) {
        return fullName.slice(fullName.indexOf(" ") + 1);
    }
    else{
        return 'invalid name';
    }
const nev = fullName.split(' ');
    if (nev.length == 2) {
    return nev[1];
    } else {
    return 'invalid name';
    }
function getFamilyName(fullName) {
    // Eltávolítja a szóközöket a név elejéről és végéről
    const parts = fullName.trim().split(/\s+/g); //trim(): Eltávolítja az esetleges kezdő és záró szóközöket.
    //split(/\s+/): Szóközökkel való elválasztás, és bármilyen számú szóköz kezelése.

    if (parts.length === 2) { // Ellenőrzi, hogy a név pontosan két részből áll-e (keresztnév és családnév).

    // Visszaadja a második részt (családnév)
    return parts[1];
    } else {
    // Visszaadja az 'invalid name' szöveget, ha a név nem két részből áll
    return 'invalid name';
    }
    }

    // Tesztelés
    console.log(getFamilyName('John')); // Kimenet: 'invalid name'
    console.log(getFamilyName('Barack Obama')); // Kimenet: 'Obama'
 }