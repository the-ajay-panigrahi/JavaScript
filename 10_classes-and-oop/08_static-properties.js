class User {
  constructor(userName) {
    this.userName = userName;
  }
  logMe() {
    console.log(`The user name is ${this.userName}.`);
  }
  static userId() {
    console.log(`${Math.floor(Math.random() * 100 + 1)}-id`);
  }
}

const student = new User("Ajay");
console.log(student);
student.logMe();
// student.userId();

class Teacher extends User {
  constructor(teacherName, email) {
    super(teacherName);
    this.email = email;
  }
}

const instructor = new Teacher("Hitesh", "hitesh@chai.com");
console.log(instructor);
instructor.logMe();
// instructor.userId();
