console.log('Hello, TypeScript!');

let done: boolean = true;
let decimal: number = 6.5;
let fullName: string = 'André Gomes';

console.log(typeof done, typeof decimal, typeof fullName);

// typescript can guess types

let notDone = false;
let negative = -2;
let another = 'John Doe';

console.log(typeof notDone, typeof negative, typeof another);