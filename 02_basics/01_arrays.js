// Arrays
// []=> bracket , ()=> parenthesis , {} =>braces
// const myArr = []
// const myArr = [0,1,2,3,4,true,"Ashutosh"]
// const myArr = [0,1,2,3,4,5]
// const myArr = [7, 4, 5, 6, true];
// console.log(myArr[0]); //7
// console.log(myArr[3]);//6
// console.log(myArr[1]);//4
// console.log(myArr[2]);//5
// console.log(myArr[4]);//true

// const myArr = [0, 1, 2, 3, 4, 5];
// const myHeroes = ["Shaktiman", "IronMan"];

// const myArr2 = new Array(1, 2, 3, 4);

// Array Methods
/*
const myArr = [0, 1, 2, 3, 4, 5];
myArr.push(6);
console.log(myArr); //[0,1,2,3,4,5,6]

myArr.push(7);
console.log(myArr); //[0,1,2,3,4,5,6,7]

myArr.pop(); //in pop we dont  give parameter
console.log(myArr); //[0,1,2,3,4,5,6] pop will simply remove last element

myArr.unshift(0);
console.log(myArr); //[0,0,1,2,3,4,5,6]  unshift will simply add new element at the beginning of array

myArr.unshift(9);
console.log(myArr); //[9,0,0,1,2,3,4,5,6]  unshift will simply add new element at the beginning of array

myArr.shift(); // in shift we dont give parameter
console.log(myArr); //[0,0,1,2,3,4,5,6]

console.log(myArr.includes(9)); //flase
console.log(myArr.indexOf(9)); //-1 as 9 is not there in array

const newArr = myArr.join();
console.log(myArr); //[0,0,1,2,3,4,5,6] => array
console.log(newArr); //0,0,1,2,3,4,5,6  => string
console.log(typeof newArr);  // string

*/
// slice , splice

const myArr = [0, 1, 2, 3, 4, 5];
console.log("A", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2);
