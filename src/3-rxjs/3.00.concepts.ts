// Reactive programming is programming with asynchronous data streams.

// A stream is a sequence of ongoing events ordered in time.

// Events are: 1) any value; 2) an error; 3) a completion signal.

// RxJS provides a toolbox of functions to combine, create and filter
// any of those streams.

import { Observable } from 'rxjs';

console.log('Creating an infinity stream of numbers.');

const stream = Observable.interval(2000); // 2000 === 2 seconds

console.log('Creating observers.');

function valueEvents(value: number) {
  console.log('Value:', value);
}

function errorEvents(error: any) {
  console.error('Error!', error);
}

function completionEvent() {
  console.warn('The end.');
}

console.log('Listening to the stream.');

stream.subscribe(valueEvents, errorEvents, completionEvent);

// in short:

// Observable.interval(2000)
//   .subscribe(
//     v => console.log('Value:', v),
//     e => console.error('Error!', e),
//     () => console.warn('The end.'),
//   );
