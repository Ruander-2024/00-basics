//*************************************************** FIRST *************************************************** */

//Írj meg egy programot, amely a paraméterben kapott számszor adja vissza a paraméterben kapott szót.

function multipleString(word, number) {

  //TODO
    return word.repeat(number);
  };
  
  console.log(multipleString("elephant", 3)); // elephantelephantelephant
  console.log(multipleString("mouse", 4));    // mousemousemousemouse




// console.log(multipleString("elephant", 3));
// console.log(multipleString("mouse", 4));


//*************************************************** SECOND *************************************************** */

//Paraméterben kap egy szót és egy betűt. Ha a szó tartalmazza ezt a karaktert, akkor a programod
//adja vissza az indexét. Ha nem tartalmazza, akkor adjon vissza -1-et.

//Eredmény:
//0
//4
//-1

function countCharacter(word, char) {

  //TODO
  return word.indexOf(char);

};

console.log(countCharacter("mouse", "m")); // 0
console.log(countCharacter("number", "e")); // 4
console.log(countCharacter("sunday", "g")); // -1


// console.log(countCharacter("mouse", "m"));
// console.log(countCharacter("number", "e"));
// console.log(countCharacter("sunday", "g"));


//*************************************************** THIRD *************************************************** */

//Paraméterben kap a funkció egy stringet. Írj egy programot, amely visszaad egy új stringet, amely tartalmazza
//az eredeti szót, és hozzáteszi az eredeti szó első betűjét a szó elejére és végére.
//Pl: paraméterben kapott szó: dog --> várt eredmény: ddogd

//Eredmény:
//ccatc
//mmousem

function frontAndBack(word) {

  //TODO
  const firstChar = word.charAt(0);
  return firstChar + word + firstChar;
};

console.log(frontAndBack('dog'));   // ddogd
console.log(frontAndBack('cat'));   // ccatc
console.log(frontAndBack('mouse')); // mmousem

// console.log(frontAndBack('dog'));
// console.log(frontAndBack('cat'));
// console.log(frontAndBack('mouse'));


//*************************************************** FOURTH *************************************************** */


//Írj egy programot az előző feladat mintájára, de most ne az első betűt, hanem az utolsó három karaktert
//tedd be visszaadtott szó elejére és végére. 
//Ha a szó kevesebb mint 3 karaktert tartalmaz, akkor add vissza az eredeti szót.
//TIPP: Használt a string substring metódusát.

function addThree(word) {

  //TODO
  if (word.length < 3) {
    return word;
  } else {
    const lastThree = word.substring(word.length - 3);
    return lastThree + word + lastThree;
  }
};

console.log(addThree("abc"));   // abcabcabc
console.log(addThree("ab"));    // ab
console.log(addThree("abcd"));  // bcdabcdbcd

// console.log(addThree("abc"));
// console.log(addThree("ab"));
// console.log(addThree("abcd"));


//*************************************************** FIFTH *************************************************** */

//Írj egy programot, amely összefűzve visszaad két stringet, az első karaktereiket kivéve. 
//Példa: dog, cat --> eredmény: ogat

//Eredmény:
//""
//ee


function concatenateStrings(word1, word2) {

  //TODO
  const newWord1 = word1.length > 1 ? word1.substring(1) : '';
  const newWord2 = word2.length > 1 ? word2.substring(1) : '';
  return newWord1 + newWord2;
};

console.log(concatenateStrings("dog", "cat"));  // ogat
console.log(concatenateStrings("X", "Y"));      // "" (üres string)
console.log(concatenateStrings("we", "me"));    // ee

// console.log(concatenateStrings("dog", "cat"));
// console.log(concatenateStrings("X", "Y"));
// console.log(concatenateStrings("we", "me"));


//*************************************************** SIXTH *************************************************** */

//Írj egy funkciót, amely visszaadja a paraméterben kapott szóban a paraméterben kapott sorszámú karaktert.
//A kapott index értéke minden esetben kisebb, mint a szó hossza. 

function findChar(word, index) {

  //TODO
  return word.charAt(index);
};

console.log(findChar("Auto", 2));    // t
console.log(findChar("Printer", 4)); // t
console.log(findChar("Jaguar", 5));  // r

// console.log(findChar("Auto", 2));
// console.log(findChar("Printer", 4));
// console.log(findChar("Jaguar", 5));


//*************************************************** SEVENTH *************************************************** */

//Írj egy programot, amely megszámolja a paraméterben kapott szóban a magánhangzók számát.
//Angol szavakat használunk, így az angol abc magánhangzóit vizsgáld meg.

//Eredmény:
//3
//2
//3

function countVowels(word) {

  //TODO
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Auto"));    // 3
console.log(countVowels("Printer")); // 2
console.log(countVowels("Jaguar"));  // 3

// console.log(countVowels("Auto"));
// console.log(countVowels("Printer"));
// console.log(countVowels("Jaguar"));