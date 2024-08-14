//FELADAT: Vizsgáld meg hogy egész szám páros-e?
//True v. False értéket (boolean-t) adjon vissza

// Hogy tudjuk megvizsgálni egy szám osztásának maradékát?
// Használnunk kell a "modulo osztást", jele a '%' : példa: 5 % 2     // Output: 1
// Sima osztás eredménye egész számra "kerekítődik": példa: 7 / 2    //Output 3

//console.log(checkNumberIsEven(3))             //Output: false
//console.log(checkNumberIsEven(4))             //Output: true
function checkNumberIsEven(num) {

}
console.log(checkNumberIsEven(10));
console.log(checkNumberIsEven(7));
console.log(checkNumberIsEven(45));


// FELADAT: Vizsgáld meg, hogy egy szám osztható-e maradék nélkül 2-vel vagy 3-al
//ha egyikkel sem, írja ki 'false'
//ha mindkettővel akkor írja ki 'both';
//egyéb esetben írja ki a paraméterben megadott számot

//console.log(checkNumberDivisionByTwoOrThree(2))       Output: 2
//console.log(checkNumberDivisionByTwoOrThree(6))       Output: 'both'
//console.log(checkNumberDivisionByTwoOrThree(7))       Output: 'false' (szöveggel)
//console.log(checkNumberDivisionByTwoOrThree(9))       Output: 9

function checkNumberDivisionByTwoOrThree(num) {


}
console.log(checkNumberDivisionByTwoOrThree(2))
console.log(checkNumberDivisionByTwoOrThree(6))
console.log(checkNumberDivisionByTwoOrThree(7))
console.log(checkNumberDivisionByTwoOrThree(9))

//FELADAT: Adjon össze két számot, de csak akkor ha egyik sem kisebb mint nulla.
//Ha van köztük negativ szám akkor térjen vissza 'false' értékkel

//Megjegyzés: ha több feltételt akarok vizsgálni és fontos,
//hogy mindegyik oldal teljesüljön, akkor a '&&' jelet kell használnom.
//Példa: ha vizsgálom hogy két szám megegyezik és nagyobb nullánál: szam1 === szam2 && szam1 > 0


//Output: false
//Output: 6
//Output: false

function addTwoPositivNumber(num1, num2) {

}

console.log(addTwoPositivNumber(2, -4));
console.log(addTwoPositivNumber(2, 4));
console.log(addTwoPositivNumber(-2, -4));


//FELADAT: Vizsgálja meg hogy a kapott két paraméter között van e páratlan szám?

//Megjegyzés: ha úgy akarok több feltételt vizsgálni, hogy elég ha csak valamelyik oldal igaz,
//akkor a '||' jelet kell használnom.
//Példa: vizsgálom hogy két számjegy közül az egyik szám nagyobb, mint nulla: num1 > 0 || num2 > 0

//Output: true (boolean tipusu visszatérés)
//Output: false (boolean tipusu visszatérés)

function getOddNumber(num1, num2) {

}
console.info('getOddnumber');
console.log(getOddNumber(3, 6));
console.log(getOddNumber(8, 2));

//FELADAT: egy két-vagy-három elemű listából írja ki a harmadik számjegyét.
//Ha két számjegyű a lista, akkor adj hozzá egy 0-át, hogy biztosan legyen benne 3 érték.
//És utána írd ki a 3. jegyet

//Megjegyzés: egy lista deklarálása: var myList = [3,4,5,12]  (bármilyen adatot bele tudok tenni, vegyesen is)
//Új elem hozzáadása  myList.push(nemElem)   itt, egy változót is adhatok, vagy bármilyen egyéb értéket
//Egy listában az elemek pozíciója (indexe) 0-val indul. Így érem el a Második számjegyet: myList[1]
//Lista méretének lekérése: myList.length

//Output: 0
//Output: 11

function printThirdNumber(list) {
}
console.info('printThirdNumber');
console.log(printThirdNumber([3, -5]));
console.log(printThirdNumber([4, 6, 11]));

//FELADAT: írj ki minden értéket egy listából.
//Megjegyzés a for ciklussal lehet valami vizsgálatot, tevékenységet ciklikusan csinálni:
//Három része van:
//- egy változó (számláló deklarása, bármilyen induló értékkel)
//- egy feltétel a változóra (tehát amig igaz, addig tart a ciklus)
//- és egy művelet, a változóval (i++ itt az jelenti, hogy mindig eggyel nővelje értékét)

// Példa: for(var i = 1; i < 4, i++){}    ==> 1, től 3-ig (mig "i" kisebb mint 4) növeli az i értékét

//a kapcsos zárójelen belül tudok műveletet végezni, index-et ('i') felhasználni


//Output: 3
//        2
//        1

function printAllNumberFromList(list) {

}
console.log(printAllNumberFromList([3, 2, 1]));

//Feladat írd ki fordított sorrendben a számokat
//Megjegyzés az index induláskor nem csak 0 vagy 1 lehet. Illetve a ciklusban nem csak nővelni,
//hanem csökkenteni is lehet egy értéket (--i)
//Figyelj arra, hogy a listában az index 1-ról indul, tehát a tömb hossza, mindig 1-el több,
//mint az utolsó szám indexe

//console.log(printReverse([2,4,6]))              //Output: 6
//                                                          4
//                                                          2
function printReverse(list2) {

}
console.info('printReverse');
console.log(printReverse([2, 4, 6]));

//FELADAT Készíts egy üres listát és egy másik kapott lista minden második számjegyét
//rakd bele. Logózd ki az új listádat

//Output:[2,44]

function printEvenNums(list) {

}
console.log(printEvenNums([21, 2, 3, 44, 5]));


//FELADAT kapsz két listát, hasonlitsd össze őket, és írd ki a nagyobb lista méretének értékét
//egyenlőség esetén egyik lista méretét

//Output: 4
//Output: 3

function printBiggerListSize(list1, list2) {

}
console.log(printBiggerListSize([3, 2, 1], [false, 4, 7, 8]));
console.log(printBiggerListSize([3, 2, 1], [false, 4, 8]));


//FELADAT kapsz két listát, ha egyenlő a méretűk és az első számjegyük vagy a méretük és az utolsó számjegyük,
//akkor írd ki, hogy 'similar'
//ha nem, akkor 'not similar'

//Megjegyéz: a 'vagy' ('||') vizsgálatot lehet ötvözni az 'és' ('&&') vizsgálattal.
//érdemes zárójelbe tenni a különböző vizsgálatokat, hogy jobban követhető legyen,
//hol vannak a határai a vizsgálatoknak

//Output: 'similar'
//Output: 'not similar'
//Output: 'not similar'
//Output: 'similar'


function checkSimilarList(list1, list2) {

}

console.log(checkSimilarList([1, 4, 11], [1, 3, 13]));
console.log(checkSimilarList([4, 4, 32], [4, 32]));
console.log(checkSimilarList([9, 4, 11], [4, 3, 23, 11]));
console.log(checkSimilarList([9, 4, 11, 6], [4, 3, 23, 6]));
