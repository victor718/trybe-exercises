const assert = require('assert');

const isValidParans = (parans) => (Array.isArray(parans) && parans.length > 0);
const greetPeople = (people) => {
  if (!isValidParans(people)) {
    return false;
  }
  let greeting = 'Hello';
  const arrayHello = [];
  for (const person in people) {
    arrayHello.push(`${greeting} ${people[person]}`);
  }
  return arrayHello;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
const actual = greetPeople(parameter);
assert.strictEqual(typeof greetPeople, 'function');
assert.ok(Array.isArray(actual));
assert.deepStrictEqual(actual, result);
assert.notDeepStrictEqual(actual, parameter);
assert.strictEqual(greetPeople({}), false);
assert.strictEqual(greetPeople([]), false);
assert.deepStrictEqual(greetPeople(['Milla']), ['Hello Milla']);

