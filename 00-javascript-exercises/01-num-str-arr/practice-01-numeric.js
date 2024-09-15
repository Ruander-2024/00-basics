//*************************************************** FIRST *************************************************** */

const { Logger } = require("sass");

//Írj egy programot, amely megtalálja a legnagyobbbat a paraméterben
//kapott három szám közül.

//Eredmény:
//10
//17
//1115

function searchMax(one, two, three) {
        let max = one;
        if (two > max){
            max = two;
        }else if (three > max){
            max = three;
        }
        return max;
}

console.log(searchMax(10, 2, 10));
console.log(searchMax(17, -10, -45));
console.log(searchMax(1115, 510, 440));
console.log();



// console.log(searchMax(10, 2, 10));
// console.log(searchMax(17, -10, -45));
// console.log(searchMax(1115, 510, 440));



//*************************************************** SECOND *************************************************** */

//Írj egy programot, amely true-t ad vissza, ha a két paraméterben
// kapott szám közül az egyik 30,
// vagy a két szám összege 40.

//Eredmény:
//true
//false
//true
//true

function testNumbers(numberOne, numberTwo) {
   
    return (numberOne ===30 || numberTwo === 30 || (numberOne + numberTwo) === 40)

};


console.log(testNumbers(30, 30))
console.log(testNumbers(20, 60))
console.log(testNumbers(20, 20))
console.log(testNumbers(20, 30))

console.log();

//*************************************************** THIRD *************************************************** */

//Írj egy programot, amely visszaadja a paraméterben kapott szám és 21 különbségét.
//Ha a kapott szám nagyobb, mint 21, akkor add vissza a különbségük kétszeresét.

//Eredmény:
//3
//58
//0

function difference(number) {
        if (number > 21){
            return (number - 21)*2;
        }
        else {
            return (21 - number);
        }
    //TODO

};

console.log(difference(18))
console.log(difference(50))
console.log(difference(21))
console.log();


//*************************************************** FOURTH *************************************************** */

//Írj egy programot, amely true-t ad vissza, ha a paraméterben kapott két szám
//közül az egyik pozitív a másik negatív.

//Eredmény:
//false
//true
//true
//false


function positiveAndNegative(numberOne, numberTwo) {
        if (numberOne > 0 && numberTwo < 0 || numberOne < 0 && numberTwo > 0) {
            return true;
        }
        else {
            return false;
        }

}

console.log(positiveAndNegative(4, 6));
console.log(positiveAndNegative(-4, 6));
console.log(positiveAndNegative(6, -4));
console.log(positiveAndNegative(-6, -4));
console.log();

//*************************************************** FIFTH *************************************************** */


//Írj egy funkciót, amely megvizsgálja a paraméterben kapott három számot.
//Ha ezek közül van olyan, amely 20 és 79 közé esik, akkor a funkció adjon vissza true-t.

//Eredmény:
//true
//true
//true
//false

function checkNumbers(one, two, three, four) {
     return (one >= 20 && one <=79) || (two >= 20 && two <=79) || (three >= 20 && three <=79);
}

console.log(checkNumbers(20, 70, 79));
console.log(checkNumbers(5, 66, 199));
console.log(checkNumbers(65, 89, 199));
console.log(checkNumbers(121, 9, 199));
console.log();


//*************************************************** SIXTH *************************************************** */

//Írj egy programot, amely ellenőrzi, hogy a paraméterben kapott 3
//szám pozitív-e, és az utolsó számjegyük megegyezik-e.

//Eredmény:
//true
//false
//false

function lastDigit(firstNumber, secondNumber, thirdNumber) {
    if(firstNumber >= 0 || secondNumber >= 0 || thirdNumber >= 0 && firstNumber.charAt(-1)=== secondNumber.charAt(-1)=== thirdNumber.charAt(-1)){
        return true;
    }
    else{
        return false;
    }
    //TODO

}


 console.log(lastDigit(22, 32, 422));
 console.log(lastDigit(-22, 32, 402));
 console.log(lastDigit(22, -32, 400));

 console.log();
//*************************************************** SEVENTH *************************************************** */

//Írj meg egy funkciót, amely átváltja a paraméterben kapott Celsius fokot Fahrenheit-re.
//Súgó a számoláshoz: https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html

//Eredmény:
//57.2
//73.4
//89.6
//111.2

function celsiusToFahrenheit(celsius) {
    //TODO
    return (celsius*1.8 + 32);
}



 console.log(celsiusToFahrenheit(14));
 console.log(celsiusToFahrenheit(23));
 console.log(celsiusToFahrenheit(32));
 console.log(celsiusToFahrenheit(44));
console.log();

//*************************************************** EIGHTH *************************************************** */

// Írd meg a funkciót úgy, hogy a true vagy false értékkel térjen vissza annak megfelelően,
// hogy a paraméterben kapott év szőkőév vagy sem.

//Eredmény:
// true
// true
// false
// false
// false

function leapyear(year) {
    if((year % 4 === 0 && year % 100 !== 0) ||  (year % 400 === 0)){
        return true;
    }
    else{
        return false;
    }
    //TODO

}


 console.log(leapyear(2016));
 console.log(leapyear(2000));
 console.log(leapyear(1700));
 console.log(leapyear(1800));
 console.log(leapyear(100));
