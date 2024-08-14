//Given a string, return a new string where "not " has been added to the front. 
//However, if the string already begins with "not", return the string unchanged.

function checkString(str) {

}
console.log("checkString");
console.log(checkString('candy')); // "not candy"
console.log(checkString('x')); // "not x"
console.log(checkString('not bad')); // "not bad"

/***********************************************************************************************/
//Given a non-empty string and an n, return a new string where the char 
//at index n has been removed. The value of n will be a valid index of a char 
//in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

function missChar(str, n){

}

console.log(missChar("kitten", 1)); // "ktten"
console.log(missChar("kitten", 0)); // "itten"
console.log(missChar("kitten", 4)); //"kittn"

/***********************************************************************************************/
//Given a string, return a new string where the first and last chars have been exchanged.


function changeFrontBack(str) {

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

}

console.log('firstThree');
console.log(firstThree("Java")); // "JavJavJav"
console.log(firstThree("Chocolate")); // "ChoChoCho"
console.log(firstThree("abc")); // "abcabcabc"

/***********************************************************************************************/
//Given a string, take the last char and return a new string with the last char 
//added at the front and back, so "cat" yields "tcatt". 
//The original string will be length 1 or more.

function lastToFront(str) {

}

console.log(lastToFront("cat")); // "tcatt"
console.log(lastToFront("Hello")); // "oHelloo"
console.log(lastToFront("a")); // "aaa"

/***********************************************************************************************/
//Count the number of "xx" in the given string. We'll say that overlapping is allowed, 
//so "xxx" contains 2 "xx".

function findXX(str) {

}

console.log(findXX("abcxx")); // 1
console.log(findXX("xxx")); // 2
console.log(findXX("xxxx")); // 3

/***********************************************************************************************/
//Given a string, return a new string made of every other char starting with 
//the first, so "Hello" yields "Hlo".

function stringBits(str) {

}

console.log(stringBits("Hello")); //"Hlo"
console.log(stringBits("Hi")); //"H"
console.log(stringBits("Heeololeo")); //"Hello"

/***********************************************************************************************/
//Given a non-empty string like "Code" return a string like "CCoCodCode".

function concatString(str) {

}

console.log(concatString("Code")); // "CCoCodCode"
console.log(concatString("abc")); // "aababc"
console.log(concatString("ab")); // "aab"

/***********************************************************************************************/
//Given a string, return a version where all the "x" have been removed. 
//Except an "x" at the very start or end should not be removed.

function findX(str) {

}

console.log(findX("xxHxix")); // "xHix"
console.log(findX("abxxxcd")); // "abcd"
console.log(findX("xabxxxcdx")); // "xabcdx"