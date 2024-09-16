//*************************************************** FIRST *************************************************** */

//Írj egy programot, amely visszaadja a paraméterben kapott három elemű tömb elemeinek összegét.
// Eredmény:
//62
//21
//-3

function sumArray(myArray) {

    //TODO
    return myArray[0] + myArray[1] + myArray[2];
};

console.log(sumArray([10, 32, 20]));  // 62
console.log(sumArray([5, 7, 9]));     // 21
console.log(sumArray([0, 8, -11]));   // -3

// console.log(sumArray([10, 32, 20]));
// console.log(sumArray([5, 7, 9]));
// console.log(sumArray([0, 8, -11]));


//*************************************************** SECOND *************************************************** */

//Paraméterben kap a funkció egy minimum egy elemű tömböt. 
//A program ellenőrizze le és adjon vissza true-t, ha a tömb első vagy utolsó eleme 3.

//Eredmény:
//true
//true
//false

function findThree(myArray) {

    //TODO
    return myArray[0] === 3 || myArray[myArray.length - 1] === 3;
};

console.log(findThree([3, 7, 5]));    // true
console.log(findThree([1, 3, 5, 3])); // true
console.log(findThree([2, 4, 6]));    // false

// console.log(findThree([3, 7, 5]));
// console.log(findThree([1, 3, 5, 3]));
// console.log(findThree([2, 4, 6]));


//*************************************************** THIRD *************************************************** */

//Írj egy programot, amely a paraméterben kapott két tömb középső elemének felhasználásával létrehoz és
//visszaad egy új, két elemű tömböt. Mintkét tömb három elem hosszú.
//TIPP: Javascriptben a push() metódus hazsnálatával tudsz elemeket tenni tömbökbe

//Eredmény:
//[2, 5]
//[3, 8]
//[2, 4]

function takeMiddle(firstArray, secondArray) {

    //TODO

     // Kivesszük a középső elemeket mindkét tömbből
     const middleFirst = firstArray[1];
     const middleSecond = secondArray[1];
 
     // Létrehozunk egy új tömböt a két középső elemmel
     return [middleFirst, middleSecond];
};

console.log(takeMiddle([1, 2, 3], [1, 5, 6])); // [2, 5]
console.log(takeMiddle([3, 3, 3], [2, 8, 0])); // [3, 8]
console.log(takeMiddle([4, 2, 7], [2, 4, 5])); // [2, 4]

// console.log(takeMiddle([1, 2, 3], [1, 5, 6]));
// console.log(takeMiddle([3, 3, 3], [2, 8, 0]));
// console.log(takeMiddle([4, 2, 7], [2, 4, 5]));


//*************************************************** FOURTH *************************************************** */

//Write a JavaScript program to reverse the elements of a given array of integers length 3.

function reverseArray(myArray) {

    //TODO
    const [a, b, c] = myArray;
    return [c, b, a];

};

console.log(reverseArray([5, 4, 3])); // [3, 4, 5]
console.log(reverseArray([1, 0, -1])); // [-1, 0, 1]
console.log(reverseArray([2, 3, 1])); // [1, 3, 2]

// console.log(reverseArray([5, 4, 3]));
// console.log(reverseArray([1, 0, -1]));
// console.log(reverseArray([2, 3, 1]));


//*************************************************** FIFTH *************************************************** */

//Írj egy programot, amely ellenőrzi, hogy a paraméterben kapott kételemű tömb elemei között
// van-e 2-es vagy 5-ös szám. Ha igen, akkor adjon vissza a funkció true értéket, más esetben false-t.

function hasTwoOrFive(myArray) {

    //TODO
    return myArray.includes(2) || myArray.includes(5);
};

console.log(hasTwoOrFive([7, 8])); // false
console.log(hasTwoOrFive([5, 9])); // true
console.log(hasTwoOrFive([0, 2])); // true

// console.log(hasTwoOrFive([7, 8]));
// console.log(hasTwoOrFive([5, 9]));
// console.log(hasTwoOrFive([0, 2]));



//*************************************************** SIXTH *************************************************** */

//Írj egy programot, amely megcseréli a paraméterben kapott tömb első és utolsó elemeit.
//A tömb hossza minimum egy.

function swapFirstAndLast(myArray) {

    //TODO
    if (myArray.length <= 1) {
        return myArray;
    }
    const first = myArray[0];
    const last = myArray[myArray.length - 1];

    myArray[0] = last;
    myArray[myArray.length - 1] = first;

    return myArray;
};

console.log(swapFirstAndLast([1, 2, 3, 4])); // [4, 2, 3, 1]
console.log(swapFirstAndLast([0, 2, 1]));    // [1, 2, 0]
console.log(swapFirstAndLast([3]));          // [3]

// console.log(swapFirstAndLast([1, 2, 3, 4]));
// console.log(swapFirstAndLast([0, 2, 1]));
// console.log(swapFirstAndLast([3]));

//*************************************************** SEVENTH *************************************************** */

//Írj egy programot, amely megtalálja a paraméterben kapott tömb elemei közül a leghosszabb stringet tartalmazót.

function findLongest(myArray) {

    //TODO
 let longest = '';


 for (const str of myArray) {
     
     if (str.length > longest.length) {
         longest = str;
     }
 }

 return longest;
}

console.log(findLongest(['a', 'aa', 'aaa', 'aaaaa', 'aaaa'])); // 'aaaaa'

// console.log(findLongest(['a', 'aa', 'aaa', 'aaaaa', 'aaaa']))


