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

// The "..." syntax is used in JavaScript.
// Depending on the context, it's called the rest or spread operator.
// In this case, we will call "..." as rest operator.

function calculateCartPrice(value1, value2, ...remainingPart) {
  console.log(typeof remainingPart);
  return remainingPart;
}

// console.log(calculateCartPrice(200, 954, 600, 13245, 10, 4933));

const userObject = {
  userName: "Ajay",
  age: 20,
  isLoggedIn: true,
  status: "offline",
};

function handleObject(anyObject) {
  console.log(
    `The user's name is ${anyObject.userName} and his age is ${anyObject.age}. He's loggedin status is ${anyObject.isLoggedIn} and he is ${anyObject.status}.`
  );
}

// handleObject(userObject);
// handleObject({
//   userName: "Arjun",
//   age: 37,
//   isLoggedIn: false,
//   status: "N/A",
// });

const myArray = [100, "got it - 1", 300, 400, 500, 600, 700];
function returnArraySecondValue(thisArray) {
  return thisArray[1];
}
// console.log(returnArraySecondValue(myArray));
console.log(
  returnArraySecondValue([100, "got it - 2", 300, 400, 500, 600, 700])
);
