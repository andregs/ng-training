// What's "this"?

// This is the previous example as interpreted by JavaScript.

// 'use strict';

var obj;

function foo() {
  console.log(`this === obj is ${ this === obj }, obj is '${ obj }'`);
  console.log(`this === global is ${ this === global }`);
}

function bar() {
  this.foo = foo;
}

console.log("foo()");
foo();

console.log("obj.foo()");
obj = new bar();
obj.foo();

// default
// foo()
// this === obj is false, obj is 'undefined'
// this === global is true
// obj.foo()
// this === obj is true, obj is '[object Object]'
// this === global is false

// strict
// foo()
// this === obj is true, obj is 'undefined'
// this === global is false
// obj.foo()
// this === obj is true, obj is '[object Object]'
// this === global is false
