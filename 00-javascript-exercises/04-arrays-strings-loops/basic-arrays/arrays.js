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


// --------------------------- NEGYEDIK FELADAT -------------------------------
//
// Adott egy számokat tartalmazó tömb, távolítsd el az oda nem illő adatot (stringet) és írj a helyére a kapott számértéket.
// Mindig egy, vagy egy sem oda nem illő string van esetünkben.
// Ha van benne string, távolitsa el, és adja vissza az eltávolított elemet. 
// Ha nincs, akkor adja vissza az eredeti tömböt. Használd a splice metódust.
//
console.log(mySplice([22, 6, 5, 91, 27], 33));
// Output: [22, 6, 5, 91, 27]

console.log(mySplice([22, "data", 5, 91, 27], 33));
// Output: ["data"]

function mySplice(myArr, num) {
  
    
}


// ------------------------------- ÖTÖDIK FELADAT ---------------------------
//
// Adott egy tömb, távolítsd el az első elemét, utána irasd ki az aktuális első elemet.
//
// 
console.log(myShift(["0th", "1st", "2nd", "3rd"]));
// Output: "1st"

function myShift(myArr) {
   let myShift = myArr.shift();
    return myArr[0];
}