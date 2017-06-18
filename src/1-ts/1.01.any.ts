// you can cheat with 'any'

let anything: any;
anything = 5;
anything = 'text';
anything = { foo: 'bar' };

let yes: boolean;
yes = true;
yes = 'not ok';
yes = 'ok now' as any;

const text: any = "string, but tsc doesn't know it";

// textSize is any and we get no IntelliSense =/
const textSize = text.lengthl; // damn typo

// proper is number and IntelliSense is back =D
const proper = (text as string).length;

console.log(typeof text, typeof textSize, typeof proper); // string number number