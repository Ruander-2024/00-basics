//*************************************************** FIRST *************************************************** */

//Írj egy programot, amely visszaadja a paraméterben kapott három elemű tömb elemeinek összegét.
// Eredmény:
//62
//21
//-3
console.log('Első feladat');

function sumArray(myArray) {
    // Az elemek összegzése
    let sum = 0;
    
    // Végigmegyünk a tömb elemein és hozzáadjuk őket a sum változóhoz
    for (let i = 0; i < myArray.length; i++) {
      sum += myArray[i];
    }
  
    return sum;
  }
  

console.log(sumArray([10, 32, 20]));
console.log(sumArray([5, 7, 9]));
console.log(sumArray([0, 8, -11]));


//*************************************************** SECOND *************************************************** */

//Paraméterben kap a funkció egy minimum egy elemű tömböt. 
//A program ellenőrizze le és adjon vissza true-t, ha a tömb első vagy utolsó eleme 3.

//Eredmény:
//true
//true
//false
console.log('Második feladat');

function findThree(myArray) {
    return myArray[0] === 3 || myArray[myArray.length - 1] === 3;
}


console.log(findThree([3, 7, 5]));
console.log(findThree([1, 3, 5, 3]));
console.log(findThree([2, 4, 6]));


//*************************************************** THIRD *************************************************** */

//Írj egy programot, amely a paraméterben kapott két tömb középső elemének felhasználásával létrehoz és
//visszaad egy új, két elemű tömböt. Mintkét tömb három elem hosszú.
//TIPP: Javascriptben a push() metódus hazsnálatával tudsz elemeket tenni tömbökbe

//Eredmény:
//[2, 5]
//[3, 8]
//[2, 4]
console.log('Harmadik feladat');

function takeMiddle(firstArray, secondArray) {
    let tomb1 = firstArray.splice(1, 1);
    let tomb2 = secondArray.splice(1,1);
    let tomb3 = tomb1.concat(tomb2);
    return tomb3;
}

console.log(takeMiddle([1, 2, 3], [1, 5, 6]));
console.log(takeMiddle([3, 3, 3], [2, 8, 0]));
console.log(takeMiddle([4, 2, 7], [2, 4, 5]));


//*************************************************** FOURTH *************************************************** */

//Write a JavaScript program to reverse the elements of a given array of integers length 3.
console.log('Negyedik feladat');

function reverseArray(myArray) {
    return myArray.reverse();
}


console.log(reverseArray([5, 4, 3]));
console.log(reverseArray([1, 0, -1]));
console.log(reverseArray([2, 3, 1]));


//*************************************************** FIFTH *************************************************** */

//Írj egy programot, amely ellenőrzi, hogy a paraméterben kapott kételemű tömb elemei között
// van-e 2-es vagy 5-ös szám. Ha igen, akkor adjon vissza a funkció true értéket, más esetben false-t.
console.log('Ötödik feladat');

function hasTwoOrFive(myArray) {
   return myArray.includes(2) || myArray.includes(5);
   }




console.log(hasTwoOrFive([7, 8]));
console.log(hasTwoOrFive([5, 9]));
console.log(hasTwoOrFive([0, 2]));



//*************************************************** SIXTH *************************************************** */

//Írj egy programot, amely megcseréli a paraméterben kapott tömb első és utolsó elemeit.
//A tömb hossza minimum egy.
console.log('Hatodik feladat');

function swapFirstAndLast(myArray) {
 
    if (myArray.length > 1) {
        let temp = myArray[0];  // Átmeneti változóban tároljuk az első elemet
        myArray[0] = myArray[myArray.length - 1];  // Az utolsó elemet tesszük az első helyre
        myArray[myArray.length - 1] = temp;  // Az eredeti első elemet tesszük az utolsó helyre
    }
    return myArray;  // Visszaadjuk a módosított tömböt
}


console.log(swapFirstAndLast([1, 2, 3, 4]));
console.log(swapFirstAndLast([0, 2, 1]));
console.log(swapFirstAndLast([3]));

//*************************************************** SEVENTH *************************************************** */

//Írj egy programot, amely megtalálja a paraméterben kapott tömb elemei közül a leghosszabb stringet tartalmazót.
console.log('Hetedik feladat');

function findLongest(myArray) {
    let longest = "";  // Kezdetben a leghosszabb string üres

    // Végigmegyünk a tömb elemein
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].length > longest.length) {  // Ha a jelenlegi string hosszabb, mint az eddigi leghosszabb
            longest = myArray[i];  // Akkor frissítjük a leghosszabb stringet
        }
    }

    return longest;  // Visszaadjuk a leghosszabb stringet
}

console.log(findLongest(['a', 'aa', 'aaa', 'aaaaa', 'aaaa']));