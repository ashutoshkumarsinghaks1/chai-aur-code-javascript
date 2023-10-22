const accountId = 144553;
let accountEmail = "ashutosh@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

//accountId = 2; not allowed

accountEmail = "hchc@gmail.com";
accountPassword = "21211212";
accountCity = "Bengaluru";
console.log(accountId);
/*
prefer not to use var
because of issue in block scope and functional scope.
// javacript me ; lagaiye na lagaiye apki marji.

*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
