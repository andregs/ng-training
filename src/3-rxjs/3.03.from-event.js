import * as Rx from 'rxjs';

// browse to http://reactivex.io/rxjs/
// inspect the h1 body title and notice that it doesn't react to clicks
// <h1 class="rx-title">...</h1>

// type in the dev console:

const title = document.querySelector('h1.rx-title');

Rx.Observable
  .fromEvent(title, 'click')
  .subscribe(
    v => console.log('Clicked!', v),
    e => console.error('Oops!', e),
    () => console.warn('The end.'),
  );

// now try clicking the title!
