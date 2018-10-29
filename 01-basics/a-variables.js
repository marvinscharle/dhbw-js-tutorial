// Basic commands
// Variable declaration

// Legacy declaration using "var"
var a = "Hello World";

// Variables are not statically typed
a = 0;
a = 1.0;
a = false;
a = "Good night";

// Re-initialization of a also works but is bad style
var a = "Good morning";

// Declare global variable (not recommended at all)
function setGlobalVar() {
    mySuperGlobalVar = "Hello World";
}
function setLocalVar() {
    var myLocalVar = "Hello World";
}
setGlobalVar();
setLocalVar();
console.log(mySuperGlobalVar); // Returns "Hello World"
console.log(myLocalVar); // Throws error (ReferenceError: myLocalVar is not defined)

// Modern initialization
// let keyword - high-level: works the same as var
let b = "Hello World";
b = 0;
b = 1.0;
b = false;
b = "Good night";

// Re-initialization of let does not work
let b = "Good morning"; // Throws an error (SyntaxError: Identifier 'b' has already been declared)

// Let is block-scoped
// Example using var
var example1a = true;
if (example1a == true) {
    var example1b = "This is a test";
}
console.log(example1b); // Returns "This is a test"

// Example using let
let example2a = true;
if (example2a == true) {
    let example2b = "This is a test";
}
console.log(example2b); // Throws an error (ReferenceError: example2b is not defined)

// const keyword
const c = "Hello World";
c = 0; // Throws an error: (TypeError: Assignment to constant variable.)
const d; // Initialization without value impossible (SyntaxError: Missing initializer in const declaration)

// Dos and Dont's
// DO:
// - Use let and const instead of var (helps you keep the code clean and understandable)
// - Prefer using const
// DONT:
// - Re-assign variable with different data type (althoug you could)
// - Declare global variables 