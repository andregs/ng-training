// While whe're talking about hoisting, take a look at
// the difference between functions and function expressions

foo();
function foo() { console.log('foo'); }

bar();
var bar = function() { console.log('bar'); }

// it logs
// foo
// TypeError: bar is not a function

// After hoisting:

// var bar;
// function foo{...}
// foo();
// bar();
// bar = function(){...}
