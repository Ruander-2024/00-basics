const user = {};

user.name = 'John Doe';
user.age = 41;

console.log(user);

const student = {
    // A bal oldali a kulcs, ami mindig string, a jobb oldali, pedig az érték
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

const address = {
    city: 'Budapest',
    zipCode: 1035
};

const grades = [5, 4, 3, 2, 1]

//hozzáadás objecthet
student.address = address;

console.log(student)
student.grades = grades
console.log(student)
console.log(student.address.city)


console.log('-----------key and value----------')
//tömbként megkapom az object kulcsokat
console.log(Object.keys(student));
console.log(Object.keys(student.adress));
//tömbként megkapom az object értékeit
console.log(Object.values(student));

//Object key-value iteration for ..in
console.log('-----------iteration on object----------')
//object eleminek megjelenítése

for(const key in student) {
    console.log(key)
}
