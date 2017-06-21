export async function play(): Promise<void> {
  let res: { num: number, str: string };
  try {
    const val = await Math.floor(Math.random() * 10);
    if (val < 3) throw new Error('too small');
    res = {
      num: val,
      str: val % 2 === 0 ? 'even' : 'odd'
    };
  } catch (e) {
    console.warn('Oh noes! ' + e);
    res = { num: 42, str: 'even' };
  }
  console.log('number', res.num, 'is', res.str);
}

play().then(play).then(play).then(play);

console.log('Is this printed before/during/after the promise chain?');
// What if we remove the "await" at line #4?
