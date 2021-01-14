// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

let { randomNumber } = require('./exerc_1');

describe('crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.',   () => {
  it('Requisito 1: ', () => {
    randomNumber = jest.fn().mockImplementation((a, b) => a / b);
    randomNumber(6, 2);

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(6, 2);
    expect(randomNumber(6, 2)).toBe(3);

    randomNumber(10, 2);

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(3);
    expect(randomNumber).toHaveBeenCalledWith(10, 2);
    expect(randomNumber(10, 2)).toBe(5);

  });
});