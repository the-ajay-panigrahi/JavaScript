/*
    Call stack:- The call stack in JavaScript is a LIFO (Last In, First Out) structure that keeps track of currently executing functions, acting like a stack of plates in a cafeteria. New functions are added on top, and finished functions are removed from the top.
 */
function one() {
  console.log("one");
  two();
}

function two() {
  console.log("two");
  three();
}

function three() {
  console.log("three");
}

one();
