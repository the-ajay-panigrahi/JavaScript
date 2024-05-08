/*
 In javascript objects can be declared primarily using two ways:- 
        1) Constructor(singleton) - Object.create
        2) Object literals(multiple instances)
*/

// object literals

const uniqueSymbol = Symbol("123");

const person = {
  firstName: "Ajay",
  age: 20,
  location: "USA",
  email: "ajay2024@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Sunday", "Friday"],
  "fav quote": "Consistency is the key to success!",
  //   uniqueSymbol: Symbol("123"),
  [uniqueSymbol]: Symbol("456"),
};

// console.log(person);
// console.log(typeof person);

// console.log(person.firstName);
// console.log(person["firstName"]);

// console.log(person["fav quote"]);

// console.log(person["uniqueSymbol"], typeof person["uniqueSymbol"]); // wrong
// console.log(person[uniqueSymbol], typeof person[uniqueSymbol]);

person.location = "India";
// console.log(person);

// Object.freeze(person);
// person.firstName = "Arjun";
// console.log(person);

person.speak = function () {
  console.log("Jai Shree Ram");
};

// console.log(person);

// console.log(person.speak);
// console.log(person.speak());
// person.speak();

// let personObjectSpeakFunctionReturn = person.speak();
// console.log(personObjectSpeakFunctionReturn);

person.greet = function () {
  //   console.log(`Hello ${person.firstName}`);
  console.log(`Hello ${this.firstName}`);
};

// console.log(person);

person.greet();
