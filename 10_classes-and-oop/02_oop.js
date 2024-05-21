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
