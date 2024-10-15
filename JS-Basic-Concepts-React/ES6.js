
// 1. Tamplate String: (``)

const numbers = [89, 35, 98, 12];

const student = {
    name: 'Sakib',
    age: 24,
    movies: ['King Khan', 'Dhakar Mastan']
};

const about = `My name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

// 2. Arrow Function: (single line, multy line, multiple parameters, function body)
const getFiftyFive = () => 55;   //55 is the return value - single line

const addSixtyFive = num => num + 65; //num is the parameter, num+65 is the return value - single line, single parameter

const addThree = (x,y,z) => x+y+z; //x+y+z is the return value - single line, multiple parameters

const doMath = (num1, num2) => {  // multy Line arrow function, return use korte hobe
    const sum = num1 + num2;
    return sum;
 }


 // 3. Spred operator (...) : (array max, array copy, array concatination, array find max)

// const number = [89, 35, 98, 12, 69, 74];
// const newNumbers = number;
// number.push(99); // ekhane amra push korsi number k kintu newNumbers o change hobe karon newNumbers array copy na kore reference copy kore 
// number.push(99);

// console.log(newNumbers); // array copy na kore reference copy kore
// console.log(number); // array copy na kore reference copy kore


//const number = [89, 35, 98, 12, 69, 74]; k newNumber theke alada kora hoise.
const number = [89, 35, 98, 12, 69, 74];
const newNumbers = [...number]; 
number.push(99); // ekhane amra push korsi number k kintu newNumbers o change hobe karon newNumbers array copy na kore reference copy kore 
number.push(99);

console.log(newNumbers); // output [ 89, 35, 98, 12, 69, 74 ]
console.log(number); // output 89, 35, 98, 12, 69, 74, 99, 99
  

// Puran array theke new array bananite hobe, and ekta element jog korte hobe.
const currentNumbers = [...number, 55]; // output 89, 35, 98, 12, 69, 74, 99, 99, 55
console.log(currentNumbers);