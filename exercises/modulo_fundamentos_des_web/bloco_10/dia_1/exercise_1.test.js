const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz } = require('./exercise_1')

describe('Requisito 1 teste funcao sum', () => {
  it('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
    expect(10).toEqual(sum(5, 5));
  });

  it ('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(9).toEqual(sum(4, 5));
  });

  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(0).toEqual(0, 0);
  });

  it('Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)', () => {
    expect(() => {
      sum(4, '5');
    }).toThrowError(new Error('parameters must be numbers'));
  });
});

describe('Requisito 1 teste funcao myRemove', () => {

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect([1,2,4]).toEqual(myRemove([1, 2, 3, 4], 3));
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expected = myRemove([1, 2, 3, 4], 3);
    expect(expected).not.toContain(3);
  });

  it('Verifique se o array passado por parâmetro não sofreu alteraçõe', () => {
    const arr = [6, 7, 8, 9];
    myRemove(arr, 7);
    expect([6, 7, 8, 9]).toEqual(arr);
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5));
  });

});

describe('Requisito 1 teste funcao myRemoveWithoutCopy', () => {
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const new_Arr = [1, 2, 3, 4];
    expect([1, 2, 4]).toEqual(myRemoveWithoutCopy(new_Arr, 3));
  });

  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    const new_Arr = [1, 2, 3, 4];
    myRemoveWithoutCopy(new_Arr, 3);
    expect(new_Arr).not.toContain(3);
  });

  it('Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações', () => {
    const new_Arr = [1, 2, 3, 4];
    myRemoveWithoutCopy(new_Arr, 3);
    expect(new_Arr).not.toContain(3);
  });
  
  it('Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const new_Arr = [1, 2, 3, 4];
    expect(new_Arr).toEqual(myRemoveWithoutCopy(new_Arr, 5));
  });
});

describe('Requisito 1 teste funcao myFizzBuzz', () => {
  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect('fizzbuzz').toBe(myFizzBuzz(15));
  });

  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect('fizz').toBe(myFizzBuzz(9));
  });

  it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect('buzz').toBe(myFizzBuzz(20));
  });

  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(17).toBe(myFizzBuzz(17));
  });

  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(false).toBe(myFizzBuzz('foo'));
  });

});