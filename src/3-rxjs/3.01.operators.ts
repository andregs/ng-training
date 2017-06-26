import { Observable, Subscription } from 'rxjs';

// An Operator is a function which creates a new Observable
// based on the current Observable.

// Interval, take, map and concat are examples of operators.

// Static operators are available in the Observable class.
// Instance operators are available in an Observable object.

const stream0 = Observable.interval(750);
const stream1 = stream0.take(7);
const stream2 = stream1.map(n => n + 97);
const stream3 = stream2.map(n => String.fromCharCode(n));
const stream4 = stream3.map(char => {
  if (char === 'd') throw new Error('d is dumb (¬_¬)');
  return char;
});
const stream5 = stream1.concat(stream2).concat(stream3).concat(stream4);

function subscribe(stream: Observable<any>): Subscription {
  return stream.subscribe(
    v => console.log('Value: ' + v),
    e => console.log('Oops! ' + e),
    () => console.log('The end.\n'),
  );
}

// Choose a stream and execute this file to see its output:

// subscribe(stream0);
subscribe(stream1);
// subscribe(stream2);
// subscribe(stream3);
// subscribe(stream4);
// subscribe(stream5);
