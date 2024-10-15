

// 1. How to decleare a vaiable using let and const
const fatherName = 'Arnold';    //not changeable
let season = 'Rainy'; // changeable


// 2. six basic Conditions: (<,>,===,!==,<=,>=,if, else, (multiple conditions &&,||) ) 
if(fatherName === 'Arnold' || season === 'Rainy'){
    console.log('I will not go to picnic');
}
else if(fatherName === 'Arnold' && season === 'Rainy'){
    console.log('I will go to picnic');
}
else{}


// 3. Array: (decleare, index, length, push, pop, indexOf, includes)
const numbers = [89, 35, 98, 12];


// 4. Loop: for loop, while loop
for(let i=0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}

while(numbers.length > 0){
    const number = numbers.pop();
    console.log(number);
}


// 5. Function: (decleare, call, return)
function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}
multiply(35, 78);

// 6. Object: (decleare, set value, get value), 3 ways to access property by name
const student = {
    name: 'Sakib',
    age: 24,
    movies: ['King Khan', 'Dhakar Mastan']
};
const myVariable='age'; // property name in a variable


console.log(student.name); // direct property by name , dot notation
console.log(student['name']); //acces via string , bracket notation
console.log(student[myVariable]); //acces via variable , bracket notation

