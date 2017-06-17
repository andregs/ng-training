// "use strict";

function foo (x, x) {
  console.log('arg =', x);
}

foo('a', 'b');

// strict: SyntaxError: Duplicate parameter name not allowed in this context
// default: it logs arg = b
