// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");

// FUNCTION SYNTAX:
/*
function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}
sayMyName();   // sayMyName => refrence  () => execution
 
*/

/*

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

addTwoNumbers(); //NaN => Not a Number
addTwoNumbers(3, 4); // 7

 yaha number1 , number2 => parameters hai aur 3 ,4 arguments h
jb hum function ki definition banate h to uske andar jo bhi input lete h wo paramers h
jb hum function ko call karate h tb jo value pass krte h usko bolte h arguments.

*/
/*
function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

const result = addTwoNumbers(3, 5);
console.log("Result",result); // 8 Result: undefined


output: 8 Result :undefined


*/

/*
function addTwoNumbers(number1, number2) {
    let result = number1+ number2;
    return result;
  }
const result = addTwoNumbers(3,5);
console.log("Result",result);   // Result 8
*/

/*
function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
  console.log("Ashutosh"); // it will not print Ashutosh
}
const result = addTwoNumbers(3, 5);
console.log("Result", result);
*/
// Note : By default after anything will not work or print

/*
function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  console.log("Ashutosh"); // it will print Ashutosh
  return result;
}
const result = addTwoNumbers(3, 5);
console.log("Result", result);  
*/

// Another way of doing
/*
function addTwoNumbers(number1, number2) {
  return number1 + number2;
}
const result = addTwoNumbers(3, 5);
console.log("Result", result);
*/

/*
function loginUserMessage(username) {
  return `${username} just logged in`;
}
loginUserMessage(); // returns nothing
*/

/*
function loginUserMessage(username) {
  return `${username} just logged in`;
}
console.log(loginUserMessage("Ashutosh")); //Ashutosh just logged in
*/

/*
function loginUserMessage(username) {
    return `${username} just logged in`;
  }
  console.log(loginUserMessage(" ")); // just logged in
  */
/*
function loginUserMessage(username) {
  return `${username} just logged in`;
}
console.log(loginUserMessage()); // undefined just logged in

*/

/*
function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please enter a username");Please enter a username
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage()); //undefined
*/

// giving default value
/*
function loginUserMessage(username = "sam") {
  if (username === undefined) {
    console.log("Please enter a username"); //Please enter a username
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage("hitesh")); // hitesh just logged in
console.log(loginUserMessage()); // sam just logged in

*/
/*
function calculateCartPrice(num1) {
  return num1;
}
 console.log(calculateCartPrice(2)); // 2
*/
// rest operator
/*
function calculateCartPrice(...num1){
  return num1
}
console.log(calculateCartPrice(200,400,500));  // [ 200, 400, 500 ]
*/
/*

function calculateCartPrice(val1 , val2, ...num1){
  return num1
}
console.log(calculateCartPrice(200,400, 500 ,2000)); // [ 500, 2000 ]
*/
// 200 => jaiega val1 me , 400 jaiega val2 me bakki remaining print hoga.
/*
const user = {
  username: "hitesh",
     price: 199

 }

 function handleObject(anyobject){
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
/ }

handleObject(user)
//Username is hitesh and price is 199
*/
const user = {
  username: "hitesh",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

//handleObject(user)
//Username is hitesh and price is undefined
handleObject({
  username: "sam",
  price: 399,
});

// Username is sam and price is 399

const myNewArray = [200, 400, 100, 600];

function returnSecondvalue(getArray) {
  return getArray[1];
}
console.log(returnSecondvalue(myNewArray)); // 400
console.log(returnSecondvalue([200, 400, 500, 1000])); // 400
