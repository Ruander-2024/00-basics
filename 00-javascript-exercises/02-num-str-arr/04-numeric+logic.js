//FELADAT: Vizsgáld meg hogy egész szám páros-e?
//True v. False értéket (boolean-t) adjon vissza

// Hogy tudjuk megvizsgálni egy szám osztásának maradékát?
// Használnunk kell a "modulo osztást", jele a '%' : példa: 5 % 2     // Output: 1
// Sima osztás eredménye egész számra "kerekítődik": példa: 7 / 2    //Output 3

// console.log(checkNumberIsEven(3))             //Output: false
// console.log(checkNumberIsEven(4))             //Output: true

function checkNumberIsEven(num) {                                   // Gipi
    return num % 2 === 0;
  }

// function checkNumberIsEven(num) {                                   // Márk
//     if(num % 2 != 0){
//         return false;
//     }
//     else{

//     }
        
// }

console.log(checkNumberIsEven(10));
console.log(checkNumberIsEven(7));
console.log(checkNumberIsEven(45));

console.log()

// FELADAT: Vizsgáld meg, hogy egy szám osztható-e maradék nélkül 2-vel vagy 3-al
//ha egyikkel sem, írja ki 'false'
//ha mindkettővel akkor írja ki 'both';
//egyéb esetben írja ki a paraméterben megadott számot

//console.log(checkNumberDivisionByTwoOrThree(2))       Output: 2
//console.log(checkNumberDivisionByTwoOrThree(6))       Output: 'both'
//console.log(checkNumberDivisionByTwoOrThree(7))       Output: 'false' (szöveggel)
//console.log(checkNumberDivisionByTwoOrThree(9))       Output: 9

function checkNumberDivisionByTwoOrThree(num) {                 //Aliz
    if(num % 2 === 0 && num % 3 === 0){
        return 'both';
        }
    else if(num % 2 === 0 || num % 3 === 0){
        return num;
        }
    else if(num % 2 !== 0 && num % 3 !== 0){
        return 'false';
        }

}
console.log(checkNumberDivisionByTwoOrThree(2))
console.log(checkNumberDivisionByTwoOrThree(6))
console.log(checkNumberDivisionByTwoOrThree(7))
console.log(checkNumberDivisionByTwoOrThree(9))

console.log()

//FELADAT: Adjon össze két számot, de csak akkor ha egyik sem kisebb mint nulla.
//Ha van köztük negativ szám akkor térjen vissza 'false' értékkel

//Megjegyzés: ha több feltételt akarok vizsgálni és fontos,
//hogy mindegyik oldal teljesüljön, akkor a '&&' jelet kell használnom.
//Példa: ha vizsgálom hogy két szám megegyezik és nagyobb nullánál: szam1 === szam2 && szam1 > 0


//Output: false
//Output: 6
//Output: false

function addTwoPositivNumber(num1, num2) {
    // Ellenőrizzük, hogy mindkét szám pozitív-e
    if (num1 > 0 && num2 > 0) {
      return num1 + num2; // Visszatérünk az összeadott értékkel
    } else {
      return false; // Ha bármelyik szám nem pozitív, false-t adunk vissza
    }
  }
console.log(addTwoPositivNumber(2, -4));
console.log(addTwoPositivNumber(2, 4));
console.log(addTwoPositivNumber(-2, -4));

console.log()

//FELADAT: Vizsgálja meg hogy a kapott két paraméter között van e páratlan szám?

//Megjegyzés: ha úgy akarok több feltételt vizsgálni, hogy elég ha csak valamelyik oldal igaz,
//akkor a '||' jelet kell használnom.
//Példa: vizsgálom hogy két számjegy közül az egyik szám nagyobb, mint nulla: num1 > 0 || num2 > 0

//Output: true (boolean tipusu visszatérés)
//Output: false (boolean tipusu visszatérés)

function getOddNumber(num1, num2) {
    // Ellenőrizzük, hogy az egyik szám páratlan-e
    return num1 % 2 !== 0 || num2 % 2 !== 0; // Visszatérünk true-val, ha bármelyik szám páratlan
  }

console.info('getOddnumber');
console.log(getOddNumber(3, 6));
console.log(getOddNumber(8, 2));

console.log()

//FELADAT: egy két-vagy-három elemű listából írja ki a harmadik számjegyét.
//Ha két számjegyű a lista, akkor adj hozzá egy 0-át, hogy biztosan legyen benne 3 érték.
//És utána írd ki a 3. jegyet

//Megjegyzés: egy lista deklarálása: var myList = [3,4,5,12]  (bármilyen adatot bele tudok tenni, vegyesen is)
//Új elem hozzáadása  myList.push(nemElem)   itt, egy változót is adhatok, vagy bármilyen egyéb értéket
//Egy listában az elemek pozíciója (indexe) 0-val indul. Így érem el a Második számjegyet: myList[1]
//Lista méretének lekérése: myList.length

//Output: 0
//Output: 11

// function printThirdNumber(list) {                        //Gipi
//   // Ha a lista hossza 2, adjunk hozzá egy 0-t
//   if (list.length === 2) {
//     list.push(0);
//   }
  
//   // A harmadik számjegy kiírása (index 2)
//   return list[2];
// }

function printThirdNumber(list) {                   //Márk
    if (list.length < 3){
        list.push(0);
        return list.pop();        
    }
    else{
        return list.pop();
    }

}


console.info('printThirdNumber');
console.log(printThirdNumber([3, -5]));
console.log(printThirdNumber([4, 6, 11]));

console.log()

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
    for(let i = 0; i < list.length; i++){
        console.log(list[i]);
        }
}
console.log(printAllNumberFromList([3, 2, 1]));

console.log()

//Feladat írd ki fordított sorrendben a számokat
//Megjegyzés az index induláskor nem csak 0 vagy 1 lehet. Illetve a ciklusban nem csak nővelni,
//hanem csökkenteni is lehet egy értéket (--i)
//Figyelj arra, hogy a listában az index 1-ról indul, tehát a tömb hossza, mindig 1-el több,
//mint az utolsó szám indexe

//console.log(printReverse([2,4,6]))              //Output: 6
//                                                          4
//                                                          2
function printReverse(list2) {
    for(let i = list2.length - 1; i >= 0; i--){ //1. A ciklus kezdete a list2 végére van állítva, onnan indul.
        //A loop pedig addig tart visszafelé, amíg az i nagyobb v. egyenlő, mint 0. index.
        //2. Az i indexet minden körben 1-gyel csökkentjük (i--),
        //így tesszük lehetővé, hogy fordított sorrendben haladjunk a listán.
        //3. A cikluson belül a console.log(list2[i]) fordított sorrendben adja vissza az egyes elemeket.
        console.log(list2[i]);
        }
}
console.info('printReverse');
console.log(printReverse([2, 4, 6]));

console.log()

//FELADAT Készíts egy üres listát és egy másik kapott lista minden második számjegyét
//rakd bele. Logold ki az új listádat

//Output:[2,44]

function printEvenNums(list) {
    let newList = [];
    for(let i = 1; i < list.length - 1; i+= 2){
        newList.push(list[i])
    }
    return newList;
}
console.log(printEvenNums([21, 2, 3, 44, 5]));

console.log()


//FELADAT kapsz két listát, hasonlitsd össze őket, és írd ki a nagyobb lista méretének értékét
//egyenlőség esetén egyik lista méretét

//Output: 4
//Output: 3

function printBiggerListSize(list1, list2) {
    if(list1.length > list2.length || list1.lenght == list2.length){
    return list1.length;
    }
    return list2.length;
    }
console.log(printBiggerListSize([3, 2, 1], [false, 4, 7, 8]));
console.log(printBiggerListSize([3, 2, 1], [false, 4, 8]));

console.log()


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
//     // Ellenőrizzük, hogy a listák mérete megegyezik-e                                                      // Gipi
//     if ((list1.length === list2.length && list1[0] === list2[0]) || 
//         (list1.length === list2.length && list1[list1.length - 1] === list2[list2.length - 1])) {
//         return 'similar';  // Ha bármelyik feltétel igaz, akkor 'similar'
//     } else {
//         return 'not similar';  // Ha egyik feltétel sem igaz, akkor 'not similar'
//     }
// }



if ((list1.length === list2.length && list1[list1.length - 1] === list2[list2.length - 1]) ||                 // Eszti 
(list1[0] === list2[0])) {
return 'similar';
} else {
return 'not similar';
}
}


// {
//     if ( list1.length == list2.length && list1[0] === list2[0] || list1.length === list2.length && list1[list1.length -1] === list2[ list2.length -1]){
//     return similar
//     }else {
//     return not
//     }
    
    
//     }

console.log(checkSimilarList([1, 4, 11], [1, 3, 13]));
console.log(checkSimilarList([4, 4, 32], [4, 32]));
console.log(checkSimilarList([9, 4, 11], [4, 3, 23, 11]));
console.log(checkSimilarList([9, 4, 11, 6], [4, 3, 23, 6]));
