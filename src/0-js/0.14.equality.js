/*
 * This is a game!
 * You can play it by hitting F1 > Run Task > The Loose Equality Game
 *
 * I hope you like it.
 */

const prompt = require('prompt');
const colors = require("colors/safe");

console.log(colors.cyan("Let's play The Loose Equality Game!"));
console.log(colors.cyan("For each expression, say if it's true or false.\n"));

const expressions = [
  '"foo" == "foo"',
  '({ foo: "foo" }) == ({ foo: "foo" })',
  '[1, 2, 3] == [1, 2, 3]',
  '[1, 2, 3] == "1,2,3"',
  '2 == [2]',
  '0 == ""',
  '0 == "  "',
  '"  " == ""',
  'undefined == null',
  'typeof NaN == "number"',
  'NaN == false',
  'NaN == true',
  'NaN == NaN',
  '[0] == true',
  '[0] == false',
  '[] == []',
  '[] == ! []',
  '[] ? true : false',
  '[] == true ? true : false',
  '"      " ? true : false',
  '"      " == true ? true : false',
];

const schema = expressions.map((e, i) => ({
  name: '' + i,
  description: colors.cyan(`${i}. ${e}`),
  type: 'boolean',
  message: "Say true or false. It can't be easier.",
  required: true
}));

const ok = colors.green('\u2713');
const ko = colors.red('\u2717');

prompt.message = 'expression';
prompt.start();
prompt.get(schema, function (err, guesses) {
  if (err) throw err;

  console.log('\nAnswers:\n');

  let wrong = 0;
  expressions.forEach((e, i) => {
    const answer = eval(e);
    const mark = answer === guesses[i] ? ok : (wrong++, ko);
    console.log(`${mark} ${colors.cyan(e)} (it's ${answer})`);
  });

  const score = (1 - wrong / expressions.length) * 100;
  const percent = score.toFixed(2) + '%';

  let message;
  if (score >= 85) {
    message = colors.green(percent) + ' - Congratulations!';
  } else if (score >= 70) {
    message = colors.yellow(percent) + ' - You can do better.';
  } else {
    message = colors.red(percent) + " - C'mon!";
  }

  console.log('\nScore: ' + message);
  console.log('\nI hope you learned why you should always compare with === instead of ==');
  console.log('And forbid loose comparison via linter!');
  console.log('\nWhile you are here, notice that these are always falsy/else conditions:');
  console.log('false, undefined, null, 0, "", NaN');
  console.log('\nAny other value is truthy/if.');
  console.log(colors.cyan('\nThank you for playing The Loose Equality Game!'));
});
