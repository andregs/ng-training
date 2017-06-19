// a file with an import or export expression is a module
// none of our previous files are modules, but this current file is.

export let abc = 'abc';

export const bcd = 'bcd';

export interface ExportedInterface {
  foo: string;
}

/** I am an exported class */
export class ExportedClass {

  /**
   * I test stuff
   * @param p you must pass me
   */
  test(p: ExportedInterface) {
    console.log(p);
  }
}
