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

// it can get weirder:

class One {
  value: string;

  foo(a: number, b: number): string {
    this.value = a + ' & ' + b;
    return this.value;
  }
}

class Two {
  value: string;

  foo(x: number, y: number): string {
    return 'the sum is ' + (x + y);
  }
}

let weird: One;

weird = new One();
weird = new Two(); // wait... what!?

// classes One and Two have no relationship between each other
// but they are compatible because they have the same structure
