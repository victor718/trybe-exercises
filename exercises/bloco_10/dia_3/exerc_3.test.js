// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

let { randomNumber } = require('./exerc_1');

describe('crie uma nova implementação que receba três parâmetros e retorne sua multiplicação.', () => {
  it('Teste 1: ', () => {
    randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
    randomNumber(2, 2, 2);

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(2, 2, 2);
    expect(randomNumber(2, 2, 2)).toBe(8);

    expect(randomNumber).toHaveBeenCalledTimes(2);

    randomNumber(2, 0, 1);

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(3);
    expect(randomNumber).toHaveBeenCalledWith(2, 0, 1);
    expect(randomNumber(2, 0, 1)).toBe(0);

    // resetando o mock
    randomNumber.mockReset();
    
    randomNumber = jest.fn().mockImplementation(a => a * 2);
    randomNumber(2);

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(2);
    expect(randomNumber(2)).toBe(4);

  });
});