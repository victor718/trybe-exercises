const { expect } = require('chai');

const media = require('../src/examples/example1');
console.log(media(5))
describe('Quando a média for menor que 7', () => {
  it('retorne "reprovado"', () => {
    const resposta = media(4);

    expect(resposta).to.be.equals('reprovado');
  });
});
