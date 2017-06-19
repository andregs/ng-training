// you can import only what you need
import { ExportedClass, abc } from "./1.08.module-exporting";

const instance = new ExportedClass();

instance.test({ foo: abc });

abc = 'cba'; // imported vars are read-only

// you can also import stuff under a namespace
import * as foo from './1.08.module-exporting';

console.log(foo.abc); // play with IntelliSense

// you can also rename imported stuff
import { ExportedInterface as SomethingElse } from "./1.08.module-exporting";

let asdf: SomethingElse;
asdf = { foo: 'asdf', bar: 'bar' };

/** no name collision here */
export interface ExportedInterface {
  ok: true;
}

// you can also import the node.js way
// but this format is not compatible with es2015 modules
import nodeStyle = require('./1.08.module-exporting');
console.log(nodeStyle.bcd);

// the following file is not a module
// so the "import" is actually an "execute" call.
// you can only "import" non-module files this way
import './1.00.hello';
