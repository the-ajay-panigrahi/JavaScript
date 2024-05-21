function addTwo(num) {
  return num + 2;
}
addTwo.power = "Ajay";
// console.log(addTwo(5));
// console.log(addTwo.power);
// console.log(addTwo.prototype);

function createUser(name, age, creditScore) {
  this.name = name;
  this.age = age;
  this.creditScore = creditScore;
}

createUser.prototype.incrementScore = function () {
  this.creditScore++;
};

createUser.prototype.printMe = function () {
  console.log(
    `The user is ${this.name} and his credit score is ${this.creditScore}`
  );
};

const userOne = new createUser("Ajay", 20, 145);
const userTwo = new createUser("Dhananjay", 47, 392);
userOne.printMe();
userTwo.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
