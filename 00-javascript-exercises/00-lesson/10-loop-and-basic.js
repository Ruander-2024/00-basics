// for ciklusok

for(let i = 0; i <= 5; i++) {
  // console.log(i);
  // 0 - 5
}

for (let i = 0; i < 5; i++) {
  // console.log(i);
  // 0 - 4
}

for (let i = 1; i <= 5; i++) {
  // console.log(i);
  // 1 - 5
}

for (let i = 0; i <= 5; i+=2) {
  // console.log(i);
  // 0, 2, 4
}

for (let i = 5; i >= 0; i--) {
  // console.log(i);
  // 5 - 0
}

// Tömbökkel

const nums = [10, 23, 35, 46, 58];

for (let i = 0; i < nums.length; i++) {
  // console.log(nums[i]);
  // 10, 23, 35, 46, 58
}

for (let i = nums.length - 1; i >= 0; i--) {
  // console.log(nums[i]);
  // 58, 46, 35, 23, 10
}

// for of - Akkor használjuk, amikor nincsen szükség az indexre, csak a tömbben található értékre
for (const num of nums) {
  console.log(num);
}

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
        case 'multi':
            result = num1 * num2;
            break;
        case 'divide':
            if(num2 > 0){
                result = num1 / num2
            }
            else{
                result = 'Nullával nem lehet osztani!';
            }
            break;
        default:
            result = 'Érvénytelen műveleti típus: ' + type;
    }
    return result;
}

console.log(calculate('add', 30, 50.5)) // 80,5
console.log(calculate('sub', 30, -21)) // 51
console.log(calculate('divide', 30, 6)) // 5
console.log(calculate('multi', 30, 7)) // 210
console.log(calculate('mult', 30, 7)) // Érvénytelen művelet
console.log(calculate('divide', 30, 0)) // Nullával nem lehet osztani

console.log();
console.log('for ciklus feladatok');

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

console.log();

// 1
// 123
// 2
// 123...

for(let i = 1; i <= 3; i++){
  let line ='';
  console.log(i);
  for(let j = 1; j <= 3; j++){
    line = line + j; // line += j
  }
  console.log(line);
  
}

console.log();

// *
// * *
// * * * ...

for(let i = 1; i <= 3; i++){
  let line ='';
  for(let j = 1; j <= i; j++){
    line += '* '; // line += '* '
  }
  console.log(line);
  }

  console.log();

  // 1
  // 12
  // 123
  // 1234
  // 12345

  for(let i = 1; i <= 5; i++){
    let line = '';
    for(let j = 1; j <= i; j++){
    line = line + j; // line + j
    }
    console.log(line);
    }

    console.log();

// 1
// 22
// 333
// 4444
// 55555

for(let i = 1; i <= 5; i++){
  let line = '';
  for(let j = 1; j <= i; j++){
  line = line + i; // line + i
  }
  console.log(line);
  }

  console.log();

  //    1 * 1 = 1
  //     1 * 2 = 2
  //     1 * 3 = 3
  //     1 * 4 = 4
  //     1 * 5 = 5
  //     1 * 6 = 6
  //     1 * 7 = 7
  //     1 * 8 = 8
  //     1 * 9 = 9
  //     1 * 10 = 10
  
  //     2 * 1 = 2
  //     2 * 2 = 4
  //     2 * 3 = 6
  //     2 * 4 = 8
  //     2 * 5 = 10
  //     2 * 6 = 12
  //     2 * 7 = 14
  //     2 * 8 = 16
  //     2 * 9 = 18
  //     2 * 10 = 20

  for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log();
    }
  





