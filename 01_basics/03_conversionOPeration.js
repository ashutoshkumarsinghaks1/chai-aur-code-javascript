// Datatpe conversion and confusion.
let score = 33;
console.log(typeof score); //number
let valueInNumber = Number(score);
console.log(valueInNumber);

let score1 = "34";
let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber); //number
console.log(valueInNumber1);

let score2 = "34abc";
let valueInNumber2 = Number(score2);
console.log(typeof valueInNumber); // number //but this is wrong
console.log(valueInNumber2); //output --> NaN -->  means --> Not a Number

let score3 = null;
console.log(score3);
console.log(typeof score3); //object

let score4 = undefined;
console.log(typeof score4); //undefined

let score5 = true;
console.log(typeof score5); //boolean
let valueInNumbe5 = Number(score5);
console.log(valueInNumbe5); // 1 because of true

let score6 = "hitesh";
let valueInNumber6 = Number(score6);
console.log(valueInNumber6);

//"33" => 33
//"33abc" => NaN => not a number
// true => 1 , false=> 0
let isloggedIn = 1;
let booleanIsloggedIn = Boolean(isloggedIn);
console.log(booleanIsloggedIn);
// 1=>true; 0 => flase
// "" => false
//"hitesh" =>  true
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);
//****************************************************** Operations **************************************
let value = 3;
let negvalue = -value;
console.log(negvalue);
/*
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3); //power
console.log(2 / 2);
console.log(2 % 2);
*/
/*
let str1 = "hello";
let str2 = "  ashutosh";
console.log(str1 + str2);
*/
console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122   jo phle hoga string ya number usi ka behabiour aaega

console.log(1 + 2 + "2"); //32    jo phle hoga string ya number usi ka behabiour aaega

console.log(true); //true
console.log(+true); // 1
//console.log(true+)  //error
console.log(+""); //0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // this is not a good way to write

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

let gameCounter1 = 100;
++gameCounter1;
console.log(gameCounter1);

//****************************************** */
/*

Increment (++)
The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment,
 depending on where the operator is placed.

*/
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

/************************************ */
//Postfix increment
let x1 = 3;
const y1 = x1++;
// x1 is 4; y1 is 3

let x3 = 3n;
const y3 = x3++;
// x3 is 4n; y3 is 3n
//Prefix
let x4 = 3;
const y4 = ++x4;
// x is 4; y is 4

let x5 = 3n;
const y5 = ++x5;
// x5 is 4n; y5 is 4n
