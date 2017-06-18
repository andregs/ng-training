console.log('Hello, TypeScript!');

// basic types

const done: boolean = true;
const decimal: number = 6.5;
const fullName: string = 'André Gomes';

console.log(typeof done, typeof decimal, typeof fullName); // boolean number string

// typescript can guess types

const notDone = false;
const negative = -2;
const another = 'John Doe';

console.log(typeof notDone, typeof negative, typeof another); // boolean number string

// arrays are type safe too

const numbers = [1, 2, 3];
numbers.push('text');
