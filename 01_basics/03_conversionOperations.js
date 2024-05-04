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
