export function play(): Promise<void> {
  return Promise.resolve(Math.floor(Math.random() * 10))
    .then(val => {
      if (val < 3) throw new Error('too small');
      return {
        num: val,
        str: val % 2 === 0 ? 'even' : 'odd'
      };
    })
    .catch(reason => {
      console.warn('Oh noes! ' + reason);
      return { num: 42, str: 'even' };
    })
    .then(res => {
      console.log('number', res.num, 'is', res.str);
    });
}

play().then(play).then(play).then(play);

console.log('Is this printed before/during/after the promise chain?');

// 'then' accepts a second argument which is an error handler,
// but forget about it!
// reason: it's not called when 'then' itself fails.
