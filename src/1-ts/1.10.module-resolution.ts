// your modules must be resolved at
// 1. dev-time: vscode, webstorm etc.
// 2. compile-time: tsc, webpack, roollup etc.
// 3. runtime: node, browsers etc.

// this is a complex subject,
// but pay attention to these tips:

// You configure module format & resolution on tsconfig.json

// The 'classic' resolution is deprecated. Stick to 'node'.

// Sometimes (e.g. libs) is convenient to export your modules
// in additional formats.

// this is an import with a relative path
// use relative paths to import your project's modules
import { abc } from './1.08.module-exporting';

// it's relative to the current file: 1.10.module-resolution.ts

// it maches a .ts file, a .js file or a directory

// when your path matches a directory,
// the loader will look for a package.json or an index file

// these are imports with non-relative paths
// use non-relative paths to import external libs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

Observable.of(abc);

// how typescript will search for our non-relative import:
// 1. node_modules/rxjs/Observable.ts
// 2. node_modules/rxjs/Observable.d.ts <- (it matches here)
// 3. node_modules/rxjs/Observable/package.json
// 4. node_modules/rxjs/Observable/index.ts
// 5. node_modules/rxjs/Observable/index.d.ts

// node_modules is hierarchical and there's also tsx,
// so it's even more complex than that

// Modules in package.json:
// You'll have to worry about this when you distribute libs as npm packages

// node (and node-based apps like Jasmine) will search for
// a "main" key pointing to a JS file with your module
// (in this case, your module will probably be UMD or CommonJS)

// tsc will search for a "types" or "typings" key
// pointing to a TS file with your module

// webpack and rollup will search for a "module" key
// pointing to an es2015 module

// it's common to depend on JS libs without type definitions

import * as colors from 'colors/safe';

console.log(colors.yellow('some text'));

// inspect the 'colors' lib to verify that it's 100% js

// disable noImplicitAny to be able to import the module
// but notice how you get no IntelliSense

// install @types/colors as a dev-dependency and look at node_modules/@types
