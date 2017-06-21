import { wait } from "./2.03.evil-plan-es2015";

// hiding an async behavior inside of a sync function

function save(data: { name: string }): void {
  // this fn post http data to be saved on DB
  wait(4).then(_ => {
    throw new Error('Something went wrong while saving ' + data.name);
  });
}

try {
  const user = { name: 'John', age: 22 };
  save(user);
  console.log(`Success!, Let's use ${user.name}'s data.`);
} catch (e) {
  console.log("Disaster recovery!", e);
}

// This is the most common noob async mistake I see out there.

// Please, do not hide an async behaviour in a sync function.

// As a rule of thumb, everytime you touch an async code, make
// sure to return an async value, so that you don't lose control
// of the async behavior.

// Please, write a fix to that snippet here:
