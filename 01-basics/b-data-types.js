// Every JS value is an object (!) - except for undefined (!)
let string = "This is a string";
let number = 0; // Float and Int is the same type for JS
let boolean = true;
let object = {};
let array = [];
let funct = function () {};
let undef = undefined;
let nll = null;

// Use typeof to let JS define every variables object type
typeof string; // Returns "string"
typeof number; // Returns "number"
typeof boolean; // Returns "boolean"
typeof object; // Returns "object"
typeof array; // Returns "object" (!)
typeof funct; // Returns "function"
typeof undef; // Returns "undefined"
typeof nll; // Returns "object" (!)
typeof typeof boolean; // Returns "string"

// Every JS object supports some basic methods, you can call
// Run console.log({}) in Browser console to see prototype methods
// Examples: .toString()
"This is a string".toString(); // Returns "This is a string"
(0).toString(); // Returns "0" / brackets are required because of possible float val (see 0.0.toString())
0.0.toString(); // Returns "0"
true.toString(); // Returns "true"
({}).toString(); // Returns "[object Object]"
[].toString(); // Returns ""
funct.toString(); // Returns "function () {}"
funct.toString.toString(); // Returns "function toString() { [native code] }"
undef.toString() // Throws TypeError: Cannot read property 'toString' of undefined (!)
nll.toString(); // Throws TypeError: Cannot read property 'toString' of null (!)

// Re-run for .constructor
"This is a string".constructor // Returns ƒ String() { [native code] }

// JS is an object-oriented prototype-based scripting language
// Prototype-based: No Classes (unlike Java), new objects are not created from a class, they are clones from an prototype object
const MyClass = function() {};
MyClass.prototype = {
    a: "This is a test",
    setA: function(value) {
        this.a = value;
    },
    getA: function () {
        return this.a;
    }
};
const obj = new MyClass();
// Inspect object using console.get(), look into prototype

obj.a // Returns "This is a test"
obj.a = "This is another test";
obj.getA(); // Returns "This is another test"
obj.setA("Another one");
obj.a; // Returns "Another one";