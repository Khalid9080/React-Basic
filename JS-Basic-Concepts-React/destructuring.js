

// Destructuring hoche array or object theke kichu value ber kore nie ekta variable a store kore rakha. and value retrun kore.



// 1. array destructuring -----------

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

const [First,second] = boxify(23,45) //array destructuring

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

// 2. Object destructuring --------

//const {name, age}= {name:'alu', age:14}
const {name, age}= {id: 1, name:'alu', age:14, salary: 34000}
console.log(name, age);


const employee = {
    ide:'VS Code',
    designation: 'Developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 60,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const {machine,ide}=employee;
const {weight, address}=employee.specification;
const {brand}=employee.specification.watch;
//const {brand}=employee?.specification?.watch; //optional chaining jodi na thake tahole kno error dibe na
