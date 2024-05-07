// () => parentheses
// [] => brackets/square brackets
// {} => braces/curly braces

let array = [
  1,
  "Ajay",
  true,
  23,
  null,
  "random",
  undefined,
  123,
  Symbol("12345"),
];

// console.log(array);
// console.log(typeof array); // output: object
// console.log(array[1]);
// console.log(array[array.length - 1]);

let arr = [1, 2, 3, 4, 5];
// console.log(arr);

// let myArray = new Array();
// console.log(myArray);

let myArray = new Array("Ajay", 1, null, true);
// console.log(myArray);
// console.log(typeof myArray); // output: object

// Array Methods
// console.log(arr);
// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.unshift(-1, 0);
// console.log(arr);
// arr.shift();
// console.log(arr);

// console.log(arr.includes(4));
// console.log(arr.includes(6));

arr = [12, 67, 0, 2900, 7];
// console.log(arr);
// console.log(arr.indexOf(0));

let newArray = arr.join();
// console.log(arr, typeof arr);
// console.log(newArray, typeof newArray);
// newArray = arr.join("-");
// console.log(newArray, typeof newArray);
// newArray = arr.join(" ");
// console.log(newArray, typeof newArray);

// slice
let anotherArray = [1, 2, 3, 4, 5];
console.log(anotherArray);
let slicedArrayReturn = anotherArray.slice(1, 4);
console.log(anotherArray);
console.log(slicedArrayReturn);

console.log("\n");

// splice
let arrayOne = [1, 2, 3, 4, 5];
console.log(arrayOne);
let splicedArrayReturn = arrayOne.splice(1, 3);
console.log(arrayOne);
console.log(splicedArrayReturn);
