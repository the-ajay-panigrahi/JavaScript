// "this" keyword refers to the current context (in JavaScript)

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
