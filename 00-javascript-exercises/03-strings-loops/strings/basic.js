console.log('---------------- Concat string -------------------');
console.log();


// Készíts egy metódust, ami összefűz két stringet egy stringgé

 console.log(concatStrings('we are ', 'heroes')); //Output: 'We are heroes'
 console.log(concatStrings('camel', 'Case')); //Output: 'camelCase'
function concatStrings(str1, str2) { 
    let word = '';  // szó
    word = str1 + str2;
    return word;
    
    return str1 + str2; // ez a megoldás is jó
}
console.log();

console.log('------------------ make Full Name --------------');
console.log();

// Készíts egy metódust ami két névből egy teljes nevet készít szóközzel középen.
// Inputként numbert vagy stringeket kapsz, ha bármelyik paraméter number, akkor
// adja vissza üzenetként: 'invalid name'

 console.log(makeFullNames('Steve', 'Jobs')); //Output: 'Steve Jobs';
 console.log(makeFullNames('Jim', 120)); //Output: 'invalid name';
 console.log(makeFullNames(120, 'Ibrahim')); //Output: 'invalid name';
function makeFullNames(firstName, secondName) { 
    if(typeof firstName == 'number' || typeof secondName == 'number'){    //typeof megnézi a típusát
        return 'invalid name'   
    }
    else{
        return firstName + ' ' + secondName  // `${firstName} ${secondName}`    ez a rövidebb verzió
    }
}
console.log();

console.log(' ---------------- get longer string ---------------');
console.log();

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
console.log();

console.log('---------------- check Letters --------------------');

// Készíts metódust, ami ellenőrzi, hogy egy string első betűje nagy betű, de a többi kis betű.
// Hint: használd a substring metódust ciklus helyet.
// Visszatérésként adjon boolean-t (true, false).

 console.log(checkLetters('Jackson')); //Output: true;
 console.log(checkLetters('camelCAse')); //Output: false;
 console.log(checkLetters('WaWe')); //Output: false;
function checkLetters(str) { 
    let firstChar = str[0];    // eslő karakter
    let otherChars = str.substring(1);   // többi karakter

    if (
        firstChar === firstChar.toLowerCase() ||   // J === J.toLowerCase() j   J===j
        otherChars !== otherChars.toLowerCase()   // aWe !== aWe.toLowerCase() aWe !==awe
    ) {
        return false;
    }
    else {
        return true;
    }
}

console.log(' ----------- check UserName -----------------');
console.log();

// Készíts metódust, ami ellenőrzi hogy egy 'egy szavas' felhasználónév érvényes-e?
// Adjon vissza true értéket, ha legalább 5 karakter és az első betűje nagy
// Minden más esetben térjen vissza false értékkel

 console.log(checkUserNameIsValid('BZoli')); //Output: true;
 console.log(checkUserNameIsValid('anonim')); //Output: false;
 console.log(checkUserNameIsValid('Boy')); //Output: false;
function checkUserNameIsValid(userName) { 
    if(userName.length >= 5 && userName.substring(0).toUppercase){
        return true;
    }
    else {
        return false;
    }
}
console.log();

console.log('---------------- check string lenght is even ------------');
console.log();

// Készíts egy metódust, ami ellenőrzi hogy egy string hossza páros, vagy páratlan szám.
// Adja vissza a megfelelő boolean értéket

 console.log(checkStringLengthIsEven('alma')); //Output: true;
 console.log(checkStringLengthIsEven('Vad ember')); //Output: false;
 console.log(checkStringLengthIsEven('vadEmber')); //Output: true;
function checkStringLengthIsEven(str) { 
    if(str.length % 2 ==0){
        return true;
    }
    else {
        return false;
    }
}
console.log();


console.log('----------------- check valid email -------------');
console.log();

// Készíts metódust, ami ellenőrzi, hogy egy mail cím érvényes-e?
// Adjon vissza true értéket, ha legalább 7 karakter és tartalmaz '.' és '@' karaktert.
// Minden más esetben térjen vissza false értékkel

 console.log(checkValidEmail('mail@mail.hu')); //Output: true;
 console.log(checkValidEmail('me@h.h')); //Output: false;
 console.log(checkValidEmail('invelid@ksdkl')); //Output: false;
 console.log(checkValidEmail('anonym.com')); //Output: false;
function checkValidEmail(email) { 
    if(email.length >= 7 && email.includes('.') && email.includes('@')){
        return true;
    }
    else {
        return false
    }
}
console.log();


console.log('------------------ replace first dot --------------');
console.log();


// Készíts egy metódust, ami kicseréli az első '.' karaktert '@' karakterre egy stringben
// Adja vissza az új stringet.

 console.log(replaceFirstDotToAt('name.family.hu')); //Output: 'name@family.hu';
 console.log(replaceFirstDotToAt('noDot')); //Output: 'noDot';
function replaceFirstDotToAt(str) { 
    let rep = str.replace(".", "@");
    return rep;
}
console.log();


console.log('-------------------- remove spaces ----------------');
console.log();

// Készíts egy metódust, ami "kiszedi" az szóközöket egy mondatból

// console.log(removeSpaces('#we love coding')); //Output: '#welovecoding';
// console.log(removeSpaces('noSpace')); //Ouput: 'noSpace;
function removeSpaces(str) { 

}
console.log();

console.log('------------------ get Family Name ----------------');

// Készíts egy metódust, ami paraméterként kap egy nevet,
// ami lehet egy keresztnév, vagy egy teljes név, ami egy keresztnévből és egy család névből áll. 
// Ha teljes nevet kap paraméterként adja vissza a családnevet
// Ha egyetlen nevet kap paraméterként, akkor adja vissza: 'invalid name'

// console.log(getFamilyName('John')); //Output: 'invalid name';
// console.log(getFamilyName('Barack Obama')); //Output: 'Obama';
function getFamilyName(fullName) { }