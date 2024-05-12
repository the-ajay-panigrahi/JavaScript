/*
     falsy values - false, 0, -0, 0n, "", null, undefined, NaN
     truthy values(All values except for falsy values are considered truthy) - "0", "false", " ", [], {}, function(){}
 */

if (function () {}) {
  //   console.log("executed");
}

let array = [1, 2, 3, 4, 5];
// array = [];
if (array.length > 0) {
  //   console.log(`${array} has ${array.length} elements.`);
} else {
  console.log(`Empty array []`);
}

let object = { firstName: "Ajay", age: 20 };
// object = {};
if (Object.keys(object).length > 0) {
  //   console.log(
  //     `${JSON.stringify(object)} has ${Object.keys(object).length} elements.`
  //   );
} else {
  console.log(`Empty object {}`);
}

// console.log(false == 0);
// console.log(false === 0);
// console.log("\n");

// console.log(false == "");
// console.log(false === "");
// console.log("\n");

// console.log(0 == "");
// console.log(0 === "");
// console.log("\n");

/*
    Nullish Coalescing Operator (??) :- null / undefined
        => The nullish coalescing (??) operator is a logical operator.
        => It returns its right-hand side operand when its left-hand side operand is null 
           or undefined, and otherwise returns its left-hand side operand.
*/

let val1;
val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;
// console.log(val1);

// Ternary Operator
// condition ? true : false;
let age = 20;
age >= 18 ? console.log("Adult") : console.log("Child");
