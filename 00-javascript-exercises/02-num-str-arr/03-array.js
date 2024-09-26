//Given an array of numbers, return the number of 9's in the array.
function find9(nums) {
    // return nums.filter(nums => nums === 9).length;
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 9){ 
            count++;
        }
    }
    return count; 
}

console.log(find9([1, 2, 9])); // 1
console.log(find9([1, 9, 9])); // 2
console.log(find9([1, 9, 9, 3, 9])); // 3
console.log();


/***********************************************************************************************/
//Given an array of numbers, return true if the sequence of numbers 1, 2, 3
// appears in the array somewhere.

function array123(nums) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1 && nums[i + 1] === 2 && nums[i + 2] === 3){
            return true
        }
    }
    return false;
}

console.log(array123([1, 1, 2, 3, 1])); // true
console.log(array123([1, 1, 2, 4, 1])); // false
console.log(array123([1, 1, 2, 1, 2, 3])); // true
console.log();


/***********************************************************************************************/
//Given an array of numbers, return true if 6 appears as either the first or last 
//element in the array. The array will be length 1 or more.

function firstLast6(nums) {
    if(nums[0] === 6 || nums[nums.length - 1] === 6){
        return true;
    }
    else{
        return false;
    }
}

console.log(firstLast6([1, 2, 6])); // true
console.log(firstLast6([6, 1, 2, 3])); // true
console.log(firstLast6([13, 6, 1, 2, 3])); // false
console.log();


/***********************************************************************************************/
//Given an array of numbers, return true if the array is length 1 or more, 
//and the first element and the last element are equal.

function sameFirstLast(nums) {
    if(nums.length >= 1 && nums[0] === nums[nums.length - 1]){
        return true;
    }
    else{
        return false;
    }
}

console.log(sameFirstLast([1, 2, 3])); // false
console.log(sameFirstLast([1, 2, 3, 1])); // true
console.log(sameFirstLast([1, 2, 1])); // true
console.log();


/***********************************************************************************************/
//Return an array length 3 containing the first 3 digits of pi, {3, 1, 4}.

function makePi() {
    const PI = Math.PI;
    let newPi = PI.toFixed(2) * 100;
    let array = newPi.toString().split("");
    let newArray = [];
    for(let i = 0; i< array.length; i++){
        newArray.push(Number(array[i]))
    }
    return newArray;
}

console.log(makePi()); // [3, 1, 4]
console.log();


/***********************************************************************************************/
//Given 2 arrays of numbers, a and b, return true if they have the same 
//first element or they have the same last element. Both arrays will be length 1 or more.

function sameStartEnd(a, b) {
    if(a[0] === b[0] || a[a.length - 1] === b[b.length -1]){
        return true;
    }
    else{
        return false;
    }
}

console.log(sameStartEnd([1, 2, 3], [7, 3])); // true
console.log(sameStartEnd([1, 2, 3], [7, 3, 2])); // false
console.log(sameStartEnd([1, 2, 3], [1, 3])); // true