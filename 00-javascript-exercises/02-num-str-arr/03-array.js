//Given an array of numbers, return the number of 9's in the array.
function find9(nums) {
    return nums.filter(num => num === 9).length;
  }
  
  console.log(find9([1, 2, 9])); // 1
  console.log(find9([1, 9, 9])); // 2
  console.log(find9([1, 9, 9, 3, 9])); // 3

  console.log();

//Given an array of numbers, return true if the sequence of numbers 1, 2, 3
// appears in the array somewhere.

function array123(nums) {
    // Végigmegyünk a tömbön, de csak az utolsó előtti két elemig
    for (let i = 0; i < nums.length; i++) {
      // Megvizsgáljuk, hogy az aktuális és a következő két elem alkotja-e a [1, 2, 3] sorozatot
      if (nums[i] === 1 && nums[i + 1] === 2 && nums[i + 2] === 3) {
        return true; // Ha igen, visszatérünk true-val
      }
    }
    return false; // Ha nem találjuk meg a sorozatot, visszatérünk false-val
  }
  
  console.log(array123([1, 1, 2, 3, 1])); // true
  console.log(array123([1, 1, 2, 4, 1])); // false
  console.log(array123([1, 1, 2, 1, 2, 3])); // true
  console.log();
 /* A ciklus végigmegy a tömb elemein egészen nums.length - 2-ig, hogy mindig legyen három elem, amit ellenőrizhetünk.
Minden indexnél ellenőrizzük, hogy az aktuális elem (nums[i]), a következő elem (nums[i + 1]), és az utána következő elem (nums[i + 2]) 1, 2, 3-at alkot-e.
Ha megtaláljuk ezt a sorozatot, a függvény true értékkel tér vissza.
Ha a ciklus végére érünk és nem találjuk meg a sorozatot, false-t ad vissza.
 
/***********************************************************************************************/
//Given an array of numbers, return true if 6 appears as either the first or last 
//element in the array. The array will be length 1 or more.

function firstLast6(nums) {
    if (nums[0] === 6 || nums[nums.length - 1] === 6) {
      return true;
    } else {
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
    
   if (nums.length >= 1 && nums[0] === nums[nums.length - 1]) {
    return true
   }
   else{
      return false
   }

  }

  console.log(sameFirstLast([1, 2, 3])); // false
  console.log(sameFirstLast([1, 2, 3, 1])); // true
  console.log(sameFirstLast([1, 2, 1])); // true
  console.log();
 /* nums.length >= 1: Ellenőrzi, hogy a tömb hossza legalább 1.
  nums[0] === nums[nums.length - 1]: Ellenőrzi, hogy az első és az utolsó elem megegyeznek-e. A nums.length - 1 az utolsó elem indexe.
  A && (logikai "és") operátor biztosítja, hogy mindkét feltételnek igaznak kell lennie ahhoz, hogy a függvény true-val térjen vissza.  
/***********************************************************************************************/
//Return an array length 3 containing the first 3 digits of pi, {3, 1, 4}.

function makePi() {
    
    const pi = Math.PI; // pi értéke
    // Az értéket karakterláncra konvertáljuk, majd szétbontjuk, hogy egy tömböt kapjunk
    return pi.toString().split('').map(Number).slice(0, 3); // 3 számjegyet visszaad
}

console.log(makePi()); // [3, 1, 4]
   // A Math.PI visszaadja a pi értékét
/***********************************************************************************************/
//Given 2 arrays of numbers, a and b, return true if they have the same 
//first element or they have the same last element. Both arrays will be length 1 or more.

function sameStartEnd(a, b) {
    
    if (a[0] === b[0] || a[a.length - 1] === b[b.length - 1]) {
        return true;
    } else {
        return false; 
    }
}
  
console.log(sameStartEnd([1, 2, 3], [7, 3])); // true
console.log(sameStartEnd([1, 2, 3], [7, 3, 2])); // false
console.log(sameStartEnd([1, 2, 3], [1, 3])); // true
