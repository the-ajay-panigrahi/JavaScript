// Maps
const myMap = new Map();
myMap.set("name", "Ajay");
myMap.set("age", 19);
myMap.set([1, 2, 3, 4, 5], "This is an array");
myMap.set({ greet: "hello" }, "This is an object");
// console.log(myMap);

for (const [key, value] of myMap) {
  //   console.log(`${JSON.stringify(key)} : ${value}`);
}

const myObject = { greet: "hello" };
for (const key of Object.values(myObject)) {
  console.log(key);
}
