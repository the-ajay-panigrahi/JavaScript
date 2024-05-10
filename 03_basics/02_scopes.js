const a = 10;
let b = 20;
var c = 30;

// console.log(`const: ${a}`);
// console.log(`let: ${b}`);
// console.log(`var: ${c}`);

// below if-else is block scoped and whatever we wrote outside is global scope.
if (true) {
  const a1 = 10;
  let b1 = 20;
  var c1 = 30;
}
// console.log(`Inside - const: ${a1}`);
// console.log(`Inside - let: ${b1}`);
// console.log(`Inside - var: ${c1}`);

let sampleValue = 1;
if (true) {
  let sampleValue = 2;
  // console.log(`Inner sample value - ${sampleValue}`);
}
// console.log(`Outer sample value - ${sampleValue}`);

function one() {
  const firstName = "Ajay";
  function two() {
    const lastName = "Panigrahi";
    console.log(firstName);
  }
  // console.log(lastName);
  two();
}

// one();

if (true) {
  const userName = "Ajay";
  if (userName === "Ajay") {
    const websiteName = "Stack Overflow";
    // console.log(`${userName}'s ${websiteName}`);
  }
  // console.log(websiteName);
}

// console.log(userName);

console.log(`Plus one value: ${addOne(5)}`);
function addOne(num) {
  return num + 1;
}

// code written below is related to hoisting concept
// console.log(`Plus two value: ${addTwo(5)}`); // ReferenceError: Cannot access 'addTwo' before initialization

// Function expression
const addTwo = function (num) {
  return num + 2;
};
console.log(`Plus two value: ${addTwo(5)}`);
