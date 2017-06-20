function makePromise(success: boolean): Promise<string> {
  return new Promise(function(resolve, reject) {
    if (success) {
      resolve("I'm lucky!");
    } else {
      reject("Oh, boy...");
    }
  });
}

function guess(): boolean {
  return Math.random() < 0.5;
}

const promise = makePromise(guess());

promise
  .then(value => console.log('Yes!', value))
  .catch(reason => console.warn('No!', reason));
