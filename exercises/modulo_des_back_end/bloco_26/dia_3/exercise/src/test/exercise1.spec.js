const { expect } = require('chai');

const typeNumber = require('../exercise1');

describe('Verifica se "typeNumber" é uma função', () => {
  it("A resposta deve ser function", () => {
    expect('function').to.be.equal(typeof typeNumber);
  });
});

describe('Verifica a função typeNumber', () => {
  describe('Número negativo é passado por parâmetro', () => {
    it('Retorno esperado é uma string com a palavra "negativo"', () => {
      const results = typeNumber(-3);
      expect('negativo').to.be.equal(results);
    });   
  });
  
  describe('Número positivo é passado por parâmetro', () => {
    it('Retorno esperado é uma string com a palavra "positivo"', () => {
      const results = typeNumber(5);
      expect('positivo').to.be.equal(results);
    });
  });

  describe('Número 0 é passado por parâmetro', () => {
    it('Retorno esperado é uma string com a palavra "neutro"', () => {
      const results = typeNumber(0);
      expect('neutro').to.be.equal(results);
    });
  });

  describe('Quando for passado por parâmetro, array, objeto, string e etc...', () => {
    it('Retorno esperado é uma string', () => {
      const params = "125sd";
      const expected = `Não é um número!!! [ ${ params } | ${ typeof params } ]`
      const results = typeNumber(params);
      expect(expected).to.be.equal(results);
    });

    it('Retorno esperado é uma string', () => {
      const params = { number: 1, nome: 'Fulano' }
      const expected = `Não é um número!!! [ ${ params } | ${ typeof params } ]`;
      const results = typeNumber(params);
      expect(expected).to.be.equal(results);
    });

    it('Retorno esperado é uma string', () => {
      const params = undefined;
      const expected = `Não é um número!!! [ ${ params } | ${ typeof params } ]`;
      const results = typeNumber();
      expect(expected).to.be.equal(results);
    })
  })
});
