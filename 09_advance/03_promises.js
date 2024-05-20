/*

      A promise is an object that says the completion/failure of an asyncrounous operation/task.

      promise has three states:
                1) pending - initial state, neither fulfilled nor rejected.
                2) fulfilled/resolved - meaning that the operation was completed successfully.
                3) rejected - meaning that the operation failed.

      .then() and .catch() are methods associated with promises.
      .then() handles the resolved value.
      .catch() handles the rejected value.

     async/await is a syntactic sugar for writing asynchronous code in a more synchronous-looking style.

     async function declares a function that can perform asynchronous operations and ultimately returns a promise.

     await is used to pause execution until a promise is resolved.
     
*/
const promiseOne = new Promise(function (resolve, reject) {
  /*
    Do an async task
        -  DataBase Calls
        -  Cryptography
        -  Network Calls
  */

  setTimeout(function () {
    // console.log("Asyncronous task completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  //   console.log("Promise consumed");
});
// console.log(promiseOne);

new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log("Asyncronous task 2");
    resolve();
  }, 1000);
}).then(function () {
  //   console.log("Asyncronous task 2 completed");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ userName: "Ajay", age: 20 });
  }, 1000);
});

promiseThree.then(function (data) {
  //   console.log(data);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      //   resolve({ userName: "Ajay", password: "12345" });
    } else {
      //   reject("ERROR: Something went wrong");
    }
  }, 1000);
})
  .then(function (user) {
    console.log(user);
    // return user.userName;
  })
  .then(function (userName) {
    // console.log(userName);
  })
  .catch(function (error) {
    // console.log(error);
  })
  .finally(function () {
    // console.log("The promise is either resolved or rejected");
  });

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "Dhananjay", password: "54321" });
    } else {
      reject("WARNING: Something went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    // console.log(response);
  } catch (error) {
    // console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(response);
//     // console.log(typeof response);
//     const data = await response.json();
//     console.log(data);
//     // console.log(typeof data);
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   }
// }
// getAllUsers();

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
