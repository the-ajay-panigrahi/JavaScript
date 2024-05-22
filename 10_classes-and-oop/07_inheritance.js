class user {
  constructor(userName) {
    this.userName = userName;
  }
  logMe() {
    console.log(`The user name is ${this.userName}`);
  }
}

const userOne = new user("Ajay");
console.log(userOne);
userOne.logMe();

class teacher extends user {
  constructor(userName, userEmail, userPassword) {
    super(userName);
    this.userEmail = userEmail;
    this.userPassword = userPassword;
  }
  teacherName() {
    console.log(`The name of the teacher is ${this.userName}`);
  }
}

const instructor = new teacher("Hitesh", "hitesh@chai.com", "1459");
console.log(instructor);
instructor.teacherName();
instructor.logMe();
userOne.logMe();
// userOne.teacherName();

console.log(userOne instanceof user);
// console.log(teacher instanceof user);
console.log(instructor instanceof teacher);
console.log(instructor instanceof user);
