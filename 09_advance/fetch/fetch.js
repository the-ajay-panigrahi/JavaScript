/*

    => fetch() - The fetch() method starts the process of fetching a resource from a server.

    => fetch is a built-in method in JavaScript.

    => The fetch() method returns a Promise.

    => fetch() is an ES6 feature.

    => Unlike XMLHttpRequest that is a callback-based API.

    => It is a logical way to fetch resources asynchronously across the network.

*/

// async function consumePromise() {
//   try {
//     const response = await fetch(
//       "https://api.github.com/users/hiteshchoudhary"
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   }
// }

// consumePromise();

fetch("https://api.github.com/users/hiteshchoudhary")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(`Error: ${error}`);
  });
