
// 1. JSON conversion, JSON string parse, stringify-------------------

//  Normal Object -----> JSON.stringify() -----> JSON String Object
//  JSON String Object -----> JSON.parse() -----> Normal Object

// js object ase, js object notation a convert korte caile JSON.stringify(student) use korte hobe
const student = {
    name: 'Sakib',
    age: 24,
    movies: ['King Khan', 'Dhakar Mastan']
};
const studentJSON = JSON.stringify(student);
console.log(student); // object return korbe
console.log(studentJSON); // JSON string return korbe

// JSON string k abar ager moto object a convert korte caile amra JSON.parse(studentJSON) use korbo.
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);


// 2. fetch -------------------
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data))

//  keys, values -->
const keys = Object.keys(student);
const values = Object.values(student);

// forEach loop [** kno ekta array er vitor loop calalite hoile forEach use korbo]
const numbers = [23, 45, 56, 78, 89];
numbers.forEach(num => console.log(num)); //forEach loop use korle kono return dite hobe na
numbers.map(num => num * 2); // jodi kisu return korte cai tahole map use korbo

// for of loop [use korbo on (Array Like Object). Example: arguments, getElementsByClassName, QuerySelectorAll] 
// for in loop [Object er upor use korbo]


// 3. Add or remove items from an array ---------
const products = [
    {
        name: 'laptop',
        price: 32000,
        brand: 'iphone',
        color: 'silver'
    },
    {
        name: 'phone',
        price: 3000,
        brand: 'lenovo',
        color: 'black',
    },
    {
        name: 'watch',
        price: 2000,
        brand: 'casio',
        color: 'yellow',
    },
    {
        name: 'sunglass',
        price: 22000,
        brand: 'canon',
        color: 'red',
    },
    {
        name: 'camera',
        price: 88000,
        brand: 'lg',
        color: 'yellow',
    },
    {
        name: 'kyboard',
        price: 290800,
        brand: 'logitech',
        color: 'gray',
    }

]

const newProduct = { name: 'webcam', price: 700, brand: 'logitech', color: 'black' };

// new product ta add korbo, ager product ta copy kore newProduct ta ager tar vitor add korbo.
const newProducts=[ ...products, newProduct];
console.log(newProducts);


// 4. filter() ---------
// create a new array without one specific item
//remove phone means create a new array without phone
// phone bade , baki object gulo k nie ekta array banaia return korbe.

const remaining = products.filter(p=>p.name !=='phone')

