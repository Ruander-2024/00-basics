console.log("----------Első feladat----------");

//Given a string, return a new string where "not " has been added to the front. 
//However, if the string already begins with "not", return the string unchanged.

//Adott egy karakterlánc, adjon vissza egy új karakterláncot, ahol a "not" szöveg elejére került. 
//Ha azonban a karakterlánc már "nem"-el kezdődik, akkor a karakterláncot változatlanul adja vissza.

function checkString(str) {
    let szo = "not"
    if(str.includes(szo)){
        return str;
    }
    else 
    return szo + ' ' + str;
}

console.log(checkString('candy')); // "not candy"
console.log(checkString('x')); // "not x"
console.log(checkString('not bad')); // "not bad"

/***********************************************************************************************/
console.log("----------Második feladat----------");

//Given a non-empty string and an n, return a new string where the char 
//at index n has been removed. The value of n will be a valid index of a char 
//in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

//Ha adott egy nem üres karakterlánc és egy n, akkor egy új karakterláncot ad vissza, ahol a char 
//az n indexnél eltávolítva. Az n értéke egy karakter érvényes indexe lesz 
//az eredeti karakterláncban (azaz n a 0..str.length()-1 tartományban lesz)

function missChar(str, n) {
    if (n < 0 || n >= str.length) {
      return str; 
    }
    return str.slice(0, n) + str.slice(n + 1);
  }
  
  // Példa használat
  console.log(missChar("kitten", 1)); // "ktten"
  console.log(missChar("kitten", 0)); // "itten"
  console.log(missChar("kitten", 4)); // "kittn"
  

/***********************************************************************************************/
console.log("----------Harmadik feladat----------");

//Adott egy karakterlánc, egy új karakterláncot ad vissza, ahol az első és az utolsó karakter felcserélődött.

function changeFrontBack(str) {
     let first = str[0];  //c/a/a
     let last = str.slice(str.length -1); // e/a/b
     let koz = str.slice(1, -1);  //od/a/b
     if (str.length < 2){
        return str;
     }
     else
     return last + koz + first;
     }
    
console.log(changeFrontBack("code")); // "eodc"
console.log(changeFrontBack("a")); // "a"
console.log(changeFrontBack("ab")); // "ba"

/***********************************************************************************************/
console.log("----------Negyedik feladat----------");
//Given a string, we'll say that the front is the first 3 chars of the string. 
//If the string length is less than 3, the front is whatever is there. 
//Return a new string which is 3 copies of the front.

//Ha adott egy karakterlánc, akkor azt mondjuk, hogy az elülső a karakterlánc első 3 karaktere. 
//Ha a karakterlánc hossza kisebb, mint 3, akkor az eleje az, ami ott van. 
//Egy új karakterlánc visszaadása, amely az előlap 3 példánya.

function firstThree(str) {
    let first = str.slice(0, 3);
    return first + first + first;
}

console.log(firstThree("Java")); // "JavJavJav"
console.log(firstThree("Chocolate")); // "ChoChoCho"
console.log(firstThree("abc")); // "abcabcabc"

/***********************************************************************************************/
console.log("----------Ötödik feladat----------");
//Given a string, take the last char and return a new string with the last char 
//added at the front and back, so "cat" yields "tcatt". 
//The original string will be length 1 or more.

//Adott egy karakterlánc, vegye az utolsó karaktert, és adjon vissza egy új karakterláncot az utolsó karakterrel 
//elöl és hátul hozzáadva, így a "cat" "tcatt"-t eredményez. 
//Az eredeti karakterlánc 1 vagy több hosszúságú lesz.

function lastToFront(str) {
    let last = str.slice(str.length -1);
    return last + str + last;
}

console.log(lastToFront("cat")); // "tcatt"
console.log(lastToFront("Hello")); // "oHelloo"
console.log(lastToFront("a")); // "aaa"

/***********************************************************************************************/
console.log("----------Hatodik feladat----------");
//Count the number of "xx" in the given string. We'll say that overlapping is allowed, 
//so "xxx" contains 2 "xx".

//Számolja meg az "xx" számát az adott karakterláncban. Azt mondjuk, hogy az átfedés megengedett, 
//tehát az "xxx" 2 "xx"-et tartalmaz.

function findXX(str){
    let xx = str.match(/(?=xx)/g);
    return xx ? xx.length : 0;
}

console.log(findXX("abcxx")); // 1
console.log(findXX("xxx")); // 2
console.log(findXX("xxxx")); // 3



/***********************************************************************************************/
console.log("----------Nyolcadik feladat----------");
//Given a string, return a new string made of every other char starting with 
//the first, so "Hello" yields "Hlo".

//Ha adott egy karakterlánc, akkor adjon vissza egy új karakterláncot, amely minden második karakterből áll, amivel kezdődik 
//az első, tehát a „Hello” a „Hlo”-t eredményezi.

function stringBits(str) {
}

console.log(stringBits("Hello")); //"Hlo"
console.log(stringBits("Hi")); //"H"
console.log(stringBits("Heeololeo")); //"Hello"
  
/***********************************************************************************************/
console.log("----------Kilencedik feladat---------");
//Given a non-empty string like "Code" return a string like "CCoCodCode".

function concatString(str) {

}

console.log(concatString("Code")); // "CCoCodCode"
console.log(concatString("abc")); // "aababc"
console.log(concatString("ab")); // "aab"

/***********************************************************************************************/
//Given a string, return a version where all the "x" have been removed. 
//Except an "x" at the very start or end should not be removed.

function findX(str) {

}

console.log(findX("xxHxix")); // "xHix"
console.log(findX("abxxxcd")); // "abcd"
console.log(findX("xabxxxcdx")); // "xabcdx"