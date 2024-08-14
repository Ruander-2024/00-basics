/**
 * ---Első feladat---
 * Készíts egy el egyszerű számológépet
 * Adott egy "calculator" függvény mely három paramétert vár:
 * 1. művelet elnevezése, amely négy értéket vehet fel: "add", "sub", "divide", "multi" (összeadás, kivonás, osztás, szorzás)
 * 2. paraméter egy tetszőleges szám
 * 3. paraméter egy tetszőleges szám
 * Hajtsa végre az adott műveletet a függvény a két számom
 * A függvény visszatérési értéke legyen a művelet eredménye
 */
 console.log('---------Első feladat-------');


function calculate(type, num1, num2){
    // TODO
}

console.log(calculate('add', 30, 50.5)) // 80,5
console.log(calculate('sub', 30, -21)) // 51
console.log(calculate('divide', 30, 6)) // 5
console.log(calculate('multi', 30, 7)) // 210


/**
 * --- Második feladat -------
 * Kiderül, hogy néha nem megfelelő paramétert kap a függvény.
 * Fejleszd tovább a "calculate" metódust, hogy vizsgálja meg a paramétereket.
 *
 * Ha a művelet típusa nem megfelelő (nem egyezik egyik megadott értékkel sem),
 * vagy ha egyik szám helyén lévő paraméter nem "number" típusú,
 * akkor térjen vissza az alábbi szöveggel:
 * "Invalid operation"
 *
 * Ezt a paraméter vizsgálatot szerevezd ki egy külön függvénybe, és hívd meg
 * a "calculate" függvény megfelelő helyén
 */
console.log('---------Második feladat-------');

console.log(calculate('fault', 30, 30)) // "Invalid operation"
console.log(calculate('fault', 'dk2', 30)) // "Invalid operation"
console.log(calculate('fault', 21, true)) // "Invalid operation"


/**
 * --- Harmadik feladat -------
 * Adott egy személyi igazolvány szám ebben a formátumban ==> pl: '123456AB'
 * Készíts egy függvény, ami kivágja a számokat az elejéről és visszaadja csak a betűket
 *
 */
 console.log('---------Harmadik feladat-------');


function getIDCardLetters(idCardNumber) {
    // TODO
}

console.log(getIDCardLetters('123456AB')) // 'AB'

/**
 * --- Negyedik feladat -------
 * Adott egy személyi igazolvány szám (pl: 123456AB)
 * Készíts egy függvény, ami kivágja a számokat az elejéről, megvizsgálja hogy páros szám,
 * majd visszaadja a vizsgálat eredményét az alábbi módon:
 *
 * 'AB with odd number' vagy 'AB with even number'
 *
 */
 console.log('---------Negyedik feladat-------');


function checkIdCardNumberIsEven(){
    // TODO
}

console.log(checkIdCardNumberIsEven('123456AB')) // 'AB with even number'
console.log(checkIdCardNumberIsEven('123457AB')) // 'AB with odd number'


/**
 * Ötödik feladat
 * Formázz meg egy szöveget az alábbi módon.
 * 1. Kapsz egy string paramétert
 * 2. Vegyél ki belőle minden szóköz karaktert.
 * 3. Vágd ki az utolsó 5 karakter
 * 5. Ezen az 5 karakteren cserélj ki minden "a" karaktert "b"-re
 * 6. Add vissza az eredményt
 *
 * pl: "Indul a görög hazafelé"  ==> 'bfelé'
 */
 console.log('---------Ötödik feladat-------');


function formatString(str){
    // TODO

}

console.log(formatString("Indul a görög haza felé")); // 'bfelé'
console.log(formatString("Ha ha haaa")); // 'bhbbb'

/**
 * Szorgalmi feladat
 * Készíts egy függvényt, ami paraméterként kap egy stringet.
 * Távolitson el belőlen minden '.' vagy üres szóköz paramétert.
 * Ha van benne számot rejtő karakter, akkor cserélje ki az 'x' karakterre
 */
 console.log('---------Szorgalmi feladat-------');


function removeDigitsDotAndSpaces(str){
    // TODO
}

console.log(removeDigitsDotAndSpaces('abc123.dba 87')) // 'abcxxxdbaxx'
