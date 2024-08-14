//-------------------------- ELSŐ FELADAT ------------------------------------------
//
// Adj meg egy tetszőleges szót paraméterként, majd a szó minden egyes karakterét töltsd bele egy a
// metódusban létrehozott üres tömbbe. A visszetérési érték a feltöltött tömb.
//
// Input: console.log(charsIntoArray("Forgiveness"))
// Output: ["F", "o", "r", "g", "i", "v", "e", "n", "e", "s", "s"]

function charsIntoArray(myStr) {


}

//-------------------------- MÁSODIK FELADAT ------------------------------------------
//
// Adj meg egy legalább 15 karakterből álló stringet és egy keresendő karaktert. Irasd ki pontosan hányszor szerepel
// a megadott karakter a szóban, vizsgálj rá egy plussz feltételben szerepel-e benne egyáltalán!
//
// Input: console.log(charCounter("O, World, hold on", "o"));
// Output: 3

function charCounter(myStr, myChar) {


}

//-------------------------- HARMADIK FELADAT ------------------------------------------
//
// Adott egy string tömb, minden elemét tedd csupa nagybetűssé, majd irasd ki a tömböt.
//
// Input: console.log(getUpper(["Apple", "Windows", "Linux"]));
// Output: ["APPLE", "WINDOWS", "LINUX"]

function getUpper(myArr) {


}

//-------------------------- NEGYEDIK FELADAT ------------------------------------------
//
// Adott egy mondatokat tartalmazó tömb és egy keresendő szó, keresd meg mondatonként hányadik helyen áll az említett szó,
// az így kapott számokat rendezd tömbbe, majd irasd ki. Ha nem szerepel benne, annak az eredménye -1.
//
// Input: console.log(searchWord(["I live in Hungary.",
//                    "Do you like coffee?",
//                    "Hungary is a nice country.",
//                    "I go to visit my friend, who lives in Hungary."], "Hungary"));
// Output: [10, -1, 0, 38]

function searchWord(sentences, myWord) {


}

//-------------------------- ÖTÖDIK FELADAT ------------------------------------------
//
// Adott egy string, ami tartalmaz pontosan egy db szám karaktert, ciklusban nyerd ki a számot a string-ből, majd
// eredményként térj vissza a kapott paraméter kinyert számú ismétlésével. Ahhoz hogy megállapítsd hogy, az adott karakter
// szám-e használd a Number.isInteger() metódust, valamint a + jelet a paramétere előtt.(pl Number.isInteger(+"4") //true)
//
// Input: console.log(advancedRepeater("hero6"));
// Output: "hero6hero6hero6hero6hero6hero6"
//
// Input: console.log(advancedRepeater("3wishes"));
// Output: "3wishes3wishes3wishes"

function advancedRepeater(myStr) {


}

//-------------------------- HATODIK FELADAT ------------------------------------------
//
// Adott egy legalább 3 szavas mondat a paraméterben, szóközönként tördeld el, és az így kapott szavakat tedd egy
// üres tömbbe, végül minden harmadik szót írj át nagybetűssé. Irasd ki a kapott tömböt.
//
// Input: console.log(bigThirdWord("When will my life begin?"));
// Output: ["WHEN", "will", "my", "LIFE", "begin?"]

function bigThirdWord(myStr) {


}

//-------------------------- HETEDIK FELADAT ------------------------------------------
//
// Adott egy tetszőleges string bemeneti érték, irasd ki a fordítottját csökkenő ciklus segítségével(i--).
// Bonus: Az egyes karaktereket mentsd le egy tömbbe, majd azokat összefűzve irasd ki.
//
// Input: console.log(reverse("gnitirw rorrim"));
// Output: "mirror writing"

function reverse(myStr) {


}

function reverseBonus(myStr) {


}

//-------------------------- NYOLCADIK FELADAT ------------------------------------------
//
// Adott egy számokból álló tömb, keresd ki LEGNAGYOBB értéket, majd térj vissza vele.
//
// Input: console.log(searchMax([1, 24, -75, 0, 35, 97]));
// Output: 97

function searchMax(myNums) {


}

//-------------------------- KILENCEDIK FELADAT ------------------------------------------
//
// Adott egy számokból álló tömb, keresd ki LEGKISEBB értéket, majd térj vissza vele.
//
// Input: console.log(searchMin([1, 24, -75, 0, 35, 97]));
// Output: -75

function searchMin(myNums) {


}

//-------------------------- TIZEDIK FELADAT ------------------------------------------
//
// Adott egy számokból álló tömb, vizsgáld meg a tömb elemeit, majd térj vissza true-val ha
// az elemek NÖVEKVŐ sorrendben vannak.
//
// Input: console.log(isAscending([1, 24, -75, 0, 35, 97]));
// Output: false
//
// Input: console.log(isAscending([-32, -26, -11, 0, 3, 21, 40]));
// Output: true

function isAscending(myNums) {


}

//-------------------------- TIZENEGYEDIK FELADAT ------------------------------------------
//
// Adott egy számokból álló tömb, vizsgáld meg a tömb elemeit, majd térj vissza true-val ha
// az elemek CSÖKKENŐ sorrendben vannak.
//
// Input: console.log(isAscending([1, 24, -75, 0, 35, 97]));
// Output: false
//
// Input: console.log(isDescending([76, 54, 48, 21, 1, -6, -10]));
// Output: true

function isDescending(myNums) {


}

//-------------------------- TIZENEGYEDIK FELADAT ------------------------------------------
//
// Adott egy számokból álló tömb, add össze az elemeit, majd térj vissza az így kapott számmal.
//
// Input: console.log(sumAll([4, 1, 8, 9, 11, 0, 44]));
// Output: 73

function sumAll(myNums) {


}

//-------------------------- TIZENKETTEDIK FELADAT ------------------------------------------
//
// Adott egy számokból álló tömb, vizsgáld meg az elemeit, majd a PÁROS számokat rendezd új tömbbe és irasd ki.
//
// Input: console.log(gatherEvens([1, 24, -75, 0, 35, 97]));
// Output: [24, 0]

function gatherEvens(myNums) {


}

//-------------------------- TIZENHARMADIK FELADAT ------------------------------------------
//
// Adott egy számokból álló tömb, vizsgáld meg az elemeit, majd a PÁRATLAN számokat rendezd új tömbbe és irasd ki.
//
// Input: console.log(gatherOdds([1, 24, -75, 0, 35, 97]));
// Output: [1, -75, 35, 97]

function gatherOdds(myNums) {


}