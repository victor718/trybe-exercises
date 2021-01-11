function randomDice(maxSide) {
  const random = Math.random();
  return Math.round(random * maxSides);
}

test('Testando', () => {
  randomDice = jest.fn().mockReturnValueOnce(20);
  expect(randomDice()).toBe(20);
  expect(randomDice).toHaveBeenCalled();
})