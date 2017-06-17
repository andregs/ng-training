// 'use strict';

undefined = 5; // same for 'eval'
console.log(undefined);

// strict: TypeError: Cannot assign to read only property 'undefined'

// default (current browsers): it logs undefined
// default (old browsers): it logs 5
