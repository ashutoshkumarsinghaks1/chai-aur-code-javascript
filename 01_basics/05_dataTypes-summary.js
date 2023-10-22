/*
*NOTE: javascript is a dynamic type language .
it is because => You can create new variables at runtime, and the type of variables is determined at runtime.
*/

// Primitive
// 7 types: String, Number , Boolean , null , undefined , Symbol , BigInt

const score = 100; //number
const scoreValue = 100.3;
const loggedIn = false; //boolean
const outsideTemp = null; // typeof => object
let userEmail; //undefined
let userEmail1 = undefined; //undefined

const id = Symbol("123");
const anotherid = Symbol("123");
console.log(id === anotherid); // false   => these are not equal  //symbol
const BigNumber = 33333333333336677788n; //BigInt
//Rerence(Non Primitive)
// Objects , Array , Functions
const heros = ["Shaktiman", "naagraj", "doga"]; //Array

let myObj = {
  name: "Ashutosh", //object
  age: 22,
};

//function definition: function(){}
const myFunction = function () {
  console.log("Hello World");
};

// we can check the datatype by using => typeof
// now will check data type of each of above variable declared.
console.log(typeof score); //number
console.log(typeof scoreValue); //number
console.log(typeof loggedIn); //boolean
console.log(typeof outsideTemp); //obect  =>null
console.log(typeof userEmail); //udefined
console.log(typeof userEmail1); //undefined
console.log(typeof id); //symbol
console.log(typeof anotherid); //symbol
console.log(typeof BigNumber); //bigint
console.log(typeof heros); //object => Array
console.log(typeof myObj); //boject =>object
console.log(typeof myFunction); //function =>function
