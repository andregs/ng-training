// duck typing

interface Human {
  name: string;
  age: number;
}

interface Pet {
  animal: string;
  name: string;
  age: number;
}

const eek = {
  animal: 'cat',
  name: 'Eek the Cat',
  age: 7,
  color: 'blue',
};

const charlie = { name: 'Charlie Brown', age: 14 };

let pet: Pet = eek;
let human: Human = charlie;

pet = charlie; // Charlie doesn't look like a Pet
human = eek; // but Eek looks like a human!

// The following classes One and Two have no relationship between each other
// but they are compatible because they have the same structure

class One {
  value: string;

  foo(a: number, b: number): string {
    this.value = a + ' & ' + b;
    return this.value;
  }
}

class Two {
  value = 'whatever';

  foo(x: number, y: number): string {
    return 'the sum is ' + (x + y);
  }
}

let weird: One;

weird = new One();
weird = new Two(); // wait... what!?

// Even though you can assign a value to a compatible type,
// you have not "changed" its type.

class Animal { name: string; }
class Employee { name: string; job: string; }
class Mary extends Employee {
  scream() {/* AAAH! */}
}

let animal: Animal;

animal = new Animal();
console.log(animal instanceof Animal); // true

animal = { name: 'foo' };
console.log(animal instanceof Animal, animal instanceof Object); // false true

animal = new Employee();
console.log(
  animal instanceof Animal,
  animal instanceof Object,
  animal instanceof Employee,
); // false true true

animal = new Mary();
console.log(
  animal instanceof Animal,
  animal instanceof Object,
  animal instanceof Employee,
  animal instanceof Mary,
); // false true true true

// examples of type guards:

function test(something: any): any {
  if (typeof something === 'number') {
    const binaryString = something.toString(2);
    return binaryString;
  } else if (something instanceof Animal) {
    something.name = 'Dog';
    something.job = 'Pee'; // animals don't have job
  } else if (something instanceof Employee) {
    something.job = 'Engineer';
    something.scream(); // employees don't screm
  } else if (something.scream) {
    something.scream(); // I may not be Mary ;)
  }
  return something;
}
