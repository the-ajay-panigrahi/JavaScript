// ************************ Conversions  ************************

// Number
let score = 23;
// console.log(score, typeof score);

score = "23";
// console.log(score, typeof score);

let valueInNumber = Number(score);
// console.log(valueInNumber, typeof valueInNumber);

score = "er93wert";
// console.log(score, typeof score);

valueInNumber = Number(score);
// console.log(valueInNumber, typeof valueInNumber);

// console.log(typeof NaN); // output => number

score = null;
// console.log(score, typeof score);

valueInNumber = Number(score);
// console.log(valueInNumber, typeof valueInNumber);

score = undefined;
// console.log(score, typeof score);

valueInNumber = Number(score);
// console.log(valueInNumber, typeof valueInNumber);

score = true;
// console.log(score, typeof score);

valueInNumber = Number(score);
// console.log(valueInNumber, typeof valueInNumber);

score = false;
// console.log(score, typeof score);

valueInNumber = Number(score);
// console.log(valueInNumber, typeof valueInNumber);

score = "Ajay";
// console.log(score, typeof score);

valueInNumber = Number(score);
// console.log(valueInNumber, typeof valueInNumber);

// "23" => 23
// "er93wert" => NaN
// null => 0
// undefined => NaN
// true => 1, false =>0
// "Ajay" => NaN

// Boolean
let isLoggedIn = 1;
// console.log(isLoggedIn, typeof isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn);

isLoggedIn = 0;
// console.log(isLoggedIn, typeof isLoggedIn);

booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn);

isLoggedIn = "";
// console.log(isLoggedIn, typeof isLoggedIn);

booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn);

isLoggedIn = "Ajay";
// console.log(isLoggedIn, typeof isLoggedIn);

booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn, typeof booleanIsLoggedIn);

// 1 => true, 0 => false
// "" => false
// "Ajay" => true

// String
let someNumber = 123;
// console.log(someNumber, typeof someNumber);

let stringNumber = String(someNumber);
// console.log(stringNumber, typeof stringNumber);

// ************************ Operations  ************************

let value = 45;
// console.log(value, typeof value);

let negValue = -value;
// console.log(negValue, typeof negValue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 ** 2);
// console.log(3 % 2);

let firstName = "Ajay";
let middleName = "B";
let lastName = "Panigrahi";
let fullName = firstName + " " + middleName + " " + lastName;
// console.log(fullName);

// console.log(firstName - lastName); // output => NaN

// console.log("1" + 2); // output => 12
// console.log(1 + "2"); // output => 12
// console.log("1" + "2"); // output => 12
// console.log("1" + 2 + 2); // output => 122
// console.log(1 + 2 + "2"); // output => 32

// console.log(2%3*4/3_4**5); // messy code
// console.log(((2 % 3) * 4) / 3_4 ** 5); // readable code
// always use parenthesis for operations like above

// console.log(+true); // output => 1
// console.log(-true); // output => -1
// console.log(+false); // output => 0
// console.log(-false); // output => -0
// console.log(+""); // output => 0
// console.log(-""); // output => -0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 9;
// console.log(num1, num2, num3); // not good
// focus on code readability

let gameCounter = 100;
console.log(gameCounter);

gameCounter++;
console.log(gameCounter);

++gameCounter;
console.log(gameCounter);
