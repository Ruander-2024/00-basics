//Given a string, return a new string where "not " has been added to the front. 
//However, if the string already begins with "not", return the string unchanged.

function checkString(str) {
    if (str.startsWith('not')) {
        return str;
        } else {
        return 'not ' + str;
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

// function missChar(str, n){

// }

function missChar(str, n) {
    if (n < 0 || n >= str.length) {
    return str;
    }
    return str.slice(0, n) + str.slice(n + 1);
    }

console.log(missChar("kitten", 1)); // "ktten"
console.log(missChar("kitten", 0)); // "itten"
console.log(missChar("kitten", 4)); //"kittn"
console.log();

/***********************************************************************************************/
//Given a string, return a new string where the first and last chars have been exchanged.


function changeFrontBack(str) {
    if(str.length === 1) {
        return str;
    }
    else{
        return str[str.length - 1] + str.slice(1, str.length - 1) + str[0]
    }
}

function changeFrontBack(str) {
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

function firstThree(str) {
    if (str.length < 3) {
        return str;
        }
        
        let firstThree = str.substring(0, 3); // Az első három karakter kiválasztása
        return firstThree + firstThree + firstThree;
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

function lastToFront(str) {
    let last = str.slice(str.length - 1); // let last = str[str-lenght - 1]         substring használata is jó
    return last + str + last;
}

console.log(lastToFront("cat")); // "tcatt"
console.log(lastToFront("Hello")); // "oHelloo"
console.log(lastToFront("a")); // "aaa"

/***********************************************************************************************/
//Count the number of "xx" in the given string. We'll say that overlapping is allowed, 
//so "xxx" contains 2 "xx".

function findXX(str) {
    let matches = str.match(/(?=xx)/gi)
    return matches ? matches.length : 0;
    // if(matches){
    //     return matches.length
    // }
    // else{
    //     return 0;
    // }
}

console.log(findXX("abcxx")); // 1
console.log(findXX("xxx")); // 2
console.log(findXX("xxxx")); // 3
console.log(findXX("sfghj")); // 0
console.log();

/***********************************************************************************************/
//Given a string, return a new string made of every other char starting with 
//the first, so "Hello" yields "Hlo".

function stringBits(str) {
    return str.split('').filter((karakter, index) => index % 2 === 0).join('');
    }

// function stringBits(str){
//     let i = 0;
//     let result = '';

//     while(i < str.length){
//         result += str[i];
//         i += 2;
//     }

//     return result;
// }

    // function stringBits(str) {
    //     let result = "";
        
    //     // Végigmegyünk a karakterláncon
    //     for (let i = 0; i < str.length; i++) {
    //     // Ellenőrizzük, hogy az index páros-e
    //     if (i % 2 === 0) {
    //     result += str[i]; // Hozzáadjuk a karaktert az új karakterlánchoz, ha páros az index    result = result + str[i]
    //     }
    //     }
        
    //     return result; // Visszatérünk az új karakterlánccal
    // }

    // function stringBits(str) {
    //     let result = "";
    //     for (let i = 0; i < str.length; i += 2) {
    //     result += str[i];
    //     }
    //     return result;
    //     }

console.log(stringBits("Hello")); //"Hlo"
console.log(stringBits("Hi")); //"H"
console.log(stringBits("Heeololeo")); //"Hello"
console.log();

/***********************************************************************************************/
//Given a non-empty string like "Code" return a string like "CCoCodCode".

function concatString(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
    result += str.slice(0, i + 1);
    }
    return result;
}

function concatString(str) {
    let i = 1;
    let result = '';

    while(i <= str.length){
        result = result + str.slice(0, i); // result += str.slice(0, i);
        i++;
    }
    return result;
}

console.log(concatString("Code")); // "CCoCodCode"
console.log(concatString("abc")); // "aababc"
console.log(concatString("ab")); // "aab"
console.log();

/***********************************************************************************************/
//Given a string, return a version where all the "x" have been removed. 
//Except an "x" at the very start or end should not be removed.

function findX(str) {
    let result = '';
    for(let i = 1; i < str.length - 1; i++){
        if(str[i] !== 'x'){
            result += str[i];
        }
    }
    return str[0] + result + str[str.length - 1];
}

function findX(str){
    let valami = str[0]
    let valami2 = str[str.length -1]

    return valami + str.slice(1, str.length- 1).replace(/x/g, '') + valami2;
}

function findX(str){
    return str[0] + str.slice(1, str.length - 1).replace(/x/g, '') + str[str.length - 1];
}

console.log(findX("xxHxix")); // "xHix"
console.log(findX("abxxxcd")); // "abcd"
console.log(findX("xabxxxcdx")); // "xabcdx"