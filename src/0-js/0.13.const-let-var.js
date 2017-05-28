// Differences between const, let & var:

const arr = ['a', 'b'];
arr.push('c');

for (var i=0; i < arr.length; i++);

for (let j=0; j < arr.length; j++);

console.log(arr); // it logs ['a', 'b', 'c']
console.log(i); // it logs 3
console.log(j); // ReferenceError: j is not defined

// let and const declares variables within the scope of the block.
// var declares variables within the scope of the function.
// notice that you can modify the constant arr, but you cannot assign (=) it to a different value.
