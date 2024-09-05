// for ciklusok

for(let i = 0; i <= 5; i++) {
    console.log(i);
    // 0-tól 5-ig fut le
}

for (let i = 0; i < 5; i++) {
    console.log(i);
    // 0-tól 4-ig fut le
}
    
for (let i = 1; i <= 5; i++){           // i++ a dupla plusz jel azt jelenti h egyel növeli az értékét
    console.log(i);
    
}

for (let i = 0; i <= 5; i+=2){       // i+=2 2-vel növeli az értéket
    console.log(i);
    // 0, 2, 4
}

for (let i = 5; i >= 0; i--){         // visszafele halad -- al csökkenti az értéket / i-=2 2-vel csökkenti az értéket
    console.log(i);
    //5-0 ig csökkenti
}

// Tömbökkel

const nums = [10, 23, 35, 46, 58];

for (let i = 0; i < nums.length; i++){
    console.log(nums[i]);
    //   10,23,35,46,58
}

for (let i = nums.length - 1; i >= 0; i--){    //  lesz egy undefined elem mert 5 a hossz de az indexelés 0-4 között megy végbe, ezért kell a nums.length-1 igy már nemlesz undefined elem
    console.log(nums[i]);
    
}

// For of - akkor használjuk amikor nincsen szükség az indexre, csak a tömbben található értékre

for (const num of nums){
    console.log(num);
    
}


// Switch - case
console.log('Switch - case');


function calculate(type, num1, num2){

    let result;
    switch(type){
        case 'add':
            result = num1 + num2;
            break;
        case 'sub':
            result = num1 - num2;
            break;
        case 'divide':
            if(num2 > 0){
                result = num1 / num2;
            }else {
                result = 'Nullával nem lehet osztani!';
            }
            
            break;
        case 'multi':
            result = num1 * num2;
            break;
        default:
            result = 'Érvénytelen műveleti típus: ' + type;    
    }
    return result;
    
    //if (type === 'add'){
    //    return num1 + num2;
    //}
    //else if (type === 'sub'){
    //    return num1 - num2;
    //}
    //else if (type === 'divide'){
    //    return num1 / num2;
    //}
    //else if (type === 'multi'){
    //    return num1 * num2;
    //}
}
console.log(calculate('add', 30, 50.5)) // 80,5
console.log(calculate('sub', 30, -21)) // 51
console.log(calculate('divide', 30, 6)) // 5
console.log(calculate('multi', 30, 7)) // 210
console.log(calculate('mult', 30, 7)) // 210
console.log(calculate('divide', 30, 0)) // 5




console.log();
console.log('For ciklus feladatok');

// 1 kör
// 1
// 2 
// 3
// 4
// 2 kör ...
// 3 kör ...

for(let i = 1; i <= 3; i++){
    console.log(i + '. kör');
    for(let j = 1; j <= 4; j++){
        console.log(j);
        
    }
        
}



// 1
// 123
// 2
// 123...

for(let i = 1; i <= 3; i++){
    let line ='';
    console.log(i);
    
    for(let j = 1; j <=3; j++){
        line = line + j;       
    }   
    console.log(line);
     
}


//*
//* *
//* * *..


for(let i = 1; i <= 3; i++){
    let line = '';
    for(let j = 1; j <= i; j++){
        line = line + '* ';       // line += '* '
    }   
    console.log(line);    
}


// 1
// 12
// 123
// 1234
// 12345


for(let i = 1; i <= 5; i++){
    let line = '';
    for(let j = 1; j <= i; j++){
        line = line + j;     // line += j
    }
console.log(line);
}

// 1
// 22
// 333
// 4444
// 55555

for(let i = 1; i <= 5; i++){
    let line = '';
    for(let j = 1; j <= i; j++){
        line = line + i;   // line += i
    }
console.log(line);
}


//


for(let i = 1; i <= 2; i++){
for(let j = 1; j <= 10; j++){
    console.log(`${i} * ${j} = ${i*j}`);   
    }
console.log();
}   

//  VAGY

for (let i = 1; i <=2; i++){
    
    for (let j = 1; j <= 10; j++){
        console.log(i + " * " + j + " = " + i * j);   
    }
    console.log();
    
}