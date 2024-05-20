const accountId = 346547;
let accountEmail = "abp@gmail.com";

var accountPassword = "68065";
/*
Prefer not to use var, because of issue in block scope and functional scope.

Prefer to use "let" or "const" instead of "var"

"var" has scoping issues that can lead to bugs.
*/

accountCity = "Jaipur";
let accountState;

// accountId = 123456; // TypeError: Assignment to constant variable
// the above is not allowed
// console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

accountEmail = "ajay@gmail.com";
accountPassword = "765374";
accountCity = "Mumbai";
accountState = "Goa";

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
