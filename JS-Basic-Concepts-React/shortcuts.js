
// 1. Check Truthy, Falsy --------- 

// Falsy ---> '' , 0 , undefined , null , NaN , false
// Truthy ---> '0', 'khalid', [], {}, true


//check truthy
let myVar = 5
if (myVar) { // myVar ===true
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

//check falsy
let myMoney = 50;
if (!myVar) { // myVar ===false
    myVar = myVar * 100;
}
else {
    myVar = 0;
}


// 2. Ternary Operator ---------

// const Money = 80;
// let food;
// if (Money > 100) {
//     food = 'Biriyani';
// }
// else {
//     food = 'Alur Vorta';
// }

// Ternary Operator
const taka = 100;
//                [condition]      [ ? means if true]     [return 'Biriyani']    [ : means else/false/else if]   [return 'Alur Vorta']
let food1 =         taka>50                ?                   'Biriyani'                     :                      'Alur Vorta';
console.log(food1);


let drink = (taka > 50 && myVar > 100) ? 'Coca Cola' : 'Filter Water';
console.log(drink);

// ternary operator with function
let isActive = true;
const showUser = () => console.log('Display User');
const hideUser = () => console.log('Hide User');
isActive ? showUser() : hideUser();
//same as above BUT && etar mane hocche isActive true hole showUser() run korbe, false hole showUser() run korbe na.
isActive && showUser(); 
// || etar mane hocche isActive true hole showUser() run korbe, false hole hideUser() run korbe.
isActive || hideUser(); 


// toggle boolean [true thakle false, false thakle true]
isActive = !isActive;







// 3. Number to String Conversion --------
// kono number er shate emplty string jog korle oita ekta string hoye jabe.
const num1 = 54
console.log(num1);
const numStr = num1 + ''; //string a conver hoe jabe.
console.log(numStr);

// 4. String to Number Conversion --------
const input = '560';
const inputNum = +input; // + sign diye string to number convert kora jabe.
console.log(inputNum);


// 
