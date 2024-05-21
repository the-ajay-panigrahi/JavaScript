// object literal
const user = {
  name: "Ajay",
  age: 20,
  isLoggedIn: "false",
  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`UserName: ${this.name}`);
    // console.log(this);
  },
};

// console.log(user.name);
user.getUserDetails();

// console.log(this);

function allUser(userHeight, userWeight, userStatus) {
  this.userHeight = userHeight;
  this.userWeight = userWeight;
  this.userStatus = userStatus;

  this.greeting = function () {
    console.log(`User's statud: ${this.userStatus}`);
  };

  return this;
}

const userOne = new allUser(170, 80, "Online");
const userTwo = new allUser(173, 65, "Offline");
// console.log(userOne);
// console.log(userTwo);

// console.log(userOne.constructor);

console.log(userOne instanceof allUser);
console.log(userOne instanceof Object);

/*
new keyword:
 - whenever you use new keyword an empty object is created which is called instance.
 - an constructor function is called due to new keyword internally.
 - this keyword injects all the arguments in these.
 - and finally we get all the values inside the object
 */
