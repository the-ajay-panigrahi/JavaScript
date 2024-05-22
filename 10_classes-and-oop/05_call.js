function setUserName(userName) {
  this.userName = userName;
  console.log("called");
}

function createUser(userName, userEmailId, userPassword) {
  //   setUserName(userName);
  setUserName.call(this, userName);
  this.userEmailId = userEmailId;
  this.userPassword = userPassword;
}

const userOne = new createUser("Ajay", "sample@gmail.com", "12345");
console.log(userOne);
