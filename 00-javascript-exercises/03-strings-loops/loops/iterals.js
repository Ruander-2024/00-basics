console.log(' ---------------- get sum Of Array is even -----------');

// Készíts egy metódust, ami megnézni, hogy egy tömb elemeinek összege páros-e?
// Adja vissza a megfelelő boolean értéket

// console.log(sumOfArrayIsEven([22, 4, 20, 0, 14])); // Output: true;
// console.log(sumOfArrayIsEven([9, 11, 11])); // Output: false;
// console.log(sumOfArrayIsEven([])); //Output:  false;
function sumOfArrayIsEven(arr) {}


console.log(' ------------------ get even numbers ----------------');


// Készíts egy metódust, ami kigyűjti a páros számokat egy tömbből.
// Térjen vissza csak a páros számokat tartalmazó tömbbel

// console.log(getEvenNumbers([12, 3, 41, 22])); // Output: [12,22];
// console.log(getEvenNumbers([3, 55, 7])); // Output: [];
function getEvenNumbers(arr) {}

console.log(' ---------------------- harmony array ----------- ');

// Készíts egy metódust, ami megnézi egy tömbben lévő páros számok mennyisége
// megegyezik a páratlan számok mennyisgével. Ha igen térjen vissza 'in harmony' értékkel.
// Ellenkező esetben: 'no harmony'

// console.log(isInHarmony([22, 3, 44, 5, 76, 7])); // Output: 'in harmony';
// console.log(isInHarmony([33, 5, 66, 8, 10])); // Output: 'no harmony';
function isInHarmony(arr) {}

console.log('------------- reverse String --------------');

// Készíts egy metódust, ami visszaadja egy string tükörképét

// console.log(reverseString('andula')); // Output: 'aludna;
// console.log(reverseString('bar')); // Output: 'rab;
function reverseString(str) {}

console.log(' ---------------- count invalid characters -------------');

// Készíts egy metódust, ami megszámolja mennyi érvénytelen karakter van egy stringben
// Az érvénytelen karakterek: '@', '#', '$'

// console.log(countInvalidCahracters('@klléldsa>')); // Output: 1;
// console.log(countInvalidCahracters('admin@80#test$')); // Output: 3;
// console.log(countInvalidCahracters('test')); // Output: 0;
function countInvalidCahracters(str) {}

console.log(' -------------- remove square from array -----------');

// Készíts egy metódust, ami paraméterként kap egy tömböt és egy számot
// A szám értéke egy index-et, és  mennyiséget is jelent egyben.
// Vagyis "honnan" és "mennyit" jelent.
// Távolíts el a tömbböl a megfelelő helyről megfelelő mennyiségű elemet, de csak akkor,
// ha a "kivágott rész mérete" nem lenne nagyobb mint a tömb megjelölt indexe után lévő (maradék) elemek száma.
// Adja vissza a metódus a módosított tömböt

// console.log(removeSquareFromArray([22, 33, 44], 1)); // Output: [22,44];
// console.log(removeSquareFromArray([11, 22, 33, 44, 55], 3)); // Output: [11,22,33,44,55];
// console.log(removeSquareFromArray([11, 22, 33, 44, 55], 2)); // Output: [11,22,55];
function removeSquareFromArray(array, index) {}

console.log(' ----------- collect valid names --------------');

// Készíts egy metódust, ami egy felhasználó neveket tartalmazó tömbböl kigyűjti az érvényeseket
// Érvényes az az a felhasználó név, ami legalább 5 karakter hosszú, nem tartalmazhatja az 'admin' vagy 'Admin' szórészletet
// Tartalmaznia kell legalább egy szám karaktert.
// Térjen vissza csak az érvényes neveket tartalamzó tömbbel


// console.log(collectValidUserNames(['admin43', 'JohhDee', 'Boy3'])); // Output: [];
// console.log(collectValidUserNames(['Admin3', 'BZoli42', 'Steve1', 'Billy'])); // Output: ['BZoli42', 'Steve1'];
function collectValidUserNames(array) {}