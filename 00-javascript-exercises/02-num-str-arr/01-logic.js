//The parameter weekday is true if it is a weekday, igaz ha hétköznap van
//and the parameter vacation is true if we are on vacation. igaz ha hétvége van
//We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.
//alszunk ha nincs hétköznap vagy hétvége van.

//A hétköznap paraméterünk igaz, ha hétköznap van
//A nyaralunk paraméter igaz, ha nyaralunk van
//Ha nem hétköznap van, vagy nyaralunk, akkor alszunk. Térjünk vissza true értékkel ha alszunk

function sleepIn(weekday, vacation) {
    if(weekday == false || vacation == true){
        return true;
    }
    else{
        return false;
    }
    
    }
    
    console.log(sleepIn(false, false)); // true
    console.log(sleepIn(true, false)); // false
    console.log(sleepIn(false, true)); // true
    
    /***********************************************************************************************/
    
    //We have two monkeys, a and b, and the parameters aSmile and bSmile indicate 
    //if each is smiling. We are in trouble if  they are both smiling or if neither 
    //of them is smiling. Return true if we are in trouble.
    //Van két majmunk ha mindkettő mosolyog vagy egyik sem akkor bajban vagyunk (true), különben (false).
    
    function monkeyTrouble(aSmile, bSmile) {
        let result;
        do {
        result = (aSmile === bSmile);
        } while (false);
        return result;
        }
    
        // function monkeyTrouble(aSmile, bSmile) {
        //     if (aSmile == true && bSmile == true || aSmile == false && bSmile == false) {
        //         return true;
        //     }
        //     else{
        //         return false;
        //     }
        
        
        // }
    console.log('monkeyTrouble');
    console.log(monkeyTrouble(true, true)); // true
    console.log(monkeyTrouble(false, false)); // true
    console.log(monkeyTrouble(true, false)); // false
    
    /***********************************************************************************************/
    //Given two values, return their sum. Unless the two values are the same, 
    //then return double their sum.
    
    //Két értékünk van, adjuk vissza a két értéknek az összegét. Ha a két értékünk megegyezik, akkor duplázzuk meg az eredményt
    
    function sumDouble(a, b) {
        if(a == b ){
        return(a+b)*2;
        }
        else return a+b;
    }
    
    function sumDouble(a, b) {
        let sum = 0;
        
        do {
        sum = a + b;
        if (a === b) {
        sum = 2 * sum;
        }
        } while (false);
        
        return sum;
        }
    console.log('sumDouble');
    console.log(sumDouble(1, 2)); // 3
    console.log(sumDouble(3, 2)); // 5
    console.log(sumDouble(2, 2)); // 8
    
    /***********************************************************************************************/
    //We have a loud talking parrot. The "hour" parameter is the current hour 
    //time in the range 0..23. We are in trouble if the parrot is talking 
    //and the hour is before 7 or after 20. Return true if we are in trouble.
    // Van egy papagájunk a hour a valós idő, ha 7 óra előtt vagy 20 óra után beszél bajban vagyunk.
    
    function parrotTrouble(talking, hour) {
        if(talking === true && hour < 7 || hour > 20 ){
            return true;
            } else {
            return false;
            }
    
    }
    console.log('parrotTrouble');
    console.log(parrotTrouble(true, 6)); // true
    console.log(parrotTrouble(true, 7)); // false
    console.log(parrotTrouble(false, 6)); // false
    
    /***********************************************************************************************/
    //Given 2 values, return true if one is negative and one is positive. 
    //Except if the parameter "negative" is true, then return true only if both are negative.
    
    //Két érték van megadva, adjunk vissza true-t, ha az egyik pozitív a másik meg negatív
    //kivéve, ha mind a kettő negatív, akkor is térjünk vissza true-val
    
    function posNeg(a, b, negative) {
        if( a === -a && b === -b && negative === true ){
        return false
        } else{
        return true
        }
    }
    
    console.log('posNeg');
    console.log(posNeg(+1, -1, false)); // true
    console.log(posNeg(-1, +1, false)); // true
    console.log(posNeg(-4, -5, true)); // true
    
    /***********************************************************************************************/
    
    //Return true if the given non-negative number is a multiple of 3 or a multiple of 5. 
    //Use the % "mod" operator
    
    //Térjünk vissza true értékkel, ha a paraméterünk osztható 3-mal vagy 10-el
    //Használd a % operátort
    
    function or35(number) {
    
    
    }
    
    console.log('or35');
    console.log(or35(3)); // true
    console.log(or35(10)); // true
    console.log(or35(8)); // false
    
    /***********************************************************************************************/
    //Given a string, take the first 2 chars and return the string with the 2 chars 
    //added at both the front and back, so "kitten" yields "kikittenki". 
    //If the string length is less than 2, use whatever chars are there.
    
    //Meg van adja egy string, szedd le az első 2 karakterét és térj vissza 2 karakterrel
    //a szó elején és a végén, vagyis "kitten"-ből lesz "kikittenki"
    //Ha a string hossza nem haladja meg a 2 hosszúságot, akkor ismételje ugyan úgy a karaktereket
    
    function front22(str) {
    
    
    }
    console.log('front22');
    console.log(front22("kitten")); // "kikittenki"
    console.log(front22("Ha")); // "HaHaHa"
    console.log(front22("abc")); // "ababcab"
    
    /***********************************************************************************************/
    //Given two temperatures, return true if one is less than 0 and the other is greater than 100.
    
    //Van kettő hőmérsékletünk, térjünk vissza true-val, ha az egyik érték kisebb mint 0, a másik meg nagyobb mint 100
    
    function icyHot(temp1, temp2) {
    
    
    }
    console.log('icyHot');
    console.log(icyHot(120, -1)); // true
    console.log(icyHot(-1, 120)); // true
    console.log(icyHot(2, 120)); // false
    
    /***********************************************************************************************/
    //We'll say that a number is "teen" if it is in the range 13..19 inclusive. 
    //Given 3 values, return true if 1 or more of them are teen.
    
    //Tinédzsert mondunk arra, aminek az életkora 13 és 19 között van
    //Kapunk 3 értéket és ha legalább az egyik tinédzser kor, akkor adjunk vissza true-t.
    
    function isTeen(a, b, c) {
    
    }
    console.log('isTeen');
    console.log(isTeen(13, 20, 10)); // true
    console.log(isTeen(20, 19, 10)); // true
    console.log(isTeen(20, 10, 13)); // true