// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
// console.log(Math.PI);
Math.PI = 3;
// console.log(Math.PI);

const noteBook = {
  brandName: "classMate",
  price: 115,
  isAvailable: true,
  distribution: function () {
    console.log("Not available in your region.");
  },
};

noteBook.brandName = "JavaScript";
// console.log(noteBook);

// console.log(Object.getOwnPropertyDescriptor(noteBook, "brandName"));

Object.defineProperty(noteBook, "brandName", {
  writable: false,
  enumerable: false,
  //   configurable: false,
});

noteBook.brandName = "classMate";
noteBook.price = "free";
// console.log(noteBook);
// console.log(Object.getOwnPropertyDescriptor(noteBook, "brandName"));

// for (const key of Object.keys(noteBook)) {
//   console.log(`${key} : ${noteBook[key]}`);
// }

// for (const value of Object.values(noteBook)) {
//   console.log(`${value}`);
// }

for (const [key, value] of Object.entries(noteBook)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
