// AND & OR operators

var foo; // declared, but undefined.

// Everybody knows that:

// && expressions return true if both operands are truthy.
// || expressions return true if any operand is truthy.

// Right?

// ...

// WRONG!

// && returns the first falsy value or the last truthy value.
// || returns the first truthy value or the last falsy.

console.log(0 && '' && null); // 0 (first falsy)
console.log(0 || '' || null); // null (last falsy)
console.log('android' && 'iOS'); // 'iOS' (last truthy)
console.log('android' || 'iOS'); // 'android' (first truthy)

// that's why you'll see things like:
if (foo && foo.bar()) {
  // to avoid errors like "cannot read property bar of undefined"
}
