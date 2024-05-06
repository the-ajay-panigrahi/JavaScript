const firstName = "Ajay";
// console.log(firstName, typeof firstName);
// console.log(firstName[0]);
// console.log(firstName[1]);
// console.log(firstName.__proto__);

const repositoryCount = 101;
// console.log(
//   "Hello my name is " +
//     firstName +
//     " and my repository count is " +
//     repositoryCount +
//     "."
// );

// String Interpolation
// console.log(
//   `Hello my name is ${firstName} and my repository count is ${repositoryCount}.`
// );

const gameName = new String("Ajay");
// console.log(gameName, typeof gameName);

// console.log(firstName == gameName);
// console.log(firstName === gameName);

// console.log(gameName[0]);
// console.log(gameName[1]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(0));
// console.log(gameName.charAt(1));
// console.log(gameName.charAt(2));
// console.log(gameName.charAt(3));

// console.log(gameName.indexOf("y"));

// const randomString = gameName.substring(-4, 3);
const randomString = gameName.substring(0, 3);
// console.log(randomString);

const anotherRandomString = gameName.slice(0, 4);
// const anotherRandomString = gameName.slice(-4, 4);
// console.log(anotherRandomString);

const newString = "    Ajay    ";
// console.log(newString);
// console.log(newString.trimStart());
// console.log(newString.trimEnd());
// console.log(newString.trim());

const url = "https://ajay.com/ajay%20panigrahi";
// console.log(url);
// console.log(url.replace("%20", "-"));
// console.log(url.includes("ajay"));

const anotherNewString = "ajay is reading a book";
// console.log(anotherNewString.split(" "));

// const stringOne = anotherNewString.concat(url);
const stringOne = anotherNewString.concat(" hi, hello .. ", url);
console.log(stringOne);
