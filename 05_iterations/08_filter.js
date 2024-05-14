// const programmingLanguages = ["JavaScript", "Python", "C++", "Java", "Php"];
// const returnedLanguages = programmingLanguages.forEach((item) => {
//   //   console.log(item);
//   return item;
// });
// console.log(returnedLanguages);

// filters
const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const returnedNumbers = numberArray.filter((number) => number > 4);
console.log(returnedNumbers);

// Achieving the same result with the forEach method
const myNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumberArray = [];
myNumberArray.forEach((number) => {
  if (number > 4) {
    newNumberArray.push(number);
  }
});
console.log(newNumberArray);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// The user is looking for books in the history genre
let userBooks = books.filter((book) => book.genre === "History");
// console.log(userBooks);

// The user is interested in books published after 1995 (including 1995)
userBooks = books.filter((book) => book.publish >= 1995);
// console.log(userBooks);

// User seeks history books published from 1995 onwards
userBooks = books.filter(
  (book) => book.publish >= 1995 && book.genre === "History"
);
console.log(userBooks);
