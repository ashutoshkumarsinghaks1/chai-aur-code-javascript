/*
let a = 10;
const b = 20;
var c = 30;

console.log(a); // 10
console.log(b); // 20
console.log(c) //  30
*/
//********Scope */
//{  } // scope

/*
var c = 300
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a); // a is not defined
// console.log(b); // b is not defined 
console.log(c); // 30

// inside if is block scope 
// outside if is global scope
*/
/*
let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  console.log("Inner:", a); //Inner: 10
}
console.log(a); // 300

//Note : console me global alag h aur code environment node me alag h.
*/
//*********** Nested Scope */
/*
function one() {
  const username = "hitesh";

  function two() {
    const website = "yotube";
    console.log(username);
  }
  console.log(website) //website is not defined
  //  here comes error , isliye two() execute nhi hua.
  two()
}

one()
*/
/*
function one() {
    const username = "hitesh";
  
    function two() {
      const website = "yotube";
      console.log(username); //hitesh
    }
    //console.log(website) 
    two()
  }
  
  one()
*/

/*
function one() {
    const username = "hitesh";
  
    function two() {
      const website = "yotube";
      console.log(username); // print nothing blank
    }
    // console.log(website) 
    // two()
  }
  
  one()
*/

/*
if (true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube";
        console.log(username + website);
    }
     console.log(website);  error due to scope
}
 console.log(username) // error due to scope
*/

/*
if (true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube";
        console.log(username + website); // hitesh youtube
    }
    //  console.log(website);  error due to scope
}
//  console.log(username) 
*/

//+++++++++++++++  interesting +++++++++++++++
/*
function addone(num) {
   return num + 1  
}
// this is function
addone(5)

const addTwo = function(num){
    return num +2
}
addTwo(5)
// this is also function but also called expression
// in javascript variable can store anything 
*/

// HOISTING
console.log(addone(5)); // 6
function addone(num) {
  return num + 1;
}

console.log(addTwo(5)); //Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  return num + 2;
};
