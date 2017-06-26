import * as Rx from 'rxjs';

// Let's create a small app based on RxJS!

// Browse to http://reactivex.io/rxjs/
// inspect the h1 body title and notice that it doesn't react to clicks
// <h1 class="rx-title">...</h1>

// Our app is going to make that title reactive.
// It'll react differently when you trigger a single click, a double
// click or a multiple click.

// Enter all the following code in the dev console (F12),
// then try clicking the title a few times.

// After that, uncomment the operators one-by-one and replay
// to understand how they work.

let previous;
let click$;
const title = document.querySelector('h1.rx-title');

// click$.unsubscribe(); // to stop the app

previous = 0;
click$ = Rx.Observable
  // ----c-c------------c------------------c-c-c-------------------->
  .fromEvent(title, 'click')

  // ----c-c------------c------------------c-c-c-------------------->
  // ----1-1------------1------------------1-1-1-------------------->
  // .mapTo(1)

  // ----1-1--------------1----------------1-1-1-------------------->
  // ----1-2--------------3----------------4-5-6-------------------->
  // .scan((a, b) => a + b)

  // ----1-2--------------3----------------4-5-6-------------------->
  // ----------2---------------3-------------------6---------------->
  // .debounceTime(300)

  // ----------2---------------3-------------------6---------------->
  // ----------2---------------1-------------------3---------------->
  /*.map(total => {
    const current = total - previous;
    previous = total;
    return current;
  })*/

  // ----------2---------------1-------------------3---------------->
  // ----Double-Click----Single-Click-----SO1-SO2-SO3-SO4-SO5-SO6--->
  /*.mergeMap(clicks => {
    if (clicks === 1) return Rx.Observable.of('Single Click');
    if (clicks === 2) return Rx.Observable.of('Double Click');

    const base = 'https://api.stackexchange.com/2.2/search';
    const params = 'site=stackoverflow&tagged=RxJS&order=desc&sort=creation';

    // Subject is an Observable that lets you manually
    // trigger events (value / error / completion).
    const subject = new Rx.Subject();

    const xhr = new XMLHttpRequest();
    xhr.open('GET', base + '?' + params);
    xhr.onload = () => {
      const json = JSON.parse(xhr.response);
      json.items.forEach(question => {
        const item = { title: question.title, tags: question.tags };
        subject.next(item); // emits a value event
      });
      subject.complete(); // emits completion
    };
    xhr.send();

    return subject.asObservable();
  })*/

  // ----Double-Click----Single-Click-----SO1-SO2-SO3-SO4-SO5-SO6--->
  // ----Double-Click----Single-Click-----SO1-SO2-SO3-|->
  // .take(6)

  // nothing happens before you subscribe
  .subscribe(
    v => console.log('Emitted value', v),
    e => console.error('Oops!', e),
    () => console.warn('The end.'),
  );
