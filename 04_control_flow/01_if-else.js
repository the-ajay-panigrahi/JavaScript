// if-else statement
const firstName = "Ajay";
let age = 20;

if (age >= 18) {
  console.log(`${firstName} is old enough to vote!`);
} else {
  console.log(`${firstName} is not old enough to vote yet.`);
}

/* 
    =>One-liner syntax (not recommended).

    =>This code is not recommended because it can be difficult to read and understand.

    =>It's better to use separate lines for readability.

 */
if (true) console.log("yes"), console.log("done");

// else-if statement

if (false) {
  console.log("Option 1");
} else if (false) {
  console.log("Option 2");
} else if (true) {
  console.log("Option 3");
} else {
  console.log("Default option");
}

// Nested if-else statement

let gymEligibleAge = 16;

if (age >= gymEligibleAge) {
  if (age >= 18) {
    console.log(`${firstName} is eligible to vote and go to the gym!`);
  } else {
    console.log(
      `${firstName} is eligible to go to the gym but not to vote yet.`
    );
  }
} else {
  console.log(`${firstName} is not old enough to vote or go to the gym yet.`);
}
