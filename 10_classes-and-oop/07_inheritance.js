class User {
  constructor(userName) {
    this.userName = userName;
  }
  logMe() {
    console.log(`The user name is ${this.userName}`);
  }
}

const userOne = new User("Ajay");
console.log(userOne);
userOne.logMe();

class Teacher extends User {
  constructor(userName, userEmail, userPassword) {
    super(userName);
    this.userEmail = userEmail;
    this.userPassword = userPassword;
  }
  teacherName() {
    console.log(`The name of the teacher is ${this.userName}`);
  }
}

const instructor = new Teacher("Hitesh", "hitesh@chai.com", "1459");
console.log(instructor);
instructor.teacherName();
instructor.logMe();
userOne.logMe();
// userOne.teacherName();

console.log(userOne instanceof User);
// console.log(teacher instanceof user);
console.log(instructor instanceof Teacher);
console.log(instructor instanceof User);
