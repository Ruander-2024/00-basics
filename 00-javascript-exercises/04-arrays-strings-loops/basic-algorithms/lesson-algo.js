/**
 * FELADATOKBAN Nem szabad beépített metódusokat használni!!
 * Pl: includes, indexOf, Math... stb...
 * (Kivéve utolsó feladat)
 *
 * ÖSSZEGZÉS tétele.
 * Megvizsgáljuk, egy tömben lévő (numerikus) elemek összegét.
 * Készíts egy függvényt, ami visszaadja egy tömb elemeinek összegét
 * */
 console.log('---------- Összegzés tétele: ----------');
 function getSumOfArray(arr){

     return null;
 }

 console.log(getSumOfArray([12,-12, 44, 3,7,11])) //65


 /**
  * MEGSZÁMOLÁS tétele.
  * Egy bizonyos feltételnek megfelelő értékeket megszámolom. Pl: hány darab páros szám van a tömbben
  * Készíts egy függvényt, ami visszaadja hánydarab 3-al osztható elem van a tömbben.
  * */
 console.log('---------- Megszámolás tétele: ----------');

 function getSumOfNumbersCanDividedByThree(arr){

    return null;

 }

 console.log(getSumOfNumbersCanDividedByThree([3,-6, 11, 5, 24, 9, 2])) //4
 console.log(getSumOfNumbersCanDividedByThree([4,-5, 11, 5, 23, 8, 2])) //0


 /**
  * ELDÖNTÉS tétele.
  * Annak vizsgálata, hogy egy elem megtalálható egy tömbben.
  * Készíts egy függvényt, ami visszaadja megtalálható-e az elem (true/false).
  * */
  console.log('---------- Eldöntés tétele ---------');

 function arrayIncludesValue(arr, searchedValue){
    // TODO
    return null;
 }

 console.log(arrayIncludesValue([1,2,3,4,56,756], 56));  // true
 console.log(arrayIncludesValue([1,2,3,4,56,756], 57));  // false


 /**
  * KIVÁLASZTÁS tétele. Feltételezzük, hogy egy tömb tartalmaz egy elemet.
  * Keressük hányadik helyen található az elem
  * Készíts egy függvényt, ami visszaadja egy elem indexét.
  * Ha nincs benne az elem, térjen vissza -1 értékkel a függvény
  * */
  console.log('---------- Kiválasztás tétele ---------');

 function getIndexOfValue(arr, searchedValue){

     //TODO
     return null;
 }

 console.log(getIndexOfValue([23,4,5,11,7,8], 7)) // 4
 console.log(getIndexOfValue([23,4,5,11,7,8], 15)) // -1


 /*
 * Készíts egy függényt,ami visszaadja egy tömb lenagyobb elemét
 */
 console.log('---------- Find max: ----------')

 function findMaxInArray(arr){
     // TODO
     return null;

 }
 console.log(findMaxInArray([-12,0,0,31,334])) // 344

 /*
 * Készíts egy függényt,ami visszaadja egy tömb legkisebb elemét
 */
 console.log('---------- Find min: ----------')

 function findMinInArray(arr){
     // TODO
     return null;
 }

 console.log(findMinInArray([-12,0,0,-44, 56])) // -44

 /*
 * Készíts egy függényt,ami visszaadja egy tömb elemeinek az átlagát
 */
 console.log('---------- Get average of array: ----------')

 function getAvgOfArray(arr){
     // TODO
     return null;
 }

 console.log(getAvgOfArray([3,12,-12, 5,7,9])) //4


 /* RENDEZÉS I. Buborék
 * Buborék rendezéskor mindig megvizsgáljuk, hogy két egymás követő elem sorrendben van-e?
 * Ha nem akkor megcseréljük őket és haladunk végig a tömbön.
 * Annyiszor megyünk végig a tömbön, amíg minden elem sorrendbe kerül
 *
 * FELADAT: Rendezd sorrendbe az alábbi tömböt "Buborék rendezéssel"
 * A függvény visszatérési értéke legyen a rendezett tömb
 */
 console.log('------------Buborék rendezés ----------');
 function orderArrInBubbleStyle(arr){

    // TODO
    return null;

 }

 console.log(orderArrInBubbleStyle([-23,32,3,5,1,1])) // [-23,1,1,3,5,32]

 /* KERESÉS rendezett tömben: Bináris (felezése) keresés
 * Előfeltétele, hogy sorrendben legyenek az elemek
 * Megvizsgálom a tömb közepén lévő számot, ha az a keresett szám, akkor vége is a keresésnek,
 * ha nem, akkor elfelezem a tömböm két részre és a megfelelő részben keresem tovább.
 * (hogy a közepénél kisebb vagy nagyobb a keresett érték) Ott is megvizsgálom a közepét, ha nem a keresett szám, akkor ismét felezem.. és így tovább.
 * Drasztikusan lecsökkenhet a keresési idő így.
 *
 * FELADAT: Készíts wegy függvényt, ami egy rendezett listát kap és vissza adja a keresett érték indexét.
 * (A megadott tömb biztosan tartalmazza az értéket)
 * Hint: figyelj arra, hogy mindig egész szám tárolja a középső elem indexét...
 */

 console.log('---------------- Bináris keresés -------------');

 function searchInOrderedList(arr, searchedValue){

    // TODO
    return null;

 }

 console.log(searchInOrderedList([1,2,3,4,5,6,7,8,9,10], 6)) //5
 console.log(searchInOrderedList([1,2,3,4,5,6,7,8,9,10,11], 10)) //9
