//Given a string, return a new string where "not " has been added to the front. 
//However, if the string already begins with "not", return the string unchanged.

function checkString(str) {
    // Ellenőrizzük, hogy a string már "not" szóval kezdődik-e
    if (str.includes("not")) {
        return str;  // Ha igen, visszatérünk a változatlan stringgel
    } else {
        return "not " + str;  // Ha nem, hozzáadjuk a "not " részt az elejéhez
    }
}

console.log("checkString");
console.log(checkString('candy')); // "not candy"
console.log(checkString('x')); // "not x"
console.log(checkString('not bad')); // "not bad"

console.log();

/***********************************************************************************************/
//Given a non-empty string and an n, return a new string where the char 
//at index n has been removed. The value of n will be a valid index of a char 
//in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

function missChar(str, n) {
    // A stringet két részre osztjuk: az index előtti és utáni részre, majd összefűzzük őket
    return str.substring(0, n) + str.substring(n + 1);                                              // substring helyett lehet slice is : return str.slice(0, n) + str.slice(n + 1);
}

console.log(missChar("kitten", 1)); // "ktten"
console.log(missChar("kitten", 0)); // "itten"
console.log(missChar("kitten", 4)); //"kittn"

console.log();

/***********************************************************************************************/
//Given a string, return a new string where the first and last chars have been exchanged.

// function changeFrontBack(str) {
//     // Ellenőrizzük, hogy a string hossza legalább 2                                                 //Gipi
//     if (str.length <= 1) {
//         return str; // Ha a string hossza 1 vagy 0, visszatérünk a változatlan stringgel
//     }

//     // Kicseréljük az első és utolsó karaktert
//     return str[str.length - 1] + str.substring(1, str.length - 1) + str[0];
// }

// function changeFrontBack(str){                                                          // Márk
//     if(str.length === 1) {
//         return str;
//     }
//     else{
//         return str[str.length - 1] + str.slice(1, str.length - 1) + str[0]
//     }

// }


function changeFrontBack(str) {                                                          // Kriszti
    let first = str[0]; //c/a/a
    let last = str.slice(str.length -1); // e/a/b
    let koz = str.slice(1, -1); //od/a/b
    if (str.length < 2){
    return str;
    }
    return last + koz + first;
    }


console.log('changeFrontBack');
console.log(changeFrontBack("code")); // "eodc"
console.log(changeFrontBack("a")); // "a"
console.log(changeFrontBack("ab")); // "ba"

console.log();

/***********************************************************************************************/
//Given a string, we'll say that the front is the first 3 chars of the string. 
//If the string length is less than 3, the front is whatever is there. 
//Return a new string which is 3 copies of the front.

// function firstThree(str) {                                                                  // Aliz
//     if (str.length < 3) {
//         return str;
//         }
        
//         let firstThree = str.substring(0, 3); // Az első három karakter kiválasztása
//         return firstThree + firstThree + firstThree;
// }

function firstThree(str) {                                                                  // Kriszti
    let first = str.slice(0, 3);
    return first + first + first;
    }




console.log('firstThree');
console.log(firstThree("Java")); // "JavJavJav"
console.log(firstThree("Chocolate")); // "ChoChoCho"
console.log(firstThree("abc")); // "abcabcabc"

console.log();

/***********************************************************************************************/
//Given a string, take the last char and return a new string with the last char 
//added at the front and back, so "cat" yields "tcatt". 
//The original string will be length 1 or more.

function lastToFront(str) {                                         // Kriszti
    let last = str.slice(str.length - 1);                          // let lastChar = str[str.length - 1];   // Eszti
    return last + str + last;                                      // slice helyett lehet substring is
}

console.log(lastToFront("cat")); // "tcatt"
console.log(lastToFront("Hello")); // "oHelloo"
console.log(lastToFront("a")); // "aaa"

console.log();

/***********************************************************************************************/
//Count the number of "xx" in the given string. We'll say that overlapping is allowed, 
//so "xxx" contains 2 "xx".

function findXX(str) 
// {
//     let matches = str.match(/(?=xx)/gi)                     // Márk
//     return matches ? matches.length : 0;
//     if(matches){
//         return matches.length
//     }
//     else{
//         return 0;
//     }                          
// }

{
    let count = 0; // Számláló az "xx" előfordulások számára                    // Gipi + Eszti

    // Végigiterálunk a stringen, és megnézzük az "xx" előfordulásokat
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] === 'x' && str[i + 1] === 'x') {
            count++; // Növeljük a számlálót, ha találunk "xx"-t
        }
    }
    
    return count; // Visszatérünk a számláló értékével
}

console.log(findXX("abcxx")); // 1
console.log(findXX("xxx")); // 2
console.log(findXX("xxxx")); // 3

console.log();

/***********************************************************************************************/
//Given a string, return a new string made of every other char starting with 
//the first, so "Hello" yields "Hlo".

function stringBits(str) {                                                      // Gipi
    let result = ""; // Üres string a végeredmény tárolásához                   

    // Végigiterálunk a stringen, lépésközönként 2-t ugrunk
    for (let i = 0; i < str.length; i += 2) {
        result += str[i]; // Hozzáadjuk az aktuális karaktert az eredményhez
    }
    
    return result; // Visszatérünk a végeredménnyel
}


// function stringBits(str) {                               // Eszti
//     let result = "";
    
//     // Végigmegyünk a karakterláncon
//     for (let i = 0; i < str.length; i++) {
//     // Ellenőrizzük, hogy az index páros-e
//     if (i % 2 === 0) {
//     result += str[i]; // Hozzáadjuk a karaktert az új karakterlánchoz, ha páros az index
//     }
//     }
    
//     return result; // Visszatérünk az új karakterlánccal
// }

console.log(stringBits("Hello")); //"Hlo"
console.log(stringBits("Hi")); //"H"
console.log(stringBits("Heeololeo")); //"Hello"

console.log();

/***********************************************************************************************/
//Given a non-empty string like "Code" return a string like "CCoCodCode".

function concatString(str) {
    // Az eredmény string az első karaktert tartalmazza kétszer, majd a string egyre növekvő részeit
    return str[0] + str[0] + str.substring(0, 1) + str; 
}

console.log(concatString("Code")); // "CCoCodCode"
console.log(concatString("abc")); // "aababc"
console.log(concatString("ab")); // "aab"

console.log();

/***********************************************************************************************/
//Given a string, return a version where all the "x" have been removed. 
//Except an "x" at the very start or end should not be removed.

// function findX(str) {
//     let result = '';
//     if (str.length > 0 && str[0] === 'x'){               // Eszti
//         result += 'x'
//     }
//     for(let i = 1; i < str.length - 1; i++){
//         if(str[i] !== 'x'){
//             result += str[i];
//         }
//     }
//     if (str.length > 0 && str[str.length - 1] === 'x'){
//         result += 'x'
//     }
//     return str[0] + result + str[str.length - 1];

// }   

// function findX(str) {
//     // Ellenőrizzük, hogy a string hossza 1 vagy 2, és visszatérünk a változatlan stringgel                                     // Gipi
//     if (str.length <= 2) {
//         return str.replace(/x/g, ""); // Csak az "x"-eket távolítjuk el
//     }

//     // Külön kezeljük az eleji és a végi "x"-eket
//     const startX = str[0] === 'x' ? 'x' : ''; // Az első karakter "x"-e
//     const endX = str[str.length - 1] === 'x' ? 'x' : ''; // Az utolsó karakter "x"-e

//     // Az "x"-eket eltávolítjuk, és a kezdeti és végső "x"-eket visszaadjuk
//     return startX + str.slice(1, str.length - 1).replace(/x/g, "") + endX;
// }



function findX(str){                                            // Dani
    let valami = str[0]
    let valami2 = str[str.length -1]

    return valami + str.slice(1, str.length- 1).replace(/x/g, '')+ valami2
}

console.log(findX("xxHxix")); // "xHix"
console.log(findX("abxxxcd")); // "abcd"
console.log(findX("xabxxxcdx")); // "xabcdx"