function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return `${this._email.toUpperCase()}`;
      //   return `${this._email.toUpperCase()}`;
    },
    set: function (value) {
      this._email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return `${this._password}Ajay`;
    },
    set: function (value) {
      this._password = value;
    },
  });
}

// console.log(typeof User);

const customer = new User("ajay@ajay.in", "1029384756");
// console.log(customer);

console.log(customer.email);
console.log(customer._email);

console.log(customer.password);
console.log(customer._password);
