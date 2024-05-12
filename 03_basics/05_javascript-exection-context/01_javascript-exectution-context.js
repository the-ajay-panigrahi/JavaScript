// For reference - https://youtu.be/ByhtOgF6uYM?si=RaVpdv2m7-H8iltm

/*

JavaScript Execution Context: Behind the Scenes
JSEC dictates how your JavaScript code runs and how variables and functions are accessed. Let's break it down:

1. Global Execution Context (GEC): The Stage

Imagine a theater stage. The GEC is created first, allocating memory for global variables and functions (like our addNum function).
The this keyword usually points to the browser's window object.
2. Function Execution Context (FEC): Actors Take the Stage

When you call a function (e.g., addNum(val1, val2)), a new FEC is created, inheriting from the GEC.
Think of it as actors entering the stage for their scene.
The FEC has its own memory for function arguments (like num1 and num2) and local variables (like total).
3. Code Execution: The Play Unfolds

The code inside the function executes (adding num1 and num2 to total).
The function then returns the result (the sum).
4. Cleaning Up: The Stage is Reset

Once the function returns, its FEC is no longer needed and is cleaned up, freeing up memory.
Key Points:

JavaScript is single-threaded (executes code one line at a time).
The GEC is the main stage, providing a global environment.
Each function call creates its own FEC for temporary variables and logic.
FECs inherit from the GEC and have their own local space.
Code execution happens in two phases:
Memory Allocation: Memory is reserved for variables and functions.
Execution: The actual code within the GEC or FEC is run.
Optional: Eval Execution Context (EEC)

The EEC is less common and created by the eval() function (generally discouraged due to security concerns).
Understanding JSEC helps you write well-structured and maintainable JavaScript applications!
*/
