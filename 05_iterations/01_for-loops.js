// for loop
for (let value = 1; value <= 10; value = value + 1) {
  //   console.log(value);
}
// console.log(value);

for (let i = 1; i <= 10; i += 1) {
  //   console.log(`Outer loop value - ${i}`);
  for (let j = 1; j <= 10; j += 1) {
    // console.log(`Inner loop value - ${j} and inner loop number - ${i}`);
  }
}

let num = 12;
for (let i = 1; i <= 10; i += 1) {
  //   console.log(`${num} x ${i} = ${num * i}`);
}

const randomArray = ["Ram", null, true, 0, Symbol("245")];
for (let index = 0; index < randomArray.length; index++) {
  //   console.log(randomArray[index]);
}

// break
for (let index = 1; index <= 20; index++) {
  if (index === 5) {
    // console.log("Detected 5");
    break;
  }
  //   console.log(`Value of index is ${index}`);
}

// continue
for (let index = 1; index <= 20; index++) {
  if (index === 5) {
    // console.log("Detected 5");
    continue;
  }
  //   console.log(`Value of index is ${index}`);
}
