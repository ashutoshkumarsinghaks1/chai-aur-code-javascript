/*
const user = {
    username: "hitesh",
    price:9999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`) //hitesh , welcome to website
    }
}

user.welcomeMessage()
*/

/*
const user = {
    username: "hitesh",
    price:9999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`) //sam , welcome to website
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage() //sam , welcome to website
*/

/*
const user = {
  username: "hitesh",
  price: 9999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// output:

hitesh , welcome to website
{
  username: 'hitesh',
  price: 9999,
  welcomeMessage: [Function: welcomeMessage]
}
sam , welcome to website
{
  username: 'sam',
  price: 9999,
  welcomeMessage: [Function: welcomeMessage]
}
*/

/*
const user = {
  username: "hitesh",
  price: 9999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);
  },
};

console.log(this);


output: {}
empty kyonki hum node environment me h
*/

/*
function chai(){
    console.log(this);
}

chai()

// output:
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [AsyncFunction: fetch],
  crypto: [Getter]
}
*/

/*
function chai(){
    let username = "hitesh";
    console.log(this.username)
}
chai()
*/

//

// Arrow Function

/*
const chai = function(){
    let username = "hitesh"
    console.log(this.username); // undefined

}
chai()
*/

/*
const chai = () => {
    let username = "hitesh"
    console.log(this.username); // undefined

}
chai()
*/

/// Arrow function
// Basic syntax:
/*
() => {}

const addTwo  =  (num1 , num2) => {
    return num1 + num2
}

console.log(addTwo(3,4)) // 7
*/

//++++++++ implicit  return
// implicit return ka matlab h mai maan leta hu aapko batana ka jarurat nhi h

/*
const addTwo = (num1, num2) => num1 +num2

console.log(addTwo(3,4)) // 7


const addTwo = (num1, num2) => (num1 +num2)
console.log(addTwo(3,4)) // 7
*/
// both above are same

/*
const  addTwo = (num1, num2) => {usernmae:"hitesh"}

console.log(addTwo(3,4)); // undefined
*/
// we cannot  return object in this way
// object ko return krne ke liye usko parenthesis me wrap krna hi hoga

const addTwo = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo(3, 4));
//{ username: 'hitesh' }
// this is correct way

const myArray = [2, 5, 3, 7, 8];

//myArray.forEach(())
