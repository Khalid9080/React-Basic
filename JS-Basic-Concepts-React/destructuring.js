// 


// 1. array destructuring

const numbers=[42,56]
// const x=numbers[0]
// const y=numbers[1]

const [x,y]=numbers //array destructuring
const [r,t]=[45,23] //array destructuring

function boxify(num1,num2){  //array destructuring
    const nums=[num1,num2]
    return nums
}

console.log(x,y);
console.log(r,t);

cosnt [First,second] = boxify(23,45) //array destructuring

console.log(boxify(23,45)); //array destructuring

// Movies k destructuring korbo
const student = {
    name: 'Sakib',
    age: 24,
    movies: ['King Khan', 'Dhakar Mastan']
};

const [movie1, movie2]=['King Khan', 'Dhakar Mastan']
const [movie3, movie4]=student.movies
console.log(movie1, movie2);
console.log(movie3, movie4);
