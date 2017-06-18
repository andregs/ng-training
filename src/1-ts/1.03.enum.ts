// what about enums?

enum Color { Red, Green, Blue }

const green: Color = Color.Green;

console.log(green); // 1

// Red=0 Green=1 Blue=2

enum Options { Seven = 7, Two = 2, Foo = 'foo' } // only numbers :(

const label = Options[2];
const value = Options.Two;

console.log(label, value, Options[label], Options[value]); // Two 2 2 Two

let color: Color;
color = Color.Red;
color = 3413124; // surprise! =/
