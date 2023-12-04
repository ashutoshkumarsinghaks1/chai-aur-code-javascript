//singleton

// object literals

//const JsUser = {}

//Object.create

const mySym = Symbol("key1");

const JsUser = {
  name: "Hitesh",
  "full name ": "Hitesh Choudhary",
  [mySym]: "mykey1",                         // [mysm] => [ ] syntax for symbol
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isloggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email); //hitesh@google.com
console.log(JsUser["email"]); //hitesh@google.com
// Above these are two way to access elements lower one is preffered.

console.log(JsUser["full name "]);
console.log(JsUser[mySym]);
console.log(typeof JsUser.mySym); 

JsUser.email = "hitesh@chatgpt.com";
Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

/*outout:
{
  name: 'Hitesh',
  'full name ': 'Hitesh Choudhary',
  age: 18,
  location: 'Jaipur',
  email: 'hitesh@chatgpt.com',
  isloggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}
*/

