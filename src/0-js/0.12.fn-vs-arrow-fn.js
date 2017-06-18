// The difference between a regular & an arrow function

function foo() { return 'foo'; }
console.log(foo()); // it logs "foo"

var foo = () => 'foo';
console.log(foo()); // it logs "foo"

// The arrow fn seems just a shorter version of the regular fn, doesn't it?
// But notice "how JS translates" the arrow function:

function foo() { return 'foo'; }
foo.bind(this);
console.log(foo());

// PS: you can manually bind a regular function's "this" to any value you want.
// However, you can't manually bind an arrow function's "this". It's ALWAYS bound to
// its parent scope's "this".

// Do you want to see it? Go back to the previous lesson and convert the regular fn to
// an arrow function and execute it.
