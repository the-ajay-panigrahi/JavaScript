// lexical scoping
function outer() {
  let firstName = "Ajay";
  function inner() {
    console.log(firstName);
  }
  inner();
}
outer();
