// for-in loops
const myObject = {
  firstName: "Ajay",
  age: 20,
  isLoggedIn: true,
  status: "offline",
};

for (const key in myObject) {
  //   console.log(`${key}(key) :- ${myObject[key]}(value)`);
}

const myArray = ["Ram", 123, true, "Ajay", null, undefined, 197, "Arjun"];
for (const key in myArray) {
  console.log(`${key}(key) :- ${myArray[key]}(value)`);
}

// const myMap = new Map();
// myMap.set("name", "Ajay");
// myMap.set("age", 19);
// for (const key in myMap) {
//   console.log(key);
// }
