/*
 * Welcome to this training!
 * Before you proceed, did you follow the instructions on the README file?
 * Alright, then.
 *
 * In this course I assume that you are already familiar with the basics of JavaScript.
 * But there may be some important concepts that you still don't know. Let's start with them.
 */

// STRICT MODE
// Strict mode changes previously accepted bad practices into real errors.
// E.g. mistyping a variable name does not create a new global variable.

// "use strict";

function foo() {
  bar = 'bar'; // Oops, I forgot the 'var'
}

foo();
console.log('bar =', bar);

// strict: ReferenceError: bar is not defined
// default: a global variable bar is created

// Tips:
// F5 - Execute the code (start debugging)
// shift + F5 - Stop Debug
// ctrl + shift + F5 - Restart Debug
// ctrl + shift + Y - Toggle the Debug Console
// ctrl + ' - Toggle the terminal
// ctrl + ; - Toggle line comment
