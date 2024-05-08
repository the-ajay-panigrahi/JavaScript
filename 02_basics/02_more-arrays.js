const marvelHeros = ["Ironman", "Thor", "Spiderman"];
const dcHeros = ["Superman", "Flash", "Batman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[3][0]);

const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros];
// console.log(allNewHeros);

const newArray = [1, 2, 3, 4, 5, [6, 7], 8, [9, 10, [11, 12, 13], 14], 15];
// console.log(newArray);
// const anotherNewArray = newArray.flat(2);
const anotherNewArray = newArray.flat(Infinity);
// console.log(anotherNewArray);

// console.log(Array.isArray(newArray));
// console.log(Array.isArray("Ajay"));
// console.log(Array.from("Ajay"));
// console.log(Array.isArray(Array.from("Ajay")));

// Interesting case
// console.log(Array.from({}));
// console.log(Array.from({ firstName: "Ajay" }));
// console.log(Object.keys({ firstName: "Ajay" }));
// console.log(Object.values({ firstName: "Ajay" }));
// console.log(Array.from(Object.values({ firstName: "Ajay" })));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

// console.log(Array.from(score1, score2, score3)); // error
console.log(Array.from([score1, score2, score3]));
