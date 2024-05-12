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

console.log(false == 0);
console.log(false === 0);
console.log("\n");

console.log(false == "");
console.log(false === "");
console.log("\n");

console.log(0 == "");
console.log(0 === "");
console.log("\n");
