console.log('----------Első feladat----------');
//The parameter weekday is true if it is a weekday,
//and the parameter vacation is true if we are on vacation. 
//We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.


//A hétköznap paraméter igaz, ha hétköznap van,
//a nyaralás paraméter igaz, ha nyaralunk.
//Ha nem hétköznap van, vagy nyaralunk, akkor alszunk. Vissza igaz, ha alszunk.

function sleepIn(weekday, vacation) {
    if(weekday == false && vacation == false || weekday == false && vacation == true){
        return true;
    }
    else return false;
}

console.log(sleepIn(false, false)); // true
console.log(sleepIn(true, false)); // false
console.log(sleepIn(false, true)); // true

/***********************************************************************************************/
console.log("----------Második feladat----------");

//We have two monkeys, a and b, and the parameters aSmile and bSmile indicate 
//if each is smiling. We are in trouble if  they are both smiling or if neither 
//of them is smiling. Return true if we are in trouble.

//Van két majmunk ha mindkettő mosolyog vagy egyik sem akkor bajban vagyunk (true), különben (false).

function monkeyTrouble(aSmile, bSmile) {
    if(aSmile  == true && bSmile == true || aSmile  == false && bSmile == false){
        return true;
    }
    else 
    return false;
}
console.log('monkeyTrouble');
console.log(monkeyTrouble(true, true)); // true
console.log(monkeyTrouble(false, false)); // true
console.log(monkeyTrouble(true, false)); // false

/***********************************************************************************************/
console.log("----------Harmadik feladat----------");
//Given two values, return their sum. Unless the two values are the same, 
//then return double their sum.

//Ha adott két érték, adja vissza az összegüket. Hacsak a két érték nem azonos, 
//majd adja vissza az összeg dupláját.

function sumDouble(a, b) {
    if(a == b ){
        return(a+b)*2;
    }
    else return a+b;
}
console.log('sumDouble');
console.log(sumDouble(1, 2)); // 3
console.log(sumDouble(3, 2)); // 5
console.log(sumDouble(2, 2)); // 8

/***********************************************************************************************/
console.log("----------Negyedik feladat----------");
//We have a loud talking parrot. The "hour" parameter is the current hour 
//time in the range 0..23. We are in trouble if the parrot is talking 
//and the hour is before 7 or after 20. Return true if we are in trouble.

// Van egy papagájunk, ha 7 óra előtt vagy 20 óra után beszél bajban vagyunk.(true)

function parrotTrouble(talking, hour) {
    if(talking == true && hour < 7 || talking == true && hour > 20){
        return true;
    }
    else return false;
}

console.log(parrotTrouble(true, 6)); // true
console.log(parrotTrouble(true, 7)); // false
console.log(parrotTrouble(false, 6)); // false

/***********************************************************************************************/
console.log("----------Ötödik feladat----------");
//Given 2 values, return true if one is negative and one is positive. 
//Except if the parameter "negative" is true, then return true only if both are negative.
//Ha adott 2 érték, akkor igazat ad vissza, ha az egyik negatív, a másik pedig pozitív. 
//Kivéve, ha a "negative" paraméter igaz, akkor csak akkor adja vissza igazat, ha mindkettő negatív.

function posNeg(a, b, negative) {
    if  (a < 0 && b > 0  && negative == true || a > 0 && b < 0 && negative == true ){
        return false;
    }
    else return true;
}


console.log(posNeg(1, -1, false)); // true
console.log(posNeg(-1, 1, false)); // true
console.log(posNeg(-4, -5, true)); // true

/***********************************************************************************************/
console.log("----------Hatodik feladat----------");

//Return true if the given non-negative number is a multiple of 3 or a multiple of 5. 
//Use the % "mod" operator

//Igazt ad vissza, ha a megadott szám 3 többszöröse vagy 5 többszöröse. 
//Használja a % "mod" operátort

function or35(number) {
    if(number % 3 == 0 || number % 5 == 0){
        return true;
    }
    else return false;
}


console.log(or35(3)); // true
console.log(or35(10)); // true
console.log(or35(8)); // false

/***********************************************************************************************/
console.log("----------Hetedik feladat----------");
//Given a string, take the first 2 chars and return the string with the 2 chars 
//added at both the front and back, so "kitten" yields "kikittenki". 
//If the string length is less than 2, use whatever chars are there.

// Adott egy karakterlánc, vegye az első 2 karaktert, és adja vissza a karakterláncot a 2 karakterrel 
//elöl és hátul is hozzáadva, így a "cica" a "kikittenki"-t eredményezi. 
//Ha a karakterlánc hossza kisebb, mint 2, használja a benne lévő karaktereket.

function front22(str) {
    let karakter = str.substring(0,2);
    return karakter + str + karakter;
}

console.log(front22("kitten")); // "kikittenki"
console.log(front22("Ha")); // "HaHaHa"
console.log(front22("abc")); // "ababcab"

/***********************************************************************************************/
console.log("----------Nyolcadik feladat----------");
//Given two temperatures, return true if one is less than 0 and the other is greater than 100.

//Ha két hőmérsékletet ad meg, akkor ad vissza igazat, ha az egyik kisebb, mint 0, a másik pedig nagyobb, mint 100.

function icyHot(temp1, temp2) {
    if(temp1 > 100 && temp2 < 0 || temp1 < 0 && temp2 > 100 ){
        return true;
    }
    else return false;
}

console.log(icyHot(120, -1)); // true
console.log(icyHot(-1, 120)); // true
console.log(icyHot(2, 120)); // false

/***********************************************************************************************/
console.log('----------Kilencedik feladat----------');
//We'll say that a number is "teen" if it is in the range 13..19 inclusive. 
//Given 3 values, return true if 1 or more of them are teen.

//Azt mondjuk, hogy egy szám "tini", ha a 13...19 tartományba esik. 
//Ha adott 3 érték, akkor igazat ad vissza, ha közülük 1 vagy több tizenéves.

function isTeen(a, b, c) {
    if(a > 19 || b > 19 || c > 19){
        return true;
    }
    else return false;
}

console.log(isTeen(13, 20, 10)); // true
console.log(isTeen(20, 19, 10)); // true
console.log(isTeen(20, 10, 13)); // true