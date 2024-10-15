

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

console.log(boxify(23,45)); //array destructuring