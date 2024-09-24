//Given a string, return a new string where "not " has been added to the front. 
//However, if the string already begins with "not", return the string unchanged.

function checkString(str) {
    if (str.includes("not")) {
        return "unchanged";
    } 
    else{
        return "not " + str;
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

function missChar(str, n){
    return str.slice(0, n) + str.slice(n + 1);
}

console.log(missChar("kitten", 1)); // "ktten"
console.log(missChar("kitten", 0)); // "itten"
console.log(missChar("kitten", 4)); //"kittn"
console.log();


/***********************************************************************************************/
//Given a string, return a new string where the first and last chars have been exchanged.


function changeFrontBack(str) {
    if (str.length === 1){
        return str;
    }
    else{
        return str.charAt(str.length - 1) + str.slice(1, str.length - 1) + str.charAt(0);
    }
}

console.log('changeFrontBack');
console.log(changeFrontBack("code")); // "eodc"
console.log(changeFrontBack("a")); // "a"
console.log(changeFrontBack("ab")); // "ba"

/***********************************************************************************************/
//Given a string, we'll say that the front is the first 3 chars of the string. 
//If the string length is less than 3, the front is whatever is there. 
//Return a new string which is 3 copies of the front.

function firstThree(str) {
    if (str.length < 3) {
        return str;
        }
        
        let firstThree = str.substring(0, 3);
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
    let last = str.slice(str.length -1);
    return last + str + last;
}

console.log(lastToFront("cat")); // "tcatt"
console.log(lastToFront("Hello")); // "oHelloo"
console.log(lastToFront("a")); // "aaa"

/***********************************************************************************************/
//Count the number of "xx" in the given string. We'll say that overlapping is allowed, 
//so "xxx" contains 2 "xx".

function findXX(str){
    let matches = str.match(/(?=xx)/g);
    return matches ? matches.length : 0;
    if(matches){
        return matches.length;
    }
    else{
        return 0;
    }
}

console.log(findXX("abcxx")); // 1
console.log(findXX("xxx")); // 2
console.log(findXX("xxxx")); // 3
console.log(findXX("fpwfj")); // 0
console.log();



/***********************************************************************************************/
//Given a string, return a new string made of every other char starting with 
//the first, so "Hello" yields "Hlo".

function stringBits(str) {
    let result = ""; 
    for (let i = 0; i < str.length; i += 2) {
        result += str[i];
    }
    return result;
}

console.log(stringBits("Hello")); //"Hlo"
console.log(stringBits("Hi")); //"H"
console.log(stringBits("Heeololeo")); //"Hello"
console.log();


/***********************************************************************************************/
//Given a non-empty string like "Code" return a string like "CCoCodCode".

function concatString(str) {
    /*let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str.slice(0, i + 1);
    }
return result;*/
let i = 1;
    let result ='';

    while(i <= str.length){
        result += str.slice(0, i);
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
    if (str.length <= 2) {
        return str;
    }
    let firstChar = str[0];
    let lastChar = str[str.length - 1];
    let middlePart = str.slice(1, str.length - 1).replace(/x/g, '');
    return firstChar + middlePart + lastChar;
}

console.log(findX("xxHxix")); // "xHix"
console.log(findX("abxxxcd")); // "abcd"
console.log(findX("xabxxxcdx")); // "xabcdx"