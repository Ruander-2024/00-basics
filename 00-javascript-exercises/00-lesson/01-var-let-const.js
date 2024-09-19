// változó var
console.log(" ----- Var változó -----");

var number = 20;

console.log(number);


// Hoisting

var x;
var x = 30;
console.log(x);

/// Let változó

console.log(" ----- Let változó -----");

let letNumber = 21;
console.log(letNumber);

// familyName;
let familyName = "Kovács";
console.log(familyName);
// Nem lehet először létrehozni és utána értéket adni, ez a var-nál lehetséges

// Const változó

console.log(" ----- Const változó -----");

const WEB_URL = "http";
// WEB_URL = 'https' Nem lehet megváltoztatni az értékét

console.log(WEB_URL);

// Scope - elérési terület

console.log(" ----- Scope változó -----");

function addNum(){
    console.log(WEB_URL);
    var localVar = 23;
    console.log(localVar);
    {
        var blockVar = "blockVar"
        let blockLet = "blockLet"
        console.log(blockLet);
    }
    console.log(blockVar);
}

// console.log(blockVar); Kívülről nem tudjuk elérni, csak a függvényen belül

addNum();
