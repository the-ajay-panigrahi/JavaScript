// "this" keyword refers to the current context (in JavaScript)
// this keyword refers to an object.
const user = {
  userName: "Ajay",
  age: 20,
  welcomeMessage: function () {
    console.log(`${this.userName}, welcome to website`);
    console.log(this);
  },
};
// user.welcomeMessage();
// user.userName = "Arjun";
// user.welcomeMessage();

// browser's global object => window
// console.log(this); // Node.js's global object => {}

function sample() {
  let userName = "Ajay";
  console.log(this);
  console.log(this.userName);
}
// sample();

// const value = function random() {
//   return 1;
// };

const value = () => {
  return 1;
};
// console.log(value());

// const addTwoNumber = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwoNumber = (num1, num2) => num1 + num2;

// const addTwoNumber = (num1, num2) => (num1 + num2); // heavily used in React.js

// const addTwoNumber = (num1, num2) => { user: "Ajay", age: 20 }; // wrong

const addTwoNumber = (num1, num2) => ({ user: "Ajay", age: 20 });

console.log(addTwoNumber(2, 5));
