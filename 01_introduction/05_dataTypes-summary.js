/* 
    In JavaScript, datatypes are categorized into two types: 
    primitives (called by value) and reference/non-primitive (called by reference). 
    These categories are based on how the data is stored and accessed in the memory.

    In programming, some languages like JavaScript (JS) are dynamic. This means the type of data a variable holds (numbers, text, etc.) is figured out when the program runs, not when you write it. This makes JS flexible but can also lead to hidden errors.

    Primitive(call by value) - 7 types
       - number
       - bigInt
       - boolean
       - string
       - symbol
       - null
       - undefined
    
    Non-Primitive/Reference(call by reference)
       - Array
       - Object
       - Function
 */

// Primitive(call by value)

// number
let number = 23;
console.log(number, typeof number);

// bigInt
let bigNumber = 123456789101112131415n;
console.log(bigNumber, typeof bigNumber);

// boolean
let isLoggedIn = true;
console.log(isLoggedIn, typeof isLoggedIn);

// string
let firstName = "Ajay";
console.log(firstName, typeof firstName);

// symbol
let id = Symbol("12345");
let anotherId = Symbol("12345");
console.log(id, typeof id);
console.log(anotherId, typeof anotherId);
console.log(id == anotherId);
console.log(id === anotherId);

// null
let temperature = null;
console.log(temperature, typeof temperature);

// undefined
let riceCount = undefined;
console.log(riceCount, typeof riceCount);

// Non-Primitive/Reference(call by reference)

// Array
let fruits = ["apple", "banana", "orange", "grapes"];
console.log("Array =>", fruits, typeof fruits);

// Object
let person = {
  fName: "Ajay",
  lName: "Panigrahi",
  age: 20,
};
console.log("Object =>", person, typeof person);

// Function
let print = function () {
  console.log("Hi");
};
print();
// console.log(typeof print); // function ... can also be called as function object
