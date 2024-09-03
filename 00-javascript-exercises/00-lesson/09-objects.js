const user = {};       // Object kapcsos zárójellel jelöljük

user.name = 'John Doe';
user.age = 41;

console.log(user);

const student = {
    // a bal oldali a kulcs, ami mindig string, a jobb oldali pedig az érték
    // key : value
    // kulcs : érték

    username: 'Bill Gates',
    age: 42,
    date: '1958-06-04',
    email: 'bill@microsoft.com',
    isActive: false
};

console.log(student);

console.log(student.username, student.age);

console.log();

let age = 'age';

console.log(student[age], student['date']);


// Kulcs-érték törlése
delete student.isActive;
console.log(student);

const adress = {
    city: 'Budapest',
    zipCode: 1035
};

const grades = [5, 4, 3, 2, 1];

// Hozzáadás objekthez
student.adress = adress;
console.log(student);

student.grades = grades;

console.log(student);

console.log(student.adress.city);

console.log(student.grades[3]);

console.log('----- key and value -----');

// Tömbként megkapom az object kulcsokat
console.log(Object.keys(student));
console.log(Object.keys(student.adress));

// Tömbként megkapom az object értékeit
console.log(Object.values(student));

// Object key-value iteration for ..in

console.log('----- iteration in object -----');
for(const key in student){
    //console.log(key);
    console.log(key, ';' ,student[key]);   // Így tudjuk for ciklussal lekérni a kulcsokat és a student-nek a kulcsadik elemét, vagyis az értékét
    // ebben a kódban a ';' jelölés csak a megjelenítésben játszik szerepet, így amikor kiíratjuk el lesz választva pl age ; 42
}


const userList = [
    {name: 'Tibi', active: false},
    {name: 'Péter', active: true},
];

const newUser = {
    name: 'Eszter', active: true
}

console.log(userList);

userList.push(newUser);
console.log(userList);
