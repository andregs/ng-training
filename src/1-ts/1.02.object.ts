// objects are type safe too

let john = { name: 'john', age: 35 };

john.alive = true; // 'alive' does not exist on john
john.age = 'old'; // 'old' is not a number

// an interface is the most powerfull way to describe an object literal

interface Person {
  name: string;
  age: number | 'old' | 'young';
  alive?: boolean; // alive is optional
}

let person: Person;

person = { name: 'john' }; // not ok, 'age' is mandatory
person = { name: 'john', age: 35 };

person.alive = true;
person.age = 'old';
person.age = 7;
person.age = 'adult'; // not ok, 'adult' is not a valid age
person.size = 2; // not ok, there's no size on the interface
