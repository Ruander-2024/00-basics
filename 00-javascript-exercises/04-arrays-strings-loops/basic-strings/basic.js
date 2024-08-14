//-------------------------- ELSŐ FELADAT ------------------------------------------
//
//Adott egy string és egy tömb. Vedd a hosszúságukat, és vizsgáld meg, hogy a 2 szám összege páros-e.
//Bonus: Irass ki true-t ha páros, false-t ha páratlan.
//
//Input: console.log(lengthSumIsEven('This is just a normal sentence', [true, false, false, true, true, true]));
//Output: true
//
//Input: console.log(lengthSumIsEven('Open sesame!', [11, 42, 6, 99, -2]));
//Output: false

function lengthSumIsEven(myStr, myArr) {


}

// ---------------------------MÁSODIK FELADAT--------------------------------------------
//
//Adott egy string és egy tömb egy-egy metódusban. Vizsgáld meg van-e benne nulla, vagy O betű(mindkettő karakterként ''). 
//Ha mindkettő szerepel true-t, ha egyik sem false-t irass ki.
//Bonus: Ha csak egyik vagy másik van benne, irass ki egyedi stringet.
//
//Input: console.log(hasStrZeroOrO('Wrong passw0rd!'));    Input: console.log(hasArrZeroOrO(['0', 'o', '0', '0']));
//Output: true                                             Output:true
//
//Input: console.log(hasStrZeroOrO('Interesting'));    Input: console.log(hasArrZeroOrO(['0', '0', '0', '0']));
//Output: false                                        Output:The glass is half full.

function hasStrZeroOrO(myStr) {


}

function hasArrZeroOrO(myArr) {


}

// -------------------------HARMADIK FELADAT ------------------------------
//
//Adott egy string és egy stringekből álló tömb. Irasd ki a string paraméter tömbbeli indexét.
//
//Input: console.log(wordIndex('Fire', ['Air', 'Water', 'Earth', 'Fire']));
//Output: 3
//
//Input: console.log(wordIndex('More', ['More', 'More', 'More']));
//Output: 0

function wordIndex(myStr, myArr) {


}

// --------------------------- NEGYEDIK FELADAT -------------------------------
//
//Adott egy stringekből álló tömb és egy string. Irasd ki a string paraméter tömbbeli utolsó előfordulási indexét.
//
//Input: console.log(lastWordIndex('Fire', ['Air', 'Water', 'Earth', 'Fire']));
//Output: 3
//
//Input: console.log(lastWordIndex('More', ['More', 'More', 'More']));
//Output: 2

function lastWordIndex(myStr, myArr) {


}

// ------------------------------- ÖTÖDIK FELADAT ---------------------------
//Adott egy tetszőleges elemeket tartalmazó tömb. Fűzd össze az elemeit a következőképpen:
//
//  - Ha szerepel a 3 vagy a 6 vagy a 9 szám az elemek közt, akkor a '+' jelet használd az összefűzéshez
//  - Ha a tömb több elemet tartalmaz mint 6, az összefűzött eredmény helyett tetszőleges üzenetet irass ki
//
//Input: console.log(isJoinableNums(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']));
//Output: I have forgotten the words, there is too much!
//
//Input: console.log(isJoinableNums([1, 2, 3]));
//Output: 1 + 2 + 3

function isJoinableNums(myArr) {


}

// ------------------------- HATODIK FELADAT --------------------------
//
//Adott egy tetszőleges elemeket tartalmazó tömb. Adj hozzá egy elemet a tömb VÉGÉRE, de csak abban az esetben,
//ha az adott elem még nem szerepel a tömbben. Ezután irasd ki a tömb elemeit 10db elemig, afölött csak az új elemszámot.
//Bonus:Tetszőleges számú elemet adj hozzá.
//
//Input: console.log(recruitSolos(['Noel', 'Eva', 'Hans'], 'Anna'));
//Output: ['Noel', 'Eva', 'Hans', 'Anna']
//
//Input: console.log(recruitSolos([-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11, 12, 13));
//Output: 24

function recruitSolos(myArr, element1, element2, element3) {


}

// ------------------------- HETEDIK FELADAT --------------------------
//
//A)
//Adott egy tömb, irasd ki és egyúttal távolítsd is el a tömb UTOLSÓ elemét feltéve, ha a tömb eltávolítandó eleme
//egynél többször szerepel az adott tömbben(tipp: használd az indexOf, lastIndexOf metódusokat és a length-et).
//
//Input: console.log(dismissDuosLast(['Noel', 'Eva', 'Hans', 'Anna', 'Eva']));
//Output: 'Eva'
//
//B)
//Adott egy tömb, távolítsd is el a tömb ELSŐ elemét feltéve, ha a tömb eltávolítandó eleme
//egynél többször szerepel az adott tömbben, majd irasd ki a tömb tartalmát.
//
//Input: console.log(removeFirstIfNotOnly(['Noel', 'Eva', 'Hans', 'Anna', 'Noel']));
//Output: ['Eva', 'Hans', 'Anna', 'Noel']

/**A) feladatrész   */
function dismissDuosLast(myArr) {


}

/**B) feladatrész   */
function removeFirstIfNotOnly(myArr) {


}

// ------------------------- NYOLCADIK FELADAT --------------------------
//
//Adott egy tetszőleges elemeket tartalmazó tömb. Távolítsd el a tömb utolsó elemét, majd add hozzá a tömb ELEJÉRE.
//Ha a tömbben 5db vagy kevesebb elem van add hozzá a tömb join-olt értékét is, ezután irasd ki a tömb elemeit.
//
//Input: console.log(growingRows([2, 3, 9, 1]));
//Output: ['1239', 1, 2, 3, 9]
//
//Input: console.log(growingRows([2, 3, 9, 1, 6, 5, 0]));
//Output: [0, 2, 3, 9, 1, 6, 5]

function growingRows(myArr) {


}

// ------------------------- KILENCEDIK FELADAT --------------------------
//
//Adott egy fiktív személy adataival feltöltött tömb, például:
// ['ID:', '126429AA', 'Name:', 'Elza Windrunner', 'City:', 'London', 'Status:', 'Active']
//A tömbből mentsd ki egy új tömbbe a név és város adatokat, majd fűzd össze egy stringé,
// végül az így kapott stringet irasd ki, úgy hogy csak szóköz választja el az egyes elemeket.
//
//Bonus:A slice metódus indexeit az indexOf metódussal htározd meg.
//
//Input: console.log(getNameAndCity(['ID:', '126429AA', 'Name:', 'Elza Windrunner', 'City:', 'London', 'Status:', 'Active']));
//Output: Name: Elza Windrunner  City: London

function getNameAndCity(userData) {


}

// ------------------------- TIZEDIK FELADAT --------------------------
//
//Adott egy növekvő számsort tartalmazó tömb, távolítsd el a negatív számokat és adj hozzá pozitív számokat helyettük.
// Irasd ki az eltávolított számokat és az új tömb értékeit.
//Bonus:Az index meghatározására használd az indexOf metódust, a hozzáadandó számokhoz pedig a length-et.
//
//Input: console.log(listAndRemoveNegatives([-3, -2, -1, 0, 1, 2, 3]));
//Output: 'Removed items: -3,-2,-1   New Array:0,1,2,3,4,5,6'

function listAndRemoveNegatives(nums) {


}

// ------------------------- TIZENEGYEDIK FELADAT --------------------------
//
//Addott egy string változóban egy tetszőleges szöveg.
// Irasd ki a szöveget csupa nagybetűvel ha:
//                  - a szöveg hossza nem haladja meg a 10 karaktert és
//                  - tartalmaz 'a' vagy 'e' karaktert
//
//      és csupa kisbetűvel ha:
//                  - a szöveg 11 vagy több karakterből áll, vagy
//                  - tartalmaz 'I' vagy 'O' karaktert
//
// Ha egyik feltétel sem teljesül, térj vissza a kapott string-el módosítások nélkül.
//
//Input: console.log(writeUpperOrLower("America"));
//Output: "AMERICA"
//
//Input: console.log(writeUpperOrLower("INPUT"));
//Output: "input"

function writeUpperOrLower(myStr) {


}

// ------------------------- TIZENKETTEDIK FELADAT --------------------------
//
//Addott egy string változóban egy tetszőleges szöveg. Ha a szöveg kezdőkaraktere egynél többször is előfurdul
// (tipp:lastIndexOf metódus) a szövegben kis betűvel, térj vissza true-val, ellenkező esetben false-al.
//Bonus: Az első karakter akár kis- akár nagy betűvel ismétlődik.
//
//Input: console.log(isFirstOnly("Mimir"));
//Output: true
//
//Input: console.log(isFirstOnly("Koala"));
//Output: false
//
//Input: console.log(isFirstOnly("this is for The bonus"));
//Output: true

function isFirstOnly(myStr) {


}


// ------------------------- TIZENHARMADIK FELADAT --------------------------
//
//Adott egy string változóban egy tetszőleges mondat, és 2 másik string, az első a cserélendő a második amire cseréljük.
// Ha szerepel a cserélendő szó a mondatban, akkor cseréld ki az első cserélendő szót, és térj vissza az eredménnyel.
// Ha a cserélendő szó nincs benne a mondatban, akkor térj vissza ezzel az üzenettel:
// 'This word is not in the sentence: ' + includedWord.
//
//Bonus: Cseréld ki az összes előfordulását a cserélendő szónak.
//
//Input: console.log(changeWord('I play football.', 'football', 'hockey'));
//Output:'I play hockey.'
//
//Input: console.log(changeWord('I play football.', 'chess', 'hockey'));
//Output:'This word is not in the sentence: chess.'
//
//Input: console.log(changeAllWord('This child is a very smart child.', 'child', 'student'));
//Output:'This student is a very smart student.'

function changeWord(mySentence, includedWord, newWord) {


}

function changeAllWord(mySentence, includedWord, newWord) {


}

// ------------------------- TIZENNEGYEDIK FELADAT --------------------------
//
//Adott egy string és egy szám változó, ismételd a stringet a megadott szám változó értékének megfelelő alkalommal.
// Majd az így kapott stringel térj vissza.
//
//Input: console.log(echo('masters', 4));
//Output: mastersmastersmastersmasters

function echo(myStr, timesToRepeat) {


}

// ------------------------- TIZENÖTÖDIK FELADAT --------------------------
//
// Addott egy tetszőleges mondat, a szóközök mentén darabold fel, és térj vissza az így kapott tömb hosszával.
//
//Input: console.log(countWords('This is just a normal sentence'));
//Output: 6

function countWords(myStr) {


}

// ------------------------- TIZENHATODIK FELADAT --------------------------
//
//A)
//Adott egy tetszőleges mondat, vágd ki az ELSŐ szót majd térj is vissza vele, ha a mondat egyetlen szóból áll,
// térj viszza azzal az egy szóval.
//
//B)
// Adott egy tetszőleges mondat, vágd ki a az UTOLSÓ szót majd térj is vissza vele, ha a mondat egyetlen szóból áll,
// térj viszza azzal az egy szóval.
//
//A)
//Input: console.log(mySubString('This is just a normal sentence'));
//Output: 'This'
//
//B)
//Input: console.log(mySubStr('This is just a normal sentence'));
//Output: 'sentence'

function mySubString(myStr) {


}

function mySubStr(myStr) {


}