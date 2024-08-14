/*------------------------------- 1. FELADAT -------------------------------*/
//Írd át az alábbi kódrészletet a spread operator segítségével úgy, hogy az eredmény ne változzon a konzolon!

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];

//const combinedArray = arr1.concat(arr2);

//console.log(combinedArray);

/*------------------------------- 2. FELADAT -------------------------------*/

//Az alább látható tömbhöz fűzd hozzá a megadott számot a spread operator segítségével!

const numbers = [324, 432, 34];
const newNumber = 9;

//console.log(newNumbers);

/*------------------------------- 3. FELADAT -------------------------------*/

//Add hozzá a 'coloredCircle' nevű objektumhoz a 'circle' nevű objektum kulcs-érték párjait a spread operator segítségével!

const circle = {
    radius: 30
};

const coloredCircle = {
    color: "black",
    position: [34.3424323, 45.2342342],
    //TODO
};

/*------------------------------- 4. FELADAT -------------------------------*/
//Másold le az alábbi objektumokat a spread operátor segítségével, majd az eredeti objektum módosítása után irasd ki
//mindkét objektumot a konzolra! Ellenőrizd, hogy a másolat értéke nem változott!

const testObj = {
    name: "Lord Voldemort",
    occupation: "evil wizard",
    archenemy: "Harry Potter",
    nose: null
};

//const copiedObj = {...};

//delete testObj.occupation;
//console.log(testObj);
//console.log(copiedObj);

/*------------------------------- 5. FELADAT -------------------------------*/

//A spread operator segítségével egyesítsd az alábbi objektumokat egy objektumba!

const rectangle = {
    shape: "square"
}

const color = {
    background: "lightblue"
}

//const coloredRectangle = {...}

/*------------------------------- 6. FELADAT -------------------------------*/

//Javítsd ki az alábbi függvényt úgy, hogy az eredményben ne legyenek beágyazott tömbök! Ellenőrizd az eredményt a konzolon!

// const city1 = ['Pécs', 'Szekszárd'];
// const city2 = ['Érd', 'Ipolydamásd', 'Veszprém'];

// function addArrays(arr1, arr2) {
//     const newCityArray = [arr1, arr2];
//     console.log(newCityArray);
// };
// addArrays(city1, city2);

/*------------------------------- 7. FELADAT -------------------------------*/

//A rest operator segítségével módosítsd az alábbi függvényt úgy, hogy tetszőleges számú paramétert tudjon fogadni!
//Alkalmazz for ciklust!

// function addNumbers(a, b) {
//     const sumOfNumbers = a + b;
//     console.log(sumOfNumbers);
// };
// addNumbers(3, 4);


