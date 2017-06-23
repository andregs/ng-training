import { Observable, Subscription } from 'rxjs';

// interval, take, map and concat are examples of operators

const stream0 = Observable.interval(750);
const stream1 = stream0.take(7);
const stream2 = stream1.map(n => n + 97);
const stream3 = stream2.map(n => String.fromCharCode(n));
const stream4 = stream3.map(char => {
  if (char === 'd') throw new Error('d is dumb (¬_¬)');
  return char;
});
const stream5 = stream1.concat(stream2).concat(stream3).concat(stream4);

function subscribe(stream: Observable): Subscription {
  return stream.subscribe(
    v => console.log('Value: ' + v),
    e => console.log('Oops! ' + e),
    () => console.log('The end.\n'),
  );
}

// subscribe(stream0);
subscribe(stream1);
// subscribe(stream2);
// subscribe(stream3);
// subscribe(stream4);
// subscribe(stream5);
