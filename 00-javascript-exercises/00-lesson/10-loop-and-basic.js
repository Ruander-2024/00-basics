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