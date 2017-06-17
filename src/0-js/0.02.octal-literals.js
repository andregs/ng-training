// 'use strict';

var x = 008;
var y = 009;
var z = 010;

console.log(x, y, z);

// strict: SyntaxError: Octal literals are not allowed in strict mode.
// default: it logs 8 9 8

// because 01, 02, ..., 09 are decimal numbers but 010 is octal.

// Use parseInt / toString to convert from / to decimal.
// parseInt('ff', 16); // outputs 255
// (255).toString(16); // outputs 'ff'
