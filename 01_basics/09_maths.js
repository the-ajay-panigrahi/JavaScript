console.log(Math);

console.log(Math.abs(-123));
console.log(Math.abs(123));

console.log(Math.round(4.2));
console.log(Math.round(4.5));
console.log(Math.round(4.6));

console.log(Math.ceil(4.2));
console.log(Math.ceil(4.5));
console.log(Math.ceil(4.6));

console.log(Math.floor(4.2));
console.log(Math.floor(4.5));
console.log(Math.floor(4.6));

console.log(Math.min(123, 1, 2, 7, 9, 23));
console.log(Math.max(123, 1, 2, 7, 9, 23));

console.log(Math.random());
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
