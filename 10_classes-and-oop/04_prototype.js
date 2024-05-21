// let firstName = "Ajay    ";
// console.log(firstName.length);
// console.log(firstName.trim().length);
// console.log(firstName.trueLength());

let devs = ["Shiv", "Vishnu", "Brahma"];

let devsShakti = {
  Shiv: "♾️ - Destroyer",
  Vishnu: "♾️ -  Maintainer",
  Brahma: "♾️ - Creator",

  getAllDevShakti: function () {
    console.log(`${this.Shiv}+${this.Vishnu}+${this.Brahma}`);
  },
};

Object.prototype.Ajay = function () {
  console.log("Jai Shree Ram, Sankat Mochan Mahabali Hanuman Ki Jai - Ajay");
};

// devsShakti.Ajay();
// devs.Ajay();

Array.prototype.hiAjay = function () {
  console.log("My name is Ajay.");
};

// devs.hiAjay();
// devsShakti.hiAjay();

// Inheritance(Prototypal Inheritance)

const user = {
  firstName: "Ajay",
  emailId: "sample@gmail.com",
  password: "1234",
};

const teacher = {
  teachesSubject: "Computer Science",
  privilege: "Yes",

  // old syntax
  __proto__: user,
};

const teachingAssistance = {
  isAvailable: "No",
};

// console.log(teacher.teachesSubject);
// console.log(teacher.firstName);
// console.log(teacher.emailId);
// console.log(teacher.password);
// console.log(teacher);

// old syntax
// teachingAssistance.__proto__ = user;
// console.log(teachingAssistance.isAvailable);
// console.log(teachingAssistance.firstName);
// console.log(teachingAssistance.emailId);
// console.log(teachingAssistance.password);

// new/modern syntax
Object.setPrototypeOf(teachingAssistance, user);
// console.log(teachingAssistance.isAvailable);
// console.log(teachingAssistance.firstName);
// console.log(teachingAssistance.emailId);
// console.log(teachingAssistance.password);

let firstName = "Ajay    ";

// console.log(firstName.length);
// console.log(firstName.trim().length);
// console.log(firstName.trueLength());

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`);
};

firstName.trueLength();
"Ram".trueLength();
