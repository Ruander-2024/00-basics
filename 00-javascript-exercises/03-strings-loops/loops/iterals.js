console.log(' ---------------- get sum Of Array is even -----------');

// Készíts egy metódust, ami megnézni, hogy egy tömb elemeinek összege páros-e?
// Adja vissza a megfelelő boolean értéket

console.log(sumOfArrayIsEven([22, 4, 20, 0, 14])); // Output: true;
console.log(sumOfArrayIsEven([9, 11, 11])); // Output: false;
console.log(sumOfArrayIsEven([])); //Output:  false;
function sumOfArrayIsEven(arr) {
    if(arr.length > 0){
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum = sum + arr[i]
        }
        if(sum % 2 === 0){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

console.log(' ------------------ get even numbers ----------------');


// Készíts egy metódust, ami kigyűjti a páros számokat egy tömbből.
// Térjen vissza csak a páros számokat tartalmazó tömbbel

console.log(getEvenNumbers([12, 3, 41, 22])); // Output: [12,22];
console.log(getEvenNumbers([3, 55, 7])); // Output: [];
function getEvenNumbers(arr) {
    const evenNumbers = [];
    
    for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
    evenNumbers.push(arr[i]);
    }
    }
    
    return evenNumbers;
    }

console.log(' ---------------------- harmony array ----------- ');

// Készíts egy metódust, ami megnézi egy tömbben lévő páros számok mennyisége
// megegyezik a páratlan számok mennyisgével. Ha igen térjen vissza 'in harmony' értékkel.
// Ellenkező esetben: 'no harmony'

console.log(isInHarmony([22, 3, 44, 5, 76, 7])); // Output: 'in harmony';
console.log(isInHarmony([33, 5, 66, 8, 10])); // Output: 'no harmony';
function isInHarmony(arr) {
    let even = 0;
    let odds = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            even++;
        }
        else if(arr[i] % 2 !== 0){
            odds++;
        }
    }
    if(even === odds){
        return('in harmony');
    }
    else{
        return('no harmony');
    }
}

console.log('------------- reverse String --------------');

// Készíts egy metódust, ami visszaadja egy string tükörképét

console.log(reverseString('andula')); // Output: 'aludna;
console.log(reverseString('bar')); // Output: 'rab;
function reverseString(str) {
    let reverseWord = '';
    for(let i = str.length - 1; i >= 0; i--){
        reverseWord = reverseWord + str[i] // reverseWord += str[i];
    }
    return reverseWord;
}

console.log(' ---------------- count invalid characters -------------');

// Készíts egy metódust, ami megszámolja mennyi érvénytelen karakter van egy stringben
// Az érvénytelen karakterek: '@', '#', '$'

console.log(countInvalidCahracters('@klléldsa>')); // Output: 1;
console.log(countInvalidCahracters('admin@80#test$')); // Output: 3;
console.log(countInvalidCahracters('test')); // Output: 0;
function countInvalidCahracters(str) {
    let invalidChar = 0; // Érvénytelen karakter
    for(let i = 0; i < str.length; i++){
        if(str[i].match(/[@#$]/gi)) { // g - global - globális | i - insensitive - érzéketlen - kis-nagybetűt nem veszi figyelembe
            invalidChar++;
        }
    }
    return invalidChar;
}


console.log(' -------------- remove square from array -----------');

// Készíts egy metódust, ami paraméterként kap egy tömböt és egy számot
// A szám értéke egy index-et, és  mennyiséget is jelent egyben.
// Vagyis "honnan" és "mennyit" jelent.
// Távolíts el a tömbböl a megfelelő helyről megfelelő mennyiségű elemet, de csak akkor,
// ha a "kivágott rész mérete" nem lenne nagyobb mint a tömb megjelölt indexe után lévő (maradék) elemek száma.
// Adja vissza a metódus a módosított tömböt

console.log(removeSquareFromArray([22, 33, 44], 1)); // Output: [22,44];
console.log(removeSquareFromArray([11, 22, 33, 44, 55], 3)); // Output: [11,22,33,44,55];
console.log(removeSquareFromArray([11, 22, 33, 44, 55], 2)); // Output: [11,22,55];
function removeSquareFromArray(array, index) {
    if(array.slice(index).length < index){
            return array;
        }
        else{
            array.splice(index, index);
            return array;
        }
    }

    // function removeSquareFromArray(array, index) {
    //     // Ellenőrizzük, hogy van-e elég elem az index után a kivágáshoz  Eszti verziója
    //     // Ha a feltétel teljesül, akkor lehet eltávolítani az eleeket
    //     if (index <= array.length - (index + 1)) {
    //     // A for ciklus annyszor fut, ahány elemet törölni akarunk
    //     // Az i értéke 0-tól index-1-ig fog növekedni
    //     for (let i = 0; i < index; i++) {
    //     // Minden egyes ciklusban eltávolítunk 1 elemet az 'index' pozícióból
    //     array.splice(index, 1);
    //     // A splice(index, 1) azt jelenti, hoy az 'index' helyen lévő egy elemet töröljük.
    //     // Ezután a tömb maradék elemei előrébb csúsznak, így az index mindig ugyanott marad.
    //     }
    //     }
    //     // Visszaadjuk a módosított tömböt
    //     return array;
    //     } 

console.log(' ----------- collect valid names --------------');

// Készíts egy metódust, ami egy felhasználó neveket tartalmazó tömbböl kigyűjti az érvényeseket
// Érvényes az a felhasználó név, ami legalább 5 karakter hosszú, nem tartalmazhatja az 'admin' vagy 'Admin' szórészletet
// Tartalmaznia kell legalább egy szám karaktert.
// Térjen vissza csak az érvényes neveket tartalamzó tömbbel


console.log(collectValidUserNames(['admin43', 'JohhDee', 'Boy3'])); // Output: [];
console.log(collectValidUserNames(['Admin3', 'BZoli42', 'Steve1', 'Billy'])); // Output: ['BZoli42', 'Steve1'];
function collectValidUserNames(array) {
    let newArr = []; // Új tömb

    for(let i= 0; i < array.length; i++){
        if (array[i].length >= 5 &&                                   // Adott felhaszunálónév hossza 
            array[i].toLowerCase().includes("admin") === false &&    // nem tartalmazhatja az admin szót
            array[i].match(/[0-9]/)){                              // az adott felhasználónévben van-e szám
                newArr.push(array[i])                              // ha igen akkor a new array tömbünkbe push -olja bele
        }
    }
    return newArr;

}