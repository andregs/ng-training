// access modifiers

class Foo {
  /*public*/ prop1: number; // by default

  /** accessible only in this class */
  private prop2: number;

  /** accessible only in this class + subclasses */
  protected prop3: number;

  /** I can get a value here */
  readonly prop4: number = 4;

  /** readonlies can also be assigned in the constructor fn */
  readonly prop5: number;

  constructor() {
    this.prop5 = 5; // readonly ok
  }

  foo() {
    this.prop1 = 1; // ok
    this.prop2 = 2; // ok
    this.prop3 = 3; // ok
    this.prop4 = 4; // readonly not ok!
  }
}

class Bar extends Foo {
  bar() {
    console.log("I can see public", this.prop1);
    console.log("I can't see private", this.prop2);
    console.log("I can see protected", this.prop3);
  }
}

// getters & setters

class Name {

  /** it's handy to declare properties like this: */
  constructor(
    public first: string,
    public last: string,
  ) {
    // not needed:
    // this.first = first;
    // this.last = last;
  }

  get fullName() { return `${this.first} ${this.last}`; }
}

const johnDoe = new Name('John', 'Doe');
console.log(johnDoe.fullName); // John Doe
johnDoe.fullName = 'Santa Claus'; // we have no setter yet

class Name2 extends Name {
  set fullName(full: string) {
    [this.first, this.last] = full.split(' ');
  }
}

let spiderman = new Name2('Peter', 'wrong');
spiderman.fullName = 'Peter Parker';
console.log(spiderman.first === 'Peter', spiderman.last === 'Parker');

// there's also 'static', 'abstract' and 'super'
// with no big surprises for a Java programmer
