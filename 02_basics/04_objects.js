/*
const tinderUser = new Object(); // singleton object
console.log(tinderUser); // {}

const tinderUser = {};
console.log(tinderUser); // {} // non singleton object
 both way return same value
*/

/*

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

console.log(tinderUser) //{ id: '123abc', name: 'Sammy', isLoggedIn: false }
*/

/*
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudary",
    },
  },
};

console.log(regularUser.fullname.userfullname.firstname);
*/

// merging two or more object
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 };
// console.log(obj3);
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a','4': 'b' } }
// this not  the correct way.

//********** using asign *****
//const obj3 = Object.assign(obj1, obj2);
//console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//const obj3 = Object.assign({}, obj1, obj2, obj4);
//console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

//******  using spread operator****** */

const obj3 = { ...obj1, ...obj2 };
//console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// ***NOte: this is simpler way

//********* Array of object */
const users = [
  {
    id: 1,
    email: "h@gamail.com",
  },
  {
    id: 1,
    email: "h@gamail.com",
  },
  {
    id: 1,
    email: "h@gamail.com",
  },
  {
    id: 1,
    email: "h@gamail.com",
  },
  {
    id: 1,
    email: "h@gamail.com",
  },
  {
    id: 1,
    email: "h@gamail.com",
  },
  {
    id: 1,
    email: "h@gamail.com",
  },
  {
    id: 1,
    email: "h@gamail.com",
  },
  {
    id: 1,
    email: "h@gamail.com",
  },
  {
    id: 1,
    email: "h@gamail.com",
  },
  {
    id: 1,
    email: "h@gamail.com",
  },
  {
    id: 1,
    email: "h@gamail.com",
  },
  {
    id: 1,
    email: "h@gamail.com",
  },
];
users[1].email;

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
//console.log(tinderUser);

console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
// gives keys
// Note : type of keys is Array
console.log(Object.values(tinderUser)); //[ '123abc', 'Sammy', false ]
// gives values

console.log(Object.entries(tinderUser));
// Array inside array
//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // true
console.log(tinderUser.hasOwnProperty("isLogged")); //false
