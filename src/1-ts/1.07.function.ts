function oneOrTwoArgs(one: string, two?: number) {
  return one + two;
}

oneOrTwoArgs(); // not ok
oneOrTwoArgs('a'); // ok
oneOrTwoArgs('a', 2); // ok
oneOrTwoArgs('a', 2, 3); // not ok

function oneOrManyArgs(one: string, ...rest: number[]) {
  return one + rest;
}

oneOrManyArgs('ok');
oneOrManyArgs('ok', 1);
oneOrManyArgs('ok', 1, 2, 3, 4, 5, 6);
oneOrManyArgs('not ok', [1, 2, 3]);
oneOrManyArgs('ok', ...[1, 2, 3]);

// In order to overload a function, you have to:
// 1. declare many function signatures
// 2. declare a single function implementation
// 3. implementation must be compatible with the signatures
// 4. the declaration order matters to tsc

/**
 * Multiplies the given numbers.
 * @param numbers list of operands
 */
function multiply(...numbers: number[]): number;

/**
 * Repeats the given string by the given num of times
 * @param str text to repeat
 * @param times number of times to repeat
 */
function multiply(str: string, times: number): string;

function multiply(...args: any[]): string | number {
  const [first, second] = args;
  return typeof first === 'string'
    ? first.repeat(second)
    : args.reduce((a, b) => a * b);
}

let one = multiply('foo', 3); // one is string
console.log(one); // foofoofoo

let two = multiply(3, 7, 2); // two is number
console.log(two); // 42

// now play with the IntelliSense!
