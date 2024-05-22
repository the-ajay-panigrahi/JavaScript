// class User {
//   constructor(userName, userEmailId, userPassword) {
//     this.userName = userName;
//     this.userEmailId = userEmailId;
//     this.userPassword = userPassword;
//   }
//   encryptPassword() {
//     return `@${this.userPassword}@Ajay`;
//   }
//   capitalizeUserName() {
//     return `${this.userName.toUpperCase()}`;
//   }
// }

// const sample = new User("Arjun", "dhananjaya@gmail.com", "12345");
// console.log(sample);
// console.log(sample.encryptPassword());
// console.log(sample.capitalizeUserName());

// behind the scenes
function User(userName, userEmailId, userPassword) {
  this.userName = userName;
  this.userEmailId = userEmailId;
  this.userPassword = userPassword;
}

User.prototype.encryptPassword = function () {
  return `@${this.userPassword}@Ajay`;
};

User.prototype.capitalizeUserName = function () {
  return `${this.userName.toUpperCase()}`;
};

const random = new User("Arjun", "dhananjaya@gmail.com", "12345");
console.log(random);
console.log(random.encryptPassword());
console.log(random.capitalizeUserName());
