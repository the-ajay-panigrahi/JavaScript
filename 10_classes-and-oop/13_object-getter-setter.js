const User = {
  _email: "ajay@ajay.in",
  _password: "1029384756",

  get email() {
    return `${this._email.toUpperCase()}`;
  },
  set email(value) {
    this._email = value;
  },

  get password() {
    return `${this._password}Ajay`;
  },
  set password(value) {
    this._password = value;
  },
};

// console.log(typeof User);

const customer = Object.create(User);
// console.log(customer);

console.log(customer.email);
console.log(customer._email);

console.log(customer.password);
console.log(customer._password);
