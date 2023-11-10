// Dates


//let myDate = new Date();
//console.log(myDate.toString());
// console.log(typeof myDate);  //output :object
// console.log(myDate.toISOString());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDay());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.getTime());

// let myCreatedDate = new Date(2023, 0, 23);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2023, 0, 23, 5, 3);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("01-14-2023");
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now());
// console.log(Date.now() / 1000); // but problem is it gives result in decimal
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time is`;

newDate.toLocaleString("default", {
  weekday: "long",
});
