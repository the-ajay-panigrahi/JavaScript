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
  console.log(`Inner sample value - ${sampleValue}`);
}
console.log(`Outer sample value - ${sampleValue}`);
