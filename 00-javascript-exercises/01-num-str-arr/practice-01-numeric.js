//-------------------------- ELSŐ FELADAT ------------------------------------------
// Adott egy tömb, add hozzá a 3 új elemet, majd irasd ki az új tömböt.
//
console.log(myPush(["Nathan Drake", "Chloe Benet", "Sullivan Smith"], "Sarah Miller", "Gerald Hugo", "Wong"));
// Output: ["Nathan Drake", "Chloe Benet", "Sullivan Smith", "Sarah Miller", "Gerald Hugo", "Wong"]

function myPush(myArr, element1, element2, element3) {
    myArr.push(element1, element2, element3);
    return myArr;
}

//-------------------------- MÁSODIK FELADAT ------------------------------------------
// Adott egy tömb, távolítsd el az utolsó elemét, majd irasd is ki a konzolra.
//
console.log(myPop([63, 48, 11, 9, 46, 73, 35]));
// Output: 35

function myPop(myArr) {
  let myPop =  myArr.pop();
    return myPop;
}

// -------------------------HARMADIK FELADAT ------------------------------
//
// Adott egy tömb, irasd ki a tömb felétől a végéig az elemeit.
//
// Input: 
console.log(mySlice(["apple", "banana", "orange", "grape fruit", "melon"]));
// Output: ["orange", "grape fruit", "melon"]

function mySlice(myArr) {
    let mySlice = myArr.slice(2,7);
    return mySlice;

}


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
