// What's "this"?

// 'use strict';

function foo() {
  this.two = 2;
  this.four = 4;
  this.sum = () => this.two + this.four;
  return 'whatever';
}

var obj = new foo(); // { two: 2, four: 4, sum: function }

console.log(obj.sum());
console.log(foo());
console.log(two, four);

// strict
// 6
// TypeError: Cannot set property 'two' of undefined

// default
// 6
// whatever
// 2 4
