// You cannot set properties on primitive values.

// "use strict";

var foo = 'foo';
foo.bar = 'bar';

console.log(foo, foo.bar);

// strict: TypeError: Cannot create property 'bar' on string 'foo'
// default: it logs 'foo undefined' (assignment is ignored)
