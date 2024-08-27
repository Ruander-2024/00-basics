// összehasonlító operátor és elágazások

let num1 = 10;
let num2 =-20;

if (num1 > num2) {
 console.log('num1 nagyobb')
}
else{
    console.log('num2 nagyobb')
}


if (num1 > num2) {
    console.log('num1 nagyobb')
   }
   else if(num1 > 0){
       console.log('num1 + szám')
   }
   else if(num2 > 0){
    console.log('num2 + szám')
}
else {
    console.log ('egyik sem')
}


// ==, ===

if('10' == 10){
    console.log('egyenlőek a számok')
}
else {
    console.log ('nem egyenlőek')
}
if('10' === 10){
    console.log('egyenlőek a számok')
}
else {
    console.log ('nem egyenlőek')
}


//Truthy values                             //False értékek

//if (true)---true                          // if(false)
//if ({}) ----true                          // if(null)
//if ([{}]) ----true                        // if(undefined)
//if (42) ----true                          // if(0)
//if ('string') ----true                    // if ('')
//if (new Date())---true                    // if(0n)
//if (-42)---true                        
//if (12n)---true    
//if (3.14)---true
//if (-3.14)---true
//if (infinity)---true

//num1 = 10;
// num2 =-20;
// Or és ANd

if(num1!== 10 || num1 > 0){
    console.log('Or operator return 1')
}

if(num1 !== 10 || num1 >  100  ) {
    console.log('Or operator return 2')
}

if (num1 !== 10 || num1<11){
    console.log('Or operator return 3')
}


//num1 = 10;
// num2 =-20;

if(num1> 0 && num1 < 20){
    console.log('Or operator return 4')
}
if(num1> 0 && num1 < 20 && num1 < 3){
    console.log('Or operator return 5')
}
if(num1> 0 && num1 < 20 || num1 < 3){
    console.log('Or operator return 6')
}