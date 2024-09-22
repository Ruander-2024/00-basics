console.log('*************************************************** FIRST ***************************************************');

//Írj egy programot, amely megtalálja a legnagyobbbat a paraméterben
//kapott három szám közül.

function searchMax(one, two, three) {
    if (one >= two && one >= three) {
// ha one nagyobb vagy egyenlő  mint two és one nagyobb vagy egyenlő  mint three 
        return one;
// visszatérési érték one
    } 
    else if (two >= one && two >= three ) {
// ha two nagyobb vagy egyenlő mint one és one nagyobb vagy egyenlő mint three 
        return two;
// visszatérési érték two
    } 
        return three;
// ha eggyik se teljesül visszatérési érték three    
}

console.log(searchMax(10, 2, 10));           // 10
console.log(searchMax(17, -10, -45));        // 17
console.log(searchMax(1115, 510, 440));      //1115
console.log(searchMax(668, 87, 670));        // 670

console.log('*************************************************** SECOND ***************************************************');

//Írj egy programot, amely true-t ad vissza, ha a két paraméterben
// kapott szám közül az egyik 30,
// vagy a két szám összege 40.

function testNumbers(numberOne, numberTwo) {
    if (numberOne == 30 || numberTwo == 30 || numberOne + numberTwo == 40){
// ha a numberOne = 30 vagy a numberTwo = 30 vagy a numberOne és a numberTwo összege 40 
        return true;
// a visszatérési érték true
    }
        return false;  
// ha a feltétel nem igaz a visszatérési érték false
}

console.log(testNumbers(30, 30))    // true
console.log(testNumbers(20, 60))    // false
console.log(testNumbers(20, 20))    // true
console.log(testNumbers(20, 30))    // true
console.log(testNumbers(15,30))     // true
console.log(testNumbers(15,25))     // true
console.log(testNumbers(15,31))     // false

console.log('*************************************************** THIRD ***************************************************');

//Írj egy programot, amely visszaadja a paraméterben kapott szám és 21 különbségét.
//Ha a kapott szám nagyobb, mint 21, akkor add vissza a különbségük kétszeresét.

function difference(number) {
   if(number > 21){
// megnézzük hogy a szám nagyobb e mint 21
    return (number-21)*2;
// ha a szám nagyobb mint 21 a visszatérési érték (number-21) * 2
   }
    return 21-number;
// ha a szám kisebb mint 21 a visszatérési érték 21-number
};

console.log(difference(18))   // 3
console.log(difference(50))   // 58
console.log(difference(21))   // 0
console.log(difference(78))   // 114
console.log(difference(11))   // 10
 
console.log('*************************************************** FOURTH ***************************************************');

//Írj egy programot, amely true-t ad vissza, ha a paraméterben kapott két szám
//közül az egyik pozitív a másik negatív.

function positiveAndNegative(numberOne, numberTwo) {
    if(numberOne > 0 && numberTwo < 0 || numberOne< 0 && numberTwo > 0 ){
// ha a numberOne nagyobb mint nulla (nem negatív) és a numbetTwo kisebb mint nulla (negatív), vagy fordítva
        return true;
// a visszatérési érték true
    }
    return false;
// minden más estben false
}

console.log(positiveAndNegative(4, 6));   // false
console.log(positiveAndNegative(-4, 6));  // true
console.log(positiveAndNegative(6, -4));  // true
console.log(positiveAndNegative(-6, -4)); // false

console.log('*************************************************** FIFTH ***************************************************');

//Írj egy funkciót, amely megvizsgálja a paraméterben kapott három számot.
//Ha ezek közül van olyan, amely 20 és 79 közé esik, akkor a funkció adjon vissza true-t.

function checkNumbers(one, two, three) {
    if(20 < one && one < 79 || 20 < two && two < 79 || 20 < three && three < 79 ){
// ha one nagyobb mint 20 és kisebb mint 79 és ha two nagyobb mint 20 és kisebb mint 79 és ha three nagyobb mint 20 és kisebb mint 79
        return true;
// akkor a visszatérési érték true
    }
    return false;
// minden más esetben false
}

console.log(checkNumbers(20, 70, 79));   // true
console.log(checkNumbers(5, 66, 199));   // true
console.log(checkNumbers(65, 89, 199));  // true
console.log(checkNumbers(121, 9, 199));  // false
console.log(checkNumbers(15,68,99));     // true

console.log('*************************************************** SIXTH ***************************************************');

//Írj egy programot, amely ellenőrzi, hogy a paraméterben kapott 3
//szám pozitív-e, és az utolsó számjegyük megegyezik-e.

// ebbe segített ai

function lastDigit(firstNumber, secondNumber, thirdNumber) {
   
    if( (firstNumber > 0 && secondNumber > 0 && thirdNumber > 0) && (firstNumber % 10 === secondNumber % 10 && secondNumber % 10 === thirdNumber % 10)){
        return true;
    }
    return false;
}

console.log(lastDigit(22, 32, 422));    // true
console.log(lastDigit(-22, 32, 402));   // false
console.log(lastDigit(22, -32, 400));   // false

console.log('*************************************************** SEVENTH ***************************************************');

//Írj meg egy funkciót, amely átváltja a paraméterben kapott Celsius fokot Fahrenheit-re.
//Súgó a számoláshoz: https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html

function celsiusToFahrenheit(celsius) {
     return celsius * 1.8 + 32;
}

console.log(celsiusToFahrenheit(14));    // 57.2
console.log(celsiusToFahrenheit(23));    // 73.4
console.log(celsiusToFahrenheit(32));    // 89.6
console.log(celsiusToFahrenheit(44));    // 111.2
 
console.log('*************************************************** EIGHTH ***************************************************');

// Írd meg a funkciót úgy, hogy a true vagy false értékkel térjen vissza annak megfelelően,
// hogy a paraméterben kapott év szőkőév vagy sem.

function leapyear(year) {
    // Ha az év osztható 400-zal, akkor szökőév
    if (year % 400 === 0) {
        return true;
    }
    // Ha az év osztható 100-zal, de nem osztható 400-zal, akkor nem szökőév
    else if (year % 100 === 0) {
        return false;
    }
    // Ha az év osztható 4-gyel, akkor szökőév, különben nem szökőév
    else if (year % 4 === 0) {
        return true;
    }
    // Minden más esetben nem szökőév
        return false;
    }

console.log(leapyear(2016));   // true
console.log(leapyear(2000));   // true
console.log(leapyear(1700));   // false
console.log(leapyear(1800));   // false
console.log(leapyear(100));    // false
