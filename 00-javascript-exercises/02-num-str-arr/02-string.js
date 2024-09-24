//Given a string, return a new string where "not " has been added to the front. 
//However, if the string already begins with "not", return the string unchanged.

function ellenorizSzoveg(str) {
    // Ellenőrizzük, hogy a szöveg "not"-tal kezdődik-e
    if (str.startsWith('not')) {
        return str; // Ha igen, a szöveget változatlanul visszaadjuk
    } else {
        return 'not ' + str; // Ha nem, hozzáadjuk a "not " előtagot
    }
}

console.log(ellenorizSzoveg('cukor')); // "not cukor"
console.log(ellenorizSzoveg('x')); // "not x"
console.log(ellenorizSzoveg('not rossz')); // "not rossz"

/***********************************************************************************************/
//Given a non-empty string and an n, return a new string where the char 
//at index n has been removed. The value of n will be a valid index of a char 
//in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).


function missChar(str, n) {
   
    return str.slice(0, n) + str.slice(n + 1);
}

console.log(missChar("kitten", 1)); // "ktten"
console.log(missChar("kitten", 0)); // "itten"
console.log(missChar("kitten", 4)); // "kittn"

/***********************************************************************************************/
//Given a string, return a new string where the first and last chars have been exchanged.


function changeFrontBack(str) {
    // Ha a szöveg hossza 1 vagy annál kevesebb, akkor változatlanul visszaadjuk
    if (str.length <= 1) {
        return str;
    }

    // Az első és utolsó karakter lekérdezése
    let firstChar = str[0];
    let lastChar = str[str.length - 1];

    // Visszaadunk egy új szöveget a cserélt első és utolsó karakterrel
    return lastChar + str.slice(1, -1) + firstChar;
}

console.log('changeFrontBack');
console.log(changeFrontBack("code")); // "eodc"
console.log(changeFrontBack("a")); // "a"
console.log(changeFrontBack("ab")); // "ba"

/***********************************************************************************************/
//Given a string, we'll say that the front is the first 3 chars of the string. 
//If the string length is less than 3, the front is whatever is there. 
//Return a new string which is 3 copies of the front.


/*console.log('firstThree');
console.log(firstThree("Java")); // "JavJavJav"
console.log(firstThree("Chocolate")); // "ChoChoCho"
console.log(firstThree("abc")); // "abcabcabc"

/***********************************************************************************************/
//Given a string, take the last char and return a new string with the last char 
//added at the front and back, so "cat" yields "tcatt". 
//The original string will be length 1 or more.

function lastToFront(str) {
    // Az utolsó karakter kivétele
  let lastChar = str[str.length - 1];
    
    // Új karakterlánc létrehozása az utolsó karakterrel elöl és hátul
    return lastChar + str + lastChar;
}

// A függvény tesztelése
console.log(lastToFront("cat")); // "tcatt"
console.log(lastToFront("Hello")); // "oHelloo"
console.log(lastToFront("a")); // "aaa"

/***********************************************************************************************/
//Count the number of "xx" in the given string. We'll say that overlapping is allowed, 
//so "xxx" contains 2 "xx".

function findXX(str) {
    let count = 0; // A "xx" számának inicializálása
    
    // Végigmegyünk a karakterláncon, ellenőrizve a karakterpárokat
    for (let i = 0; i < str.length - 1; i++) {
        // Ellenőrizzük, hogy az aktuális és a következő karakter 'x'-e
        if (str[i] === 'x' && str[i + 1] === 'x') {
            count++; // Növeljük a számlálót, ha "xx"-t találunk
        }
    }
    
    return count; // Visszatérünk a végső számmal
}

// A függvény tesztelése
console.log(findXX("abcxx")); // 1
console.log(findXX("xxx"));   // 2
console.log(findXX("xxxx"));  // 3

/***********************************************************************************************/
function stringBits(str) {
    let result = ""; // Az új karakterlánc inicializálása

    // Végigmegyünk a karakterláncon
    for (let i = 0; i < str.length; i++) {
        // Ellenőrizzük, hogy az index páros-e
        if (i % 2 === 0) {
            result += str[i]; // Hozzáadjuk a karaktert az új karakterlánchoz, ha páros az index
        }
    }

    return result; // Visszatérünk az új karakterlánccal
}

// A függvény tesztelése
console.log(stringBits("Hello")); // "Hlo"
console.log(stringBits("Hi"));    // "H"
console.log(stringBits("Heeololeo")); // "Hello"





/***********************************************************************************************/
//Given a non-empty string like "Code" return a string like "CCoCodCode".

function concatString(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str.substring(0, i + 1); /*zzel a módszerrel lekérdezzük a sztring kezdő részét a 0.
                                         indexből a jelenlegi indexig, ami magában foglalja a jelenlegi karaktert és az 
                                                összes előző karaktert is.*/
    }
    return result;
}

console.log(concatString("Code")); // "CCoCodCode"
console.log(concatString("abc"));  // "aababc"
console.log(concatString("ab"));   // "aab"


/***********************************************************************************************/
//Given a string, return a version where all the "x" have been removed. 
//Except an "x" at the very start or end should not be removed.

function findX(str) {
    let result = ""; // Eredmény string
   // Ellenőrizzük az első karaktert
   if (str.length > 0 && str[0] === 'x') {
    result += 'x'; // Hozzáadjuk az első "x"-et
}

// Ciklus a középső karakterekhez
for (let i = 1; i < str.length - 1; i++) {
    if (str[i] !== 'x') {
        result += str[i]; // Hozzáadjuk a karaktert, ha nem "x"
    }
}

// Ellenőrizzük az utolsó karaktert
if (str.length > 0 && str[str.length - 1] === 'x') {
    result += 'x'; // Hozzáadjuk az utolsó "x"-et
}

return result; // Visszatérünk az eredménnyel
}

// Teszteljük a függvényt
console.log(findX("xxHxix")); // "xHix"
console.log(findX("abxxxcd")); // "abcd"
console.log(findX("xabxxxcdx")); // "xabcdx"
