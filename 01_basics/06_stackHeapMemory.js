/*
 We have two types of memory-
    - Stack Memeory(Primitive) => copy
    - Heap Memeory(Non-Primitive) => reference
*/

let firstName = "Hitesh";
let anotherFirstName = firstName;
console.log(firstName, anotherFirstName);
anotherFirstName = "Ajay";
console.log(firstName, anotherFirstName);

let person1 = {
  fName: "Ajay",
  lName: "Panigrahi",
  age: 20,
};
let person2 = person1;
console.log(person1, person2);
person2.age = "∞";
console.log(person1, person2);
