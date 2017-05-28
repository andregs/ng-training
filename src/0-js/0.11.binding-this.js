// What's "this"?

// Did you know that you can manually bind "this"?

function foo() {
  console.log(this + 7);
}

var bar = foo.bind(3);

bar(); // it logs 10
