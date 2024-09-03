// for ciklusok

for(let i = 0; i<= 5; i++) {
    // console.log(i);
    // 0 - 5 -ig fut le
}

for (let i = 0; i <5; i++){
    // console.log(i);
    // 0 - 4 -ig fut le
}

for (let i = 1; i <=5; i++) {
    // console.log(i);
    // 1 - 5 -ig fut le
}

for (let i = 0; i <= 5; i = i + 2) {  //i+=2
    // console.log(i);
    // 0, 2, 4,
} 

for (let i = 5; i >= 0; i--){
    // console.log(i);
}

// Tömbökkel 

const nums = [10, 23, 35, 46, 58];

for (let i = 0; i < nums.length; i++) {
    // console.log(nums[i]);
    // 10, 23, 35, 46, 58
}

for (let i = nums.length - 1 ; i >= 0; i--) {
    // console.log(nums[i]);
    // 58, 46, 35, 23, 10
}

// for of - Akkor használjuk, amikor nincsen szükség az indexre, csak a tömbben tzalálható értékre
for (const num of nums) {
    console.log(num);
}
