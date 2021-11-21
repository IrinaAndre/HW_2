const firstNumber = +prompt('Enter the first number');
const secondNumber = +prompt('Enter the second number');

let add = firstNumber + secondNumber;
let sub = firstNumber - secondNumber;
let mult = firstNumber * secondNumber;
let div = firstNumber / secondNumber;

console.log(`Result: ${firstNumber} + ${secondNumber} = ${add}`);
console.log(`Result: ${firstNumber} - ${secondNumber} = ${sub}`);
console.log(`Result: ${firstNumber} * ${secondNumber} = ${mult}`);
console.log(`Result: ${firstNumber} / ${secondNumber} = ${div}`);