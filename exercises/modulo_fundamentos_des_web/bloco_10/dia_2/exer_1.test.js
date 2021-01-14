// const { it } = require("@jest/globals");

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

describe('Requisito 1', () => {
  it('transforma as letras de uma palavra em letras maiúsculas.', (done) => {
    expect.assertions(1);
    const callback = (str) => {
      expect(str).toBe('CYBERPUNK 2077!');
      done();
    }
    uppercase('CyberPunk 2077!', callback);
  });
});