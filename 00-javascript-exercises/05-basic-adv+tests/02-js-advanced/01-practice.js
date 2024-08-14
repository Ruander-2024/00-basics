// In this challenge, you will get 1 string and two numbers as parameters. 
// Your task is to make a function that has to return with a list instructions 
// in the Output Format section below. To make the problem a little easier, 
// a portion of the code is provided for you in the editor.

// Input:
// given 3 parameters: ( a string and two numbers (one intenger and one fraction)):

// For example:
// “Welcome to Progmasters” 
// 4
// 3.14							
// 

// Output:
// return a list with the format below:
// [“String: Welcome to Progamsters”, “Int: 42”,”Double:  3.14” ] 	
// return an Array contains strings

function addPrimitiveType(word1, word2, word3) {


}

//console.log(addPrimitiveType('Welcome to Progmasters', 42, 3.14)) //Output ['String: Welcome to Progmasters, 'Int: 42', 'Double: 3.14']

/******************************************** TASK 2 ******************************************/

// Given an integer, n, perform the following conditional actions:
// Write a function, that get the “n” parameter and:

// If n is odd, return 'Weird'.
// If n is even and in the inclusive range of 2 to 5,return 'Not Weird'.
// If n is even and in the inclusive range of 6 to 20, return 'Weird'.
// If n is even and greater than 20, return 'Not Weird'.
// Complete the stub code provided in your editor.
//⇒ given a simple number as parameter

// Output
// number equals to 10
// ⇒ return with a simple string ‘Weird’ or ‘Not Weird’

function isWeird(number) {

}
//console.log(isWeird(33));     //Output 'Weird';
//console.log(isWeird(4));     //Output 'Not Weird';
//console.log(isWeird(36));     //Output 'Not Weird';

/******************************************** TASK 3 ******************************************/

// In this challenge, we're going to use loops to help us do some simple math.
// Given an integer, n, make a list with its first 10 multiples.
// Each multiple n x i(where 1 <= i <= 10) should be added 
// to a list in the form: 'n x i = result'.

// Input Format
// A single integer, n.
// (For example: 2)

// Output Format
// ( return a simple array includes strings)
// [“2 x 1 = 2”, “2 x 2 = 4”....]

function multiples(number) {

}

//console.log(multiples(2));   //Output ["2 x 1 = 2", "2 x 2 = 4", "2 x 3 = 6", .....]

/******************************************** TASK 4 ******************************************/

// Given an array as a function parameter. Create a 'clone' of the array and return the new array..
// Using a loop through the parameter, save each sequential value to its corresponding location in the new array.
// Good luck!

function makingNewArray(listOfNumbers) {

}

// console.log(makingNewArray([3,4,5]));   //Output: [3,4,5]

/******************************************** TASK 5 ******************************************/

// Given a string, and two indices as an Array(start and end), 
// your function has to return a substring consisting of all characters 
// in the inclusive range from start to end - 1.

function getSubstring(word, indexPair) {

}
//console.log('Hello mi', [1,4]);        //Output: 'ell'

/******************************************** TASK 6 ******************************************/

// "A palindrome is a word, phrase, number, or other sequence of characters 
// which reads the same backward or forward."(Wikipedia)
// Given a string A, return 'Yes' if it is a palindrome, print 'No' otherwise.

function isPalindrome(word) {


}
//console.log(isPalindrome('MadaM'));         // Output:  'Yes'
//console.log(isPalindrome('Madam'));            //Output: 'No'

/******************************************** TASK 7 ******************************************/

// You are given a 6x6 2D array.An hourglass in an array is a portion shaped like this:

// a b c
//   d
// e f g

// For example, if we create an hourglass using the number 1 within an array full of zeros, it may look like this:

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0

// Actually, there are many hourglasses in the array above.The three upper leftmost hourglasses are the following:

// 1 1 1     1 1 0     1 0 0
//   1         0         0
// 1 1 1     1 1 0     1 0 0


// The sum of an hourglass is the sum of all the numbers within it.
// The sum for the hourglasses above are 7, 4, and 2, respectively.

// In this problem you have to print the largest sum among all the hourglasses in the array.
// Input Format
// There will be a 2D Array, that containing 6 list.Each of the list includes 6 integers.
// Each integer will be between - 9 and 9 inclusive.
// For example: [[1, 2, 0, 0, 3, 5], [1, 2, 9, 0, -1, 4]]

function hourGlass(list) {


}
// Paraméter deklarálás 
let myHourGlass = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 41, 0],
    [0, 0, 0, 0, 0, 0]
];

//console.log(hourGlass(myHourGlass));        // Output: 42;




/******************************************** TASK 8 ******************************************/

// Given a string and an int n, make a new string made of n + 1 repetitions 
// of the last n characters of the string.You may assume that n is between 
// 0 and the length of the string, inclusive.

// Input Format
// There are two parameters as input:
// The first is  a string.⇒  (“Hello")
// The second is an integer.⇒ 	2)

// Output Format
// A single String.
// ⇒ “lololo”

function repetitionsOfString(str, n) {

}

// console.log(repetitionsOfString("Hello", 2 ));          //Output: 'lololo';

/******************************************** TASK 9 ******************************************/

// Given two strings, a and b, create a bigger string made of the 
// first char of b, the first char of a, the second char of b, the 
// second char of a, and so on.Any leftover chars go to the end of the result.

// Input Format
// There are two simple strings as parameters.
// function (“Hi”, “there”) {..

// Output Format
// A single String.
// ⇒ “tHhiere”


function addStringTogoether(strA, strB) {

}

// console.log(addStringTogoether("Hi", "there"));             //Output: "tHhiere"

/******************************************** TASK 10 ******************************************/

// Given an array of integers, return 'false' if the value '3' appears in the array 
// exactly 3 times and there is any different digits between of them.
//Otherwise return 'true'.

// Input Format
// Given an array as parameter.
// [3, 1, 3, 3]

// Output Format
// Simply the word 'true' or 'false'.
// ⇒ true

function inThree(list) {


}
// console.log(inThree([3, 1, 3, 3]));              //Output: 'true'
// console.log(inThree([3, 3, 3]));        //Output: 'true'
// console.log(inThree([3, 1, 3, 7]));         //Output: 'true'
// console.log(inThree([3, 1, 3, 1, 3]))       //Output: 'false'
/******************************************** TASK 11 ******************************************/

// Given an array of integers, print 'true' if the number of '1's is fewer than the number of '4's.

// Input Format
// Simple Array
// For example: [2, 1, 4]

// Output Format
// Simply the word 'true' or 'false'.
// ⇒ ‘false’

function oneIsLess(list) {



}
// console.log(oneIsLess[2,1,4]);              //Output: 'false'
// console.log(oneIsLess([4,1,1,6,7,4,4]));           //Output: 'true'

/******************************************** TASK 12 ******************************************/

// We'll say that a "quadruple" in a string is a char appearing 
// four times in a row. Print the number of quadruples in the given string. 
// The quadruples may overlap.

// Input Format
// A single string as parameter.⇒ “abcXXXXXabc”

// Output Format
// A number.
// ⇒ 2


function quadruple(str) {


}

// console.log(quadruple('abcXXXXXabc'));          //Output: 2

/******************************************** TASK 13 ******************************************/

// We call a sequence of identical characters a 'block'.Print the length of the largest 
// 'block' in the given string.

// Input Format
// A single string.
// For example: ⇒  “hooray”

// Output Format
// A number.
// ⇒ 2

function biggestBlock(str) {


}

//console.log(biggestBlock('horray'));        //Output: 2

/******************************************** TASK 14 ******************************************/

// Given an array of scores, print 'true' if each score is equal to or 
// lower than the one preceding it.

// Input Format
// A simple Array contains integers
// For example: [4, 3, 2]

// Constraint
// The length of the array will be 2 or more.

// Output
// Simply the word 'true' or 'false'.
// ⇒ ‘true’

function lowerScores(list) {

}

// console.log(lowerScores([4,3,2]));              //Output: 'true'
// console.log(lowerScores([2,6,5,4,3]));           //Output:'false'

module.exports = {
    addPrimitiveType,
    isWeird,
    multiples,
    makingNewArray,
    getSubstring,
    isPalindrome,
    hourGlass,
    repetitionsOfString,
    addStringTogoether,
    inThree,
    oneIsLess,
    lowerScores,
    biggestBlock,
    quadruple
};