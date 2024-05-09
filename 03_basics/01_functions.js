// function definition
function sayMyName() {
  console.log("A");
  console.log("J");
  console.log("A");
  console.log("Y");
}

// function reference
sayMyName;

// function call
// sayMyName();

// **Placeholders** for the values received in function body are called parameters
function addTwoNumbers(num1, num2) {
  return num1 + num2;
  console.log("Ajay");
}

// Values **passed** during function call are called arguments
// console.log(addTwoNumbers(2, 7));

// function loginUserMessage(userName) {
//   if (userName === undefined) {
//     console.log("Enter a valid user name!");
//     return;
//   }
//   console.log(`${userName} just logged in`);
// }

// or

// function loginUserMessage(userName) {
//   if (!userName) {
//     console.log("Enter a valid user name!");
//     return;
//   }
//   console.log(`${userName} just logged in`);
// }

// or(with default parameter values)

function loginUserMessage(userName = "Ram") {
  if (!userName) {
    console.log("Enter a valid user name!");
    return;
  }
  console.log(`${userName} just logged in`);
}

// loginUserMessage();
// loginUserMessage("Ajay");
