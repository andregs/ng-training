// What's "this"?

// WARNING: lots of stuff being used before declaration here.
// The next example puts everything in order. Let's compare them side-by-side.

// 'use strict';

console.log("foo()");
foo();

function foo() {
  console.log(`this === obj is ${ this === obj }, obj is '${ obj }'`);
  console.log(`this === global is ${ this === global }`);
}

console.log("obj.foo()");
var obj = new bar();
obj.foo();

function bar() {
  this.foo = foo;
}
