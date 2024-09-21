console.log('---------Első feladat-------');

/*
Készíts egy el egyszerű számológépet
Adott egy "calculator" függvény mely három paramétert vár:
1. művelet elnevezése, amely négy értéket vehet fel: "add", "sub", "divide", "multi" (összeadás, kivonás, osztás, szorzás)
2. paraméter egy tetszőleges szám
3. paraméter egy tetszőleges szám
Hajtsa végre az adott műveletet a függvény a két számom
A függvény visszatérési értéke legyen a művelet eredménye
*/
 
function calculate(type, num1, num2){
    if (type === 'add') {               // type = összeadás
        return num1 + num2;             // visszatérési érték szám1 + szám2  
    }
    else if(type === 'sub'){            // type = kivonás
        return num1 - num2;             // visszatérési érték szám1 - szám2  
    }
    else if(type === 'divide'){         // type = osztás
        return num1 / num2;             // visszatérési érték szám1 / szám2  
    }
    else if(type === 'multi')             // type = szorzás
        return num1 * num2;             // visszatérési érték szám1 * szám2  
}

console.log(calculate('add', 30, 50.5)) // 80,5
console.log(calculate('sub', 30, -21)) // 51
console.log(calculate('divide', 30, 6)) // 5
console.log(calculate('multi', 30, 7)) // 210

console.log('---------Második feladat-------');

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

function Operation(type, num1, num2) {
    const Operations = ['add', 'sub', 'divide', 'multi'];          // létrehozunk egy változót amit nem lehet megváltoztatni
      // ellenőrizzük hogy a type tartalmazza e a megadott tömb elemeit és hogy a szám1 és szám2 tényleg szám e
    if (!Operations.includes(type) || typeof num1 == 'number' || typeof num2 == 'number') {     
      return true;                                                 // ha igen a visszatérési értéke igaz
    }
      return false;                                                  // ha nem a visszatérési értéke hamis
    }
  
  function calculate(type, num1, num2) {
    if (!Operation(type, num1, num2)) {
      return "Invalid operation";
    }
    switch (type) {
      case 'add':
        return num1 + num2;
      case 'sub':
        return num1 - num2;
      case 'divide':
        return num1 / num2;
      case 'multi':
        return num1 * num2;
      default:
        return "Invalid operation";
    }
  }
  
console.log(calculate('fault', 30, 30)) // "Invalid operation"
console.log(calculate('fault', 'dk2', 30)) // "Invalid operation"
console.log(calculate('fault', 21, true)) // "Invalid operation"

console.log('---------Harmadik feladat-------');

/**
 * --- Harmadik feladat -------
 * Adott egy személyi igazolvány szám ebben a formátumban ==> pl: '123456AB'
 * Készíts egy függvény, ami kivágja a számokat az elejéről és visszaadja csak a betűket
 *
 */

function getIDCardLetters(idCardNumber) {
    return idCardNumber.slice(-2);
}

console.log(getIDCardLetters('123456AB')) // 'AB'

console.log('---------Negyedik feladat-------');

/**
 * --- Negyedik feladat -------
 * Adott egy személyi igazolvány szám (pl: 123456AB)
 * Készíts egy függvény, ami kivágja a számokat az elejéről, megvizsgálja hogy páros szám,
 * majd visszaadja a vizsgálat eredményét az alábbi módon:
 *
 * 'AB with odd number' vagy 'AB with even number'
 *
 */

function checkIdCardNumberIsEven(num){
    let szam = num.match(/\d+/g) 
    if(szam % 2 == 0){
        return 'AB with even number';
   }
    else 
       return 'AB with odd number';
}

console.log(checkIdCardNumberIsEven('123456AB')) // 'AB with even number'
console.log(checkIdCardNumberIsEven('123457AB')) // 'AB with odd number'

console.log('---------Ötödik feladat-------');

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

function formatString(str){
    let szokoz = str.replace(/ /g, '');
    //  return szokoz;
    let utolso = szokoz.slice(-5);
    //  return utolso;
    let veg = utolso.replace(/a/g, 'b');
        return veg;
   
}

console.log(formatString("Indul a görög haza felé")); // 'bfelé'
console.log(formatString("Ha ha haaa")); // 'bhbbb'

console.log('---------Szorgalmi feladat-------');

/**
 * Szorgalmi feladat
 * Készíts egy függvényt, ami paraméterként kap egy stringet.
 * Távolitson el belőlen minden '.' vagy üres szóköz paramétert.
 * Ha van benne számot rejtő karakter, akkor cserélje ki az 'x' karakterre
 */

 function removeDigitsDotAndSpaces(input) {
 
    const cleanedString = input.replace(/[. ]/g, '');

    const result = cleanedString.replace(/\d/g, 'x');

    return result;
}

console.log(removeDigitsDotAndSpaces('abc123.dba 87')) // 'abcxxxdbaxx'