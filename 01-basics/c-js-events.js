// JS is a single-threaded event bases language
// There is only one thread active that operates the entire application
// Blocking code blocks the entire application (!)
// JS is usually operated in an event based pattern, this means JS "waits" for events to happen
// Example: clicks on a button, requests send to a server, responses returned from a server

// JS interpreter has 3 main components: Heap, Stack, Queue + Event Loop
// Heap: Saves all active parts of an application (variables, objects, ...)
// Stack: List of operations that have to be done before the current function call can be terminated
// Queue: Event queue for all events that have to be resolved by the application: Every event consists of a function call.
// Event Loop: Operation dispatcher for all events that have been called, dispatches operations in first-in-first-out principle
// on dispatch, every event function is submitted as frame to the stack. The stack is worked on unless the stack is empty, then the
// next event gets dispatched

// Stack example
function foo(b) {
    let a = 10;
    return a + b + 11;
}

function bar(x) {
    let y = 3;
    return foo(x * y);
}

console.log(bar(7)); // Returns 42
// Stack:
// 2. foo(21)
// 1. bar(7)
// As soon as bar() is removed from stack, application is completed (unless event loop contains elements)

// Explain Stack on board
// Explain event loop on board 

// See sync blocking
for (let i = 0; i < 20000; i++) {
    console.log(i);
}

// See timing function
setTimeout(function () { console.log("Timeout!"); }, 3000);

// See timing function combined with blocking
setTimeout(function () { console.log("Timeout!"); }, 3000);
for (let i = 0; i < 20000; i++) {
    console.log(i);
}

