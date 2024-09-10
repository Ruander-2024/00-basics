//*************************************************** FIRST *************************************************** */

//Írj egy programot, amely visszaadja a paraméterben kapott három elemű tömb elemeinek összegét.
// Eredmény:
//62
//21
//-3

function sumArray(myArray) {
  return myArray[0] + myArray[1] + myArray[2];
}

console.log(sumArray([10, 32, 20]));  // 62
console.log(sumArray([5, 7, 9]));     // 21
console.log(sumArray([0, 8, -11]));   // -3


//*************************************************** SECOND *************************************************** */

//Paraméterben kap a funkció egy minimum egy elemű tömböt. 
//A program ellenőrizze le és adjon vissza true-t, ha a tömb első vagy utolsó eleme 3.

//Eredmény:
//true
//true
//false


function findThree(myArray) {
  return myArray[0] === 3 || myArray[myArray.length - 1] === 3;
}

console.log(findThree([3, 7, 5]));    // true
console.log(findThree([1, 3, 5, 3])); // true
console.log(findThree([2, 4, 6]));    // false

//*************************************************** THIRD *************************************************** */

//Írj egy programot, amely a paraméterben kapott két tömb középső elemének felhasználásával létrehoz és
//visszaad egy új, két elemű tömböt. Mintkét tömb három elem hosszú.
//TIPP: Javascriptben a push() metódus hazsnálatával tudsz elemeket tenni tömbökbe

//Eredmény:
//[2, 5]
//[3, 8]
//[2, 4]

function takeMiddle(firstArray, secondArray) {
    let newArray = [];
    newArray.push(firstArray[1]); // Az első tömb középső eleme
    newArray.push(secondArray[1]); // A második tömb középső eleme
    return newArray;
}

console.log(takeMiddle([1, 2, 3], [1, 5, 6]));  // [2, 5]
console.log(takeMiddle([3, 3, 3], [2, 8, 0]));  // [3, 8]
console.log(takeMiddle([4, 2, 7], [2, 4, 5]));  // [2, 4]

//*************************************************** FOURTH *************************************************** */

//Write a JavaScript program to reverse the elements of a given array of integers length 3.

//Írjon egy JavaScript programot, amely megfordítja egy adott 3 hosszúságú egész tömb elemeit.

function reverseArray(myArray) {
    // Az elemek megfordítása
    return [myArray[2], myArray[1], myArray[0]];
}

console.log(reverseArray([5, 4, 3]));  // [3, 4, 5]
console.log(reverseArray([1, 0, -1])); // [-1, 0, 1]
console.log(reverseArray([2, 3, 1]));  // [1, 3, 2]


//*************************************************** FIFTH *************************************************** */

//Írj egy programot, amely ellenőrzi, hogy a paraméterben kapott kételemű tömb elemei között
// van-e 2-es vagy 5-ös szám. Ha igen, akkor adjon vissza a funkció true értéket, más esetben false-t.

function hasTwoOrFive(myArray) {
    return myArray.includes(2) || myArray.includes(5); 
    // || vagy (or) && és (and)
}

console.log(hasTwoOrFive([7, 8]));  // false
console.log(hasTwoOrFive([5, 9]));  // true
console.log(hasTwoOrFive([0, 2]));  // true



//*************************************************** SIXTH *************************************************** */

//Írj egy programot, amely megcseréli a paraméterben kapott tömb első és utolsó elemeit.
//A tömb hossza minimum egy.

function swapFirstAndLast(myArray) {
    if (myArray.length > 1) {
        let firstElement = myArray[0];
        let lastElement = myArray[myArray.length - 1];
        
        // Cseréljük meg az első és utolsó elemeket
        myArray[0] = lastElement;
        myArray[myArray.length - 1] = firstElement;
    }
    return myArray;
}

console.log(swapFirstAndLast([1, 2, 3])); // [3, 2, 1]
console.log(swapFirstAndLast([10, 20]));  // [20, 10]
console.log(swapFirstAndLast([5]));       // [5] (nincs csere, mert csak egy elem van)

//*************************************************** SEVENTH *************************************************** */

//Írj egy programot, amely megtalálja a paraméterben kapott tömb elemei közül a leghosszabb stringet tartalmazót.

function findLongest(myArray) {
    let longest = myArray[0];  // Kezdjük az első elemmel

    for (let i = 1; i < myArray.length; i++) {
        if (myArray[i].length > longest.length) {
            longest = myArray[i];  // Frissítjük a leghosszabb stringet
        }
    }

    return longest;
}

console.log(findLongest(['a', 'aa', 'aaa', 'aaaaa', 'aaaa']));  // 'aaaaa'