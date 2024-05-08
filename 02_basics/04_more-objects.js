const user1 = new Object(); // singleton object
// console.log(user1, typeof user1);

const user2 = {}; // non singleton object
// console.log(user2, typeof user2);

user2.firstName = "Ajay";
user2.age = 20;
user2.isLoggedIn = true;
user2.id = "uf93ngrh122";
user2.status = "offline";

// console.log(user2);

const user = {
  "email id": "randomUser@gmail.com",
  "user full name": {
    "full name": {
      firstName: "Ajay",
      lastName: "Panigrahi",
    },
  },
};

// console.log(user);
// console.log(user["user full name"]);
// console.log(user["user full name"]["full name"]);
// console.log(user["user full name"]["full name"].firstName);

// another concept - optional chaining(?)
// console.log(user["user full name"]["full name"]?.firstName);

const object1 = { firstName_1: "Ajay", lastName_1: "Panigrahi" };
const object2 = { firstName_2: "Vijay", lastName_2: "Kumar" };
const object3 = { firstName_3: "Ruchika", lastName_3: "Das" };

// console.log(object1);
// const combinedObject = Object.assign(object1, object2, object3);
const combinedObject = Object.assign({}, object1, object2, object3);
// console.log(combinedObject);
// console.log(object1);

const anotherCombinedObject = { ...object1, ...object2, ...object3 };
// console.log(anotherCombinedObject);

const allUser = [
  {
    id: 1,
    email: "a@gmail.com",
  },
  {
    id: 2,
    email: "ap@gmail.com",
  },
  {
    id: 3,
    email: "abp@gmail.com",
  },
];

// console.log(allUser[2]);
// console.log(allUser[2].id);
// console.log(allUser[2].email);

// console.log(user2);

// console.log(Object.keys(user2));
// console.log(Object.values(user2));
// console.log(Object.entries(user2));

// console.log(user2.hasOwnProperty("firstName"));
// console.log(user2.hasOwnProperty("isStudent"));

// Object de-structuring
const sampleObject = {
  firstName: "Ajay",
  age: 20,
};

// console.log(sampleObject);

// console.log(sampleObject.firstName);

/*
    instead of doing sampleObject.firstName again and again...
    we will de-structure the object using the below syntax.
    It's just a syntactical sugar!
*/

// const { firstName } = sampleObject;
// console.log(firstName);

const { firstName: naam } = sampleObject;
console.log(naam);
