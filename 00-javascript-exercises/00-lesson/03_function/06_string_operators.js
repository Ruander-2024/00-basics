let userName = 'Bill Gates'

console.log(userName.toLocaleLowerCase()); //minden kisbetűs lesz  
console.log(userName.toLocaleUpperCase()); //minden nagybetűs lesz
console.log(userName.charAt(0)); // n-edik karaktert írja ki (n most a 0)


//substring

console.log(userName.substring(0, 4)); //0 indexről indul és elmegy a 4. indexig
console.log(userName.substring(4)); //4. indexről indul és végig megy

//userName = userName.substring(4);  //így meg lehet változtatni
//console.log(userName);

//slice

    console.log(userName.slice(2, 6));    //2. index benne van a 6. meg nincs
    console.log(userName.slice(-3 ));    // utólso 3 indexet adja vissza
    console.log(userName.slice(2, userName.length)); //2. indextől a változó értékének teljes hosszáig

//string hossza

console.log(userName.length);


//replace

console.log(userName.replace("i", "x")); //kicseréli a 'i' karaktert "x"-re
console.log(userName.replace(/l/g, "x")); //globálisan(g) kicseréli az összes "l"-t "x"-re

//Trim
let str = "            hello         "
console.log(str.trim('')); //csak az elejéról és a végéről vágja le a szóközöket

//includes
let sentense = 'Bill Gates is very ritch';
console.log(sentense.includes("Gates"));     // keress, hogy étezik-e ilyen és True értéket ad vissza 

//indexof

console.log(sentense.indexOf("Gates"));//számot ad vissza, ahonnan kezdődik a keresett kifejezés
console.log(sentense.indexOf("gates")); //-1 nem talál egyezést


//split

console.log(sentense.split(" ")); //a ""közé írt karakter szerint választja szét a változó értéket

//template literals

let firstName = "Ben"
let job = "Frontend developer"
console.log(firstName + "is a" + job + 'at Microsoft');
console.log(`${firstName} ${job} at Microsoft`)           