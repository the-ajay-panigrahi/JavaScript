"use strict"; // treat all JS code as newer version
// Defines that JavaScript code should be executed in "strict mode".

// accountName = "Savings"; // not allowed in "use strict"

// alert(2 + 8); // we are using nodejs, not browser

// console.log(3
//     +
//      3) // code readability should be high

let firstName = "Ajay"; // string
let age = 20; // number
let isLoggedIn = false; // boolean
let state; // undefined
// let state = undefined; // undefined
let temperature = null;

console.table([firstName, age, isLoggedIn, state, temperature]);

// number => limited range(generally sufficient)
// bigInt => Large integers(rarely used)
// string => "" or '' (even template literals{``})
// boolean => true/false
// null => Standalone value
// undefined => Not yet defined
// symbol => Unique

// object => {}

console.log(typeof undefined); // output => undefined
console.log(typeof null); // output => object
