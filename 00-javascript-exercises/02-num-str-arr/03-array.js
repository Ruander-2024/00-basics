console.log('***************Első feladat***************');
//Given an array of numbers, return the number of 9's in the array.
//Adott egy számtömb, adja vissza a 9-esek számát a tömbben.
function find9(nums) {
   return nums.filter(szam => szam === 9).length;  
}

console.log(find9([1, 2, 9])); // 1
console.log(find9([1, 9, 9])); // 2
console.log(find9([1, 9, 9, 3, 9])); // 3

/***********************************************************************************************/
console.log('***************Második feladat***************');
//Given an array of numbers, return true if the sequence of numbers 1, 2, 3
// appears in the array somewhere.
// Adott egy számtömb, igaz értéket ad vissza, ha a számsor 1, 2, 3
// megjelenik valahol a tömbben.

function array123(nums) {
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === 1 && nums[i + 1] === 2 && nums[i + 2] === 3) {
            return true;
        }
    }
    return false;
}

console.log(array123([1, 1, 2, 3, 1])); // true
console.log(array123([1, 1, 2, 4, 1])); // false
console.log(array123([1, 1, 2, 1, 2, 3])); // true

/***********************************************************************************************/
console.log('***************Harmadik feladat***************');
//Given an array of numbers, return true if 6 appears as either the first or last 
//element in the array. The array will be length 1 or more.
//Adott számtömb esetén igazat ad vissza, ha a 6 elsőként vagy utolsóként jelenik meg 
//elem a tömbben. A tömb 1 vagy több hosszúságú lesz.
function firstLast6(nums) {
    if(nums[0] == 6 || nums[nums.length -1] == 6){
        return true;
    }
    return false;
}


console.log(firstLast6([1, 2, 6])); // true
console.log(firstLast6([6, 1, 2, 3])); // true
console.log(firstLast6([13, 6, 1, 2, 3])); // false

/***********************************************************************************************/
console.log('***************Negyedik feladat***************');
//Given an array of numbers, return true if the array is length 1 or more, 
//and the first element and the last element are equal.
// Adott egy számtömböt ad vissza igaz, ha a tömb hossza 1 vagy több, 
//és az első és az utolsó elem egyenlő.

function sameFirstLast(nums) {
    if([nums.length] > 1 && nums[nums.length -1] == nums[0]){
        return true;
    }
    return false;
}

console.log(sameFirstLast([1, 2, 3])); // false
console.log(sameFirstLast([1, 2, 3, 1])); // true
console.log(sameFirstLast([1, 2, 1])); // true

/***********************************************************************************************/
console.log('***************Ötödik feladat***************');
//Return an array length 3 containing the first 3 digits of pi, {3, 1, 4}.
//Egy 3-as tömbhosszúságot ad vissza, amely tartalmazza a pi első 3 számjegyét, {3, 1, 4}.

function makePi() {
    return [3,1,4];
}

console.log(makePi()); // [3, 1, 4]

/***********************************************************************************************/
console.log('***************Hatodik feladat***************');
//Given 2 arrays of numbers, a and b, return true if they have the same 
//first element or they have the same last element. Both arrays will be length 1 or more.
//Ha adott 2 számtömb, a és b, akkor igazat ad vissza, ha ugyanaz 
//első elem, vagy ugyanaz az utolsó elemük. Mindkét tömb 1 vagy annál hosszabb hosszúságú lesz.

function sameStartEnd(a, b) {
    if(a[0] == b[0] || a[a.length -1] == b[b.length -1]){
        return true;
    }
    return false;
}

console.log(sameStartEnd([1, 2, 3], [7, 3])); // true
console.log(sameStartEnd([1, 2, 3], [7, 3, 2])); // false
console.log(sameStartEnd([1, 2, 3], [1, 3])); // true