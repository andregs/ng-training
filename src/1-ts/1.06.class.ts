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

// there's also 'static', 'abstract' and 'super'
// with no big surprises for a Java programmer

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

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set fullName(full: string) {
    [this.first, this.last] = full.split(' ');
  }
}

const johnDoe = new Name('John', 'Doe');
console.log(johnDoe.fullName); // John Doe

let spiderman = new Name('Peter', 'wrong');
spiderman.fullName = 'Peter Parker';
console.log(spiderman.first === 'Peter', spiderman.last === 'Parker'); // true true

// remember "this"?

class Handler {
  info: string;
  onClickOne(e: Event) { this.info = e.target['value']; }
  onClickTwo = (e: Event) => { this.info = e.target['value']; };
}

let handler = new Handler();
let button: HTMLButtonElement = new HTMLButtonElement();

// 'this' is undefined when the button calls our handler
button.addEventListener('click', handler.onClickOne); // error!

// 'this' is now properly bound
button.addEventListener('click', handler.onClickOne.bind(handler)); // ok
button.addEventListener('click', handler.onClickTwo); // ok

// onClickOne is a method and onClickTwo is an attribute.
// One instance of the arrow function is created per object of type Handler.
// On the other hand the method is created once and attached to Handler's prototype.
// Methods are shared between all objects of type Handler.
