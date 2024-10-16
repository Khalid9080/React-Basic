

const person = {

    name: 'John',
    age: 30,
    hobbies: ['reading', 'sports'],
    45: 'serial', // dot notation use kora jabe na, kintu bracket notation use kora jabe.
    'co-curricular': 'debate', // bracket notation use korte hobe must
    age: 40,
    address: 'Shahabag'
};

// dot notation 
const prof1 = person.name;

// bracket notation
const prof2 = person['name']; //property name ta string hisabe ' ' dite hobe
const prof4 = person[45];
const prof5 = person['co-curricular'];
console.log(prof1, prof2, prof4, prof5);



// ghurai, pecaia lekha system
const myVariable = 'name';
const prof3 = person[myVariable];
console.log(prof3);

