// Immediate  Invoked function Expression (IIFE)

/*
function chai(){
    console.log(`DB CONNECTED`); // DB CONNECTED
}

chai() 
*/

// iife

// function ke definition ke bahar parenthesis laga do
//( function definition)
/*
(function chai (){
    console.log(`DB CONNECTED`); // DB CONNECTED
})()
*/
// SYNTAX:
//()()

// note: global scope ke pollution se problem hoti h kai baar , to us global scope ke variable  ya koi declaration ko hatane ke liye iife ka use krte hai.

// kya hum niche diye gye function ko arrow ke tarah likh skte h ? bilkul likh skte h
// (function chai (){
//     console.log(`DB CONNECTED`); // DB CONNECTED
// })()

(function chai() {
  console.log(`DB CONNECTED`); // DB CONNECTED
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`); // DB CONNECTED TWO hitesh
})('hitesh');


