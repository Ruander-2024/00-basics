// Alap array (tömb) műveletek

const { compileString } = require("sass");

let myArray = ['Dog', 123, true, {}, []]

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);  // Undefined -> tömbön kívül mutat

const numList = [1, 2, 3, 4, 5];

numList[0] = 10;    // A tömb n-edik elemét meg tudjuk áltoztatni
console.log(numList);

// numList = [3, 4]    // A tömb értékeit nem tudjuk felülírni
// console.log(numList);


console.log("---- Push ----");
// push - elem hozzáadása a tömb végére
// Visszatérési értéke: a tömb új hossza

let newArrayLength = numList.push(12, 13);
console.log(numList)     // kiírja a hozzáadott elemekkel a listát
console.log(newArrayLength);  // kiírja az új tömb hosszát, hogy hány elemből áll

console.log("---- Pop ----");
// pop - eltávolítja az utolsó elemet
// Visszatérési értéke - kitörölt elem

let lastElement = numList.pop();
console.log(numList);
console.log(lastElement);

console.log("---- Unshift ----");
// unshift - Hozzáad egy elemet a tömb elejére
// Visszatérési értéke - a tömb új hossza
// Erőforrás igényű nagy tömbök esetén (mindenkinek változni fog az "id"-ja)

newArrayLenght = numList.unshift(1, 2);
console.log(numList);
console.log(newArrayLenght);

console.log("---- Shift ----");
// shift - Az első elemet távolítja el
// Visszatérési értéke - a kitörölt elem
// Erőforrás igényű nagy tömbök esetén (mindenkinek változni fog az "id"-ja)

let firstsElement = numList.shift();
console.log(numList);
console.log(firstsElement);

console.log("---- Slice ----");
// slice - kivág egy darabot. Nem módosítja a tömböt!
// Visszatérési értéke - Eredeti tömb egy részével tér vissza

const stringArray = ['one', 'two', 'three','one', 'two', 'three'];
const firtsTwoElements = stringArray.slice(0, 2);
// 0. elemtől a második indexű elemig, de a második indexű már nincsen benne

console.log(firtsTwoElements);
console.log('Eredeti', stringArray);
console.log(stringArray.slice(-2));  // Utolsó két elem kivágása
console.log(stringArray.slice(2, -1));  // Második indexű elemtől, az utolsó előttig

console.log("---- Array copy ----");
// Tömb másolás

const original = [1, 2, 3];
const copy = original.slice(0);

console.log(original);
console.log(copy);

// Tömbök összehasonlítása
console.log('Azonosak?', original === copy);  // Két különböző tömb, nem lesznek azonosak

console.log("---- Splice ----");
// Kivág egy darabot, de cserélhetünk is, illetve a tömböt is módosítja
// const stringArray = ['one', 'two', 'three','one', 'two', 'three'];

stringArray.splice(1, 1);   // Hányadik indexű elemet módosítsunk, hány elemet módosítsunk
console.log('Splice után: ', stringArray);
// Az első indexű elem törlése

// a 2. indexű elem cseréje
stringArray.splice(2, 1, 'zero', 'four');  // a 2. indexű elem törlése, 2 másik elem beillesztése a helyére
console.log('Splice adatcsere után: ', stringArray);

console.log("---- Empty items ----");
const dogNames = [];

dogNames[0] = 'buksi';
console.log(dogNames);

dogNames[4] = 'rex';
console.log(dogNames);

console.log(dogNames[2]);

console.log("---- Join ----");
// összefűzi a tömb elemeket vesszővel - alapértelmezett beállítás
// Visszatérési értéke: string elválasztva a zárójelben megadott karakterekkel

const elements = ['fire', 'air', 'water', 'earth'];
console.log(elements.join());
// fire,air,water,earth

console.log(elements.join('-'));

console.log("---- isArray ----");
// Megnézi, hogy tömböt kaptunk-e
// Visszatérési értéke: true vagy false

let arr = [1, 2, 3];
let arr2 = null;

console.log(Array.isArray(arr));  //true
console.log(Array.isArray(arr2));  // false



console.log('----- Hasznos példák -----');

const animals = ["dog", 'cat', 'fox'];
console.log('last element: ', animals[animals.length - 1]);

console.log(animals[2].charAt(0).toLocaleUpperCase() + animals[2].slice(1));
// Az utolsó elem első karakterének nagy betűssé változtatása


let numArray = [10, 15, 20]

let copyArray = [10, 15, 20]

function formatArray(numArray){
numArray.push(20);  // Elem hozzáadása a tömb végére
numArray.pop();     // Elem eltávolítása a tömb végéről
numArray.unshift(20);   // Elem beszúrása a tömb elejére
numArray.splice(1, 1, 4, 5);   //Az 1. indexű elemet kitöröltük és hozzáadtunk 2 másikat helyette
numArray.shift();   // Elem eltávolítása a tömb elejéről
numArray.join(','); // Összefűzés ',' elválasztással. Csak string-en működik az összefűzése
console.log(Array.isArray(numArray)); // Megvizsgáljuk, hogy tömböt kapunk-e
 


}

console.log(numArray);
console.log('Copy', copyArray);

function checkTwoArraysAreSame(arr1, arr2) {
    if((!Array.isArray(arr1) || !Array.isArray(arr2)) || (arr1.length !== arr2.length)){
        return false;
    }
    else{
        let areSame = true;
        for (let i = 0; i < arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                areSame = false;
                break;
            }
        }
        return areSame;
    }
}

console.log(checkTwoArraysAreSame(numArray, copyArray));
console.log(checkTwoArraysAreSame([1, 2, 3], [3, 2, 1]));
console.log(checkTwoArraysAreSame([1, 2, 3], undefined));
console.log(checkTwoArraysAreSame([1, 2, 3], [1, 2]));
console.log(checkTwoArraysAreSame([1, 2, 3], ['1', '2', '3']));
console.log(checkTwoArraysAreSame(['1', '2', '3'], ['1', '2', '3']));

