// reduce method
const numberArray = [1, 2, 3, 4, 5];
const initialValue = 0;

// const result = numberArray.reduce(function (acc, currval) {
//   console.log(`acc: ${acc} currval: ${currval}`);
//   return acc + currval;
// }, initialValue);

// const result = numberArray.reduce((acc, currval) => {
//   return acc + currval;
// }, initialValue);

// const result = numberArray.reduce(
//   (acc, currval) => acc + currval,
//   initialValue
// );

const result = numberArray.reduce((acc, currval) => acc + currval, 0);

// console.log(result);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const totalPrice = shoppingCart.reduce(
  (accumulator, item) => accumulator + item.price,
  0
);
console.log(totalPrice);
