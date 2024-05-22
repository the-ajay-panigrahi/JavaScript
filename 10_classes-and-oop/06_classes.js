// class user {
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

// const sample = new user("Arjun", "dhananjaya@gmail.com", "12345");
// console.log(sample);
// console.log(sample.encryptPassword());
// console.log(sample.capitalizeUserName());

// behind the scenes
function user(userName, userEmailId, userPassword) {
  this.userName = userName;
  this.userEmailId = userEmailId;
  this.userPassword = userPassword;
}

user.prototype.encryptPassword = function () {
  return `@${this.userPassword}@Ajay`;
};

user.prototype.capitalizeUserName = function () {
  return `${this.userName.toUpperCase()}`;
};

const sample = new user("Arjun", "dhananjaya@gmail.com", "12345");
console.log(sample);
console.log(sample.encryptPassword());
console.log(sample.capitalizeUserName());
