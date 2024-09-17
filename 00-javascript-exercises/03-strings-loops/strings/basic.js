console.log('---------------- Concat string -------------------');

// Készíts egy metódust, ami összefűz két stringet egy stringgé
function concatStrings(str1, str2) {   //concatString = string kapcsolat
   
    return str1 + str2 ;
  }
 console.log(concatStrings('we are ', 'heroes')); //Output: 'We are heroes'  // str1 itt a 'we are ', str2 pedig 'heroes'
 console.log(concatStrings('camel', 'Case')); //Output: 'camelCase'  // str1 itt a 'camel ', str2 pedig 'Case'

console.log('------------------ make Full Name --------------');

// Készíts egy metódust ami két névből egy teljes nevet készít szóközzel középen.
// Inputként numbert vagy stringeket kapsz, ha bármelyik paraméter number, akkor
// adja vissza üzenetként: 'invalid name'

function makeFullNames(firstName, secondName) { // MakeFullName = készíts teljes nevet, firstName = Keresztnév lastName = Vezetéknév
    // Ellenőrizzük, hogy bármelyik paraméter szám-e
    if (typeof firstName === 'number' || typeof secondName === 'number') {  
      return 'invalid name';
    }
  
    // Összefűzzük a két nevet szóközzel középen
    return `${firstName} ${secondName}`;
  }
  
  // Tesztelés
  console.log(makeFullNames('Steve', 'Jobs')); // Output: 'Steve Jobs'
  console.log(makeFullNames('Jim', 120));      // Output: 'invalid name'
  console.log(makeFullNames(120, 'Ibrahim'));  // Output: 'invalid name'
  
console.log(' ---------------- get longer string ---------------');

// Készíts metódust, ami két string paraméterből visszaadja azt, amelyik a hosszabb
// Egyenlőség esetén adja vissza az első paramétert


function getLongerString(str1, str2) { //getLongerString = add meg a hosszabb stringet
    // Ellenőrizzük, hogy mindkét paraméter string típusú
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
      return('Both parameters must be strings');
    }
  
    // Összehasonlítjuk a két string hosszát
    if (str1.length >= str2.length) {
      return str1;
    } else {
      return str2;
    }
  }
  
  // Tesztelés
  console.log(getLongerString('rövidd', 'hosszabb')); // Output: 'hosszabb'     str1, str2
  console.log(getLongerString('first', ''));          // Output: 'first'
  console.log(getLongerString('abba', 'same'));       // Output: 'abba'
  
console.log('---------------- check Letters --------------------');

// Készíts metódust, ami ellenőrzi, hogy egy string első betűje nagy betű, de a többi kis betű.
// Hint: használd a substring metódust ciklus helyet.
// Visszatérésként adjon boolean-t (true, false).

function checkLetters(str) {    
    // Ellenőrizzük, hogy a string nem üres-e
    if (str.length === 0 && str.length <= 2) {
      return false;
    }
   
    // Ellenőrizzük, hogy az első karakter nagybetű-e
    const firstCharIsUpper = str.charAt(0) === str.charAt(0).toUpperCase();
    
    // Ellenőrizzük, hogy a többi karakter kisbetű-e
    const restAreLower = str.substring(1).toLowerCase() === str.substring(1);
  
    // Visszatérünk a két ellenőrzés eredményével
    return firstCharIsUpper && restAreLower;
  }
  
  // Tesztelés
  console.log(checkLetters('Jackson'));   // Output: true
  console.log(checkLetters('camelCAse')); // Output: false
  console.log(checkLetters('WaWe'));      // Output: false
  console.log(checkLetters('A'));         // Output: true
  console.log(checkLetters('a'));         // Output: false
  

console.log(' ----------- check UserName -----------------');

// Készíts metódust, ami ellenőrzi hogy egy 'egy szavas' felhasználónév érvényes-e?
// Adjon vissza true értéket, ha legalább 5 karakter és az első betűje nagy
// Minden más esetben térjen vissza false értékkel

// console.log(checkUserNameIsValid('BZoli')); //Output: true;
// console.log(checkUserNameIsValid('anonim')); //Output: false;
// console.log(checkUserNameIsValid('Boy')); //Output: false;
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

// console.log(checkStringLengthIsEven('alma')); //Output: true;
// console.log(checkStringLengthIsEven('Vad ember')); //Output: false;
// console.log(checkStringLengthIsEven('vadEmber')); //Output: true;
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

// console.log(checkValidEmail('mail@mail.hu')); //Output: true;
// console.log(checkValidEmail('me@h.h')); //Output: false;
// console.log(checkValidEmail('invelid@ksdkl')); //Output: false;
// console.log(checkValidEmail('anonym.com')); //Output: false;
function checkValidEmail(email) { }


console.log('------------------ replace first dot --------------');


// Készíts egy metódust, ami kicseréli az első '.' karaktert '@' karakterre egy stringben
// Adja vissza az új stringet.

// console.log(replaceFirstDotToAt('name.family.hu')); //Output: 'name@family.hu';
// console.log(replaceFirstDotToAt('noDot')); //Output: 'noDot';
function replaceFirstDotToAt(str) { }


console.log('-------------------- remove spaces ----------------');

// Készíts egy metódust, ami "kiszedi" az szóközöket egy mondatból

function removeSpaces(str) {
  return str.replace(/\s+/g, '');
}


console.log(removeSpaces('#we love coding')); // Output: '#welovecoding'
console.log(removeSpaces('noSpace')); // Output: 'noSpace'


console.log('------------------ get Family Name ----------------');

// Készíts egy metódust, ami paraméterként kap egy nevet,
// ami lehet egy keresztnév, vagy egy teljes név, ami egy keresztnévből és egy család névből áll. 
// Ha teljes névet kap paraméterként adja vissza a családnevet
// Ha egyetlen nevet kap paraméterként, akkor adja vissza: 'invalid name'

function getFamilyName(fullName) {
  // Eltávolítja a szóközöket a név elejéről és végéről
  const parts = fullName.trim().split(/\s+/g);  //trim(): Eltávolítja az esetleges kezdő és záró szóközöket.
                                               //split(/\s+/): Szóközökkel való elválasztás, és bármilyen számú szóköz kezelése.

  if (parts.length === 2) {  // Ellenőrzi, hogy a név pontosan két részből áll-e (keresztnév és családnév).

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


