const score = 400;
console.log(score); // 400
console.log(typeof score); //number

const balance = new Number(100);
console.log(balance); //[Number: 100]
console.log(typeof balance); // object

console.log(balance.toString()); // 100 => as string
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00
console.log(balance.toFixed(1)); // 100.0

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3)); // 23.9

const otherNumber1 = 123.8966;
console.log(otherNumber1.toPrecision(3)); // 124

const otherNumber2 = 1123.8966;
console.log(otherNumber2.toPrecision(3)); // 1.12e+3

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); //'en-IN' indian number output:10,00,000

//+++++++++++++ Maths  ++++++++++++
console.log(Math); //output: Object [Math] {}
console.log(Math.abs(-4)); //  4 =>gives + positive
console.log(Math.abs(4)); //  4 => still 4 as it is already positive.
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.6)); //5
console.log(Math.ceil(4.2)); // 5 it will always give upper value
console.log(Math.floor(4.2)); // 4
console.log(Math.floor(4.6)); // 4 it will always give  lower value
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8

console.log(Math.random()); // output : gives value always between 0 and 1

console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
