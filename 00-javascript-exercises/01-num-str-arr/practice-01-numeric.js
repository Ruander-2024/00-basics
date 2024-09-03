//*************************************************** FIRST *************************************************** */

//Írj egy programot, amely megtalálja a legnagyobbbat a paraméterben
//kapott három szám közül.

//Eredmény:
//10
//17
//1115


function searchMax(one, two, three) {
    return Math.max(one, two, three);
}

console.log(searchMax(10, 2, 10));     // 10
console.log(searchMax(17, -10, -45));  // 17
console.log(searchMax(1115, 510, 440)); // 1115



//*************************************************** SECOND *************************************************** */

//Írj egy programot, amely true-t ad vissza, ha a két paraméterben
// kapott szám közül az egyik 30,
// vagy a két szám összege 40.

//Eredmény:
//true
//false
//true
//true

function testNumbers(num1, num2) {
    if (num1 === 30 || num2 === 30 || (num1 + num2) === 40) {
        return true;
    } else {
        return false;
    }
}

console.log(testNumbers(30, 30))
 console.log(testNumbers(20, 60))
console.log(testNumbers(20, 20))
 console.log(testNumbers(20, 30))


//*************************************************** THIRD *************************************************** */

//Írj egy programot, amely visszaadja a paraméterben kapott szám és 21 különbségét.
//Ha a kapott szám nagyobb, mint 21, akkor add vissza a különbségük kétszeresét.

//Eredmény:
//3
//58
//0

function difference(number) {
    if (number > 21) {
        return (number - 21) * 2;
    } else {
        return 21 - number;
    }
}

// Példa használat:
console.log(difference(18));  // 3
console.log(difference(50));  // 58
console.log(difference(21));  // 0


//*************************************************** FOURTH *************************************************** */

//Írj egy programot, amely true-t ad vissza, ha a paraméterben kapott két szám
//közül az egyik pozitív a másik negatív.

//Eredmény:
//false
//true
//true
//false


function positiveAndNegative(numberOne, numberTwo) {
    return (numberOne > 0 && numberTwo < 0) || (numberOne < 0 && numberTwo > 0);

}

 console.log(positiveAndNegative(4, 6));
 console.log(positiveAndNegative(-4, 6));
 console.log(positiveAndNegative(6, -4));
 console.log(positiveAndNegative(-6, -4));

//*************************************************** FIFTH *************************************************** */


//Írj egy funkciót, amely megvizsgálja a paraméterben kapott három számot.
//Ha ezek közül van olyan, amely 20 és 79 közé esik, akkor a funkció adjon vissza true-t.

//Eredmény:
//true
//true
//true
//false

   
function checkNumbers(one, two, three) {
    return (one >= 20 && one <= 79) || (two >= 20 && two <= 79) || (three >= 20 && three <= 79);
}

 console.log(checkNumbers(20, 70, 79));
 console.log(checkNumbers(5, 66, 199));
 console.log(checkNumbers(65, 89, 199));
 console.log(checkNumbers(121, 9, 199));


//*************************************************** SIXTH *************************************************** */

//Írj egy programot, amely ellenőrzi, hogy a paraméterben kapott 3
//szám pozitív-e, és az utolsó számjegyük megegyezik-e.

//Eredmény:
//true
//false
//false

function lastDigit(firstNumber, secondNumber, thirdNumber) {
    // Ellenőrizzük, hogy mindhárom szám pozitív-e
    if (firstNumber > 0 && secondNumber > 0 && thirdNumber > 0) {
        // Ellenőrizzük, hogy az utolsó számjegyük megegyezik-e
        const lastDigit1 = firstNumber % 10;
        const lastDigit2 = secondNumber % 10;
        const lastDigit3 = thirdNumber % 10;

        return lastDigit1 === lastDigit2 && lastDigit1 === lastDigit3;
    }
    
    // Ha bármelyik szám nem pozitív, visszatérünk false értékkel
    return false;
}
console.log(lastDigit(22, 32, 422));
 console.log(lastDigit(-22, 32, 402));
 console.log(lastDigit(22, -32, 400));


//*************************************************** SEVENTH *************************************************** */

//Írj meg egy funkciót, amely átváltja a paraméterben kapott Celsius fokot Fahrenheit-re.
//Súgó a számoláshoz: https://www.rapidtables.com/convert/temperature/celsius-to-fahrenheit.html

//Eredmény:
//57.2
//73.4
//89.6
//111.2

function celsiusToFahrenheit(celsius) {
  
    return (celsius * 9/5) + 32;
}


 console.log(celsiusToFahrenheit(14));
 console.log(celsiusToFahrenheit(23));
 console.log(celsiusToFahrenheit(32));
 console.log(celsiusToFahrenheit(44));

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
    // Szökőév akkor van, ha az év osztható 4-gyel, de nem osztható 100-zal, kivéve ha osztható 400-zal is
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}



console.log(leapyear(2016));
 console.log(leapyear(2000));
 console.log(leapyear(1700));
 console.log(leapyear(1800));
  console.log(leapyear(100));
