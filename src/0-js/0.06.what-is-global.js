// What's the global object?

// WARNING: this one you have to paste in your browser's dev tool (F12)

var foo = 'foo';
function bar() { return 'bar' }

console.log(foo, foo === window.foo);
console.log(bar(), bar === window.bar);

// It logs the same on both strict and default mode:
// foo true
// bar true

// On Node.js, the global object is called 'global', and
// you create a property on it by ommiting the 'var' keyword
// like this:
// asdf = 'asdf';
// console.log(asdf, global.asdf === asdf);
