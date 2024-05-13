// forEach method
const programmingLanguages = ["JavaScript", "Python", "C++", "Java", "Php"];

programmingLanguages.forEach(function (item) {
  //   console.log(item);
});

programmingLanguages.forEach((item) => {
  //   console.log(item);
});

function printMe(item) {
  console.log(item);
}
// programmingLanguages.forEach(undefined);
// programmingLanguages.forEach(printMe());
// programmingLanguages.forEach(printMe);

programmingLanguages.forEach((value, index, array) => {
  //   console.log(value, index, array);
});

const arrayOfObjects = [
  { fname: "Ajay", age: 20, gender: "Male" },
  { fname: "Ruchika", age: 23, gender: "Female" },
  { fname: "Arjun", age: 45, gender: "Male" },
  { fname: "Radhika", age: 25, gender: "Female" },
];

arrayOfObjects.forEach((value) => {
  console.log(value.fname);
});
