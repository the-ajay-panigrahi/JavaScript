/*
  Immediately Invoked Function Expressions (IIFEs)

  They are used to:
    1) Immediately invoke/run/execute a function.
    2) Avoid problems due to pollution of the global scope.
*/

// ()()
(function dataBaseConnection() {
  // Named IIFE
  console.log(`DB CONNECTED - 1`);
})();

((firstName) => {
  // Unnamed IIFE
  console.log(`DB CONNECTED - 2 BY ${firstName.toUpperCase()}`);
})("Ajay");

/*
 NOTE:-
        When writing two or more IIFEs together, remember to end all IIFEs with a semicolon (;),
        otherwise you cannot run the next IIFE, and you will get an error.
*/
