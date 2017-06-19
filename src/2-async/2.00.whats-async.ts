// In JavaScript, an async operation is the one executed
// on a different tick of the Event Loop.

// I mean, operations that are executed on a future time.

// most callbacks are async, for instance:

function logStuff(stuff = 'stuff!') {
  console.log(stuff);
}

console.log("I'm gonna log stuff...");

setTimeout(logStuff, 4 * 1000); // <- passing our fn as a callback

console.log("... after 4 seconds have passed.");
console.log("Wait for it.\n");

// More examples of async operations:
// Event handlers
// HTTP Requests
// Protractor instructions
// etc.
