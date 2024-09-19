//*************************************************** FIRST *************************************************** */

//Írj meg egy programot, amely a paraméterben kapott számszor adja vissza a paraméterben kapott szót.

function multipleString(word, number) {
  return word.repeat(number);
};



console.log(multipleString("elephant", 3));
console.log(multipleString("mouse", 4));
console.log();


//*************************************************** SECOND *************************************************** */

//Paraméterben kap egy szót és egy betűt. Ha a szó tartalmazza ezt a karaktert, akkor a programod
//adja vissza az indexét. Ha nem tartalmazza, akkor adjon vissza -1-et.

//Eredmény:
//0
//4
//-1

function countCharacter(word, char) {
    return word.indexOf(char);
}



console.log(countCharacter("mouse", "m"));
console.log(countCharacter("number", "e"));
console.log(countCharacter("sunday", "g"));
console.log();


//*************************************************** THIRD *************************************************** */

//Paraméterben kap a funkció egy stringet. Írj egy programot, amely visszaad egy új stringet, amely tartalmazza
//az eredeti szót, és hozzáteszi az eredeti szó első betűjét a szó elejére és végére.
//Pl: paraméterben kapott szó: dog --> várt eredmény: ddogd

//Eredmény:
//ccatc
//mmousem

function frontAndBack(word) {
  let elso = word.charAt(0);
  return elso + word + elso;
}
 
console.log(frontAndBack('dog'));
console.log(frontAndBack('cat'));
console.log(frontAndBack('mouse'));
console.log();


//*************************************************** FOURTH *************************************************** */


//Írj egy programot az előző feladat mintájára, de most ne az első betűt, hanem az utolsó három karaktert
//tedd be visszaadtott szó elejére és végére. 
//Ha a szó kevesebb mint 3 karaktert tartalmaz, akkor add vissza az eredeti szót.
//TIPP: Használt a string substring metódusát.

function addThree(word) {
  let elso = word.slice(-3);
  if(word.length >= 3){
  return elso + word + elso
}
else
  return word; 
}

console.log(addThree("abc"));
console.log(addThree("ab"));
console.log(addThree("abcd"));
console.log()


//*************************************************** FIFTH *************************************************** */

//Írj egy programot, amely összefűzve visszaad két stringet, az első karaktereiket kivéve. 
//Példa: dog, cat --> eredmény: ogat

//Eredmény:
//""
//ee


function concatenateStrings(word1, word2) {
  let first = word1.substring(1);
  let secund = word2.substring(1);
return first + secund;
}

console.log(concatenateStrings("dog", "cat"));
console.log(concatenateStrings("X", "Y"));
console.log(concatenateStrings("we", "me"));
console.log()


//*************************************************** SIXTH *************************************************** */

//Írj egy funkciót, amely visszaadja a paraméterben kapott szóban a paraméterben kapott sorszámú karaktert.
//A kapott index értéke minden esetben kisebb, mint a szó hossza. 

function findChar(word, index) {
  let first = word.charAt(index);
  return first;
}

console.log(findChar("Auto", 2));
console.log(findChar("Printer", 4));
console.log(findChar("Jaguar", 5));
console.log()


//*************************************************** SEVENTH *************************************************** */

//Írj egy programot, amely megszámolja a paraméterben kapott szóban a magánhangzók számát.
//Angol szavakat használunk, így az angol abc magánhangzóit vizsgáld meg.

//Eredmény:
//3
//2
//3

function countVowels(word) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }
  return count;
}


console.log(countVowels("Auto"));
console.log(countVowels("Printer"));
console.log(countVowels("Jaguar"));