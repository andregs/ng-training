// You cannot assign to non-writable properties.

// 'use strict';

var obj = {
  get zero(){ return 0 }
};

console.log('before', obj.zero);

obj.zero = 1;

console.log('after', obj.zero);

// strict: TypeError: Cannot set property zero

// default: assignment is ignored. It logs:
// before 0
// after 0
