interface Jumper {
  height: number;
  jump(): void;
}

// a class can extend another class and implement many interfaces
// nothing new here.

class Athlete implements Jumper {
  height = 50;
  jump() { console.log("I jumped!"); }
  run() { console.log("I also run!"); }
}

// an interface can extend another interface or a class!
// in this case, it inherits the members of the class
// but not their implementations.

interface Guy extends Athlete {
  doGuyStuff(params?: any): string;
}

let peter: Guy;
peter = { // must implement all members
  height: 45,
  jump() { console.log("Peter jumps!"); },
  run() { console.log("Peter runs!"); },
  doGuyStuff() { return 'done'; },
};

// a class can also implement another class!
// in this case, it must implement all members of the interface

class SpecialAthlete implements Athlete {
  height = 150; // comment me
  run() { console.log("Special run!"); } // comment me

  jump() {
    super.jump(); // we are not extending
    console.log("Special jump!");
  }
}
