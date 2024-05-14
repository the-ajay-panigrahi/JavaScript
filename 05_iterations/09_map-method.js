// map method
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const returnedOutput = myNumbers.map((num) => {
  return num + 10;
});
// console.log(returnedOutput);

// Achieving the same result with the forEach method
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const returnedNumbers = [];
numArray.forEach((num) => {
  returnedNumbers.push(num + 10);
});
// console.log(returnedNumbers);

// chaining of methods
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = numArr
  .map((num) => num * num)
  .filter((num) => num >= 50)
  .map((item) => item + 7)
  .filter((item) => item % 2 != 0);
console.log(result);
