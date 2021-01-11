const { encode, decode } = require('./exercise_2');

describe('Requisito 2 teste funcao encode e decode', () => {
  it('Teste se encode e decode são funções', () => {
    expect('function').toBe(typeof encode);
    expect('function').toBe(typeof decode);
  });

  it('Para funcao encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () =>{
    expect('1 2 3 4 5').toBe(encode('a e i o u'));
  });

  it('Decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect('a e i o u').toBe(decode('1 2 3 4 5'));
  });

  it('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect('b, d, c, k, t, s').toBe(encode('b, d, c, k, t, s'));
    expect('0, 8, 76, 9').toBe(decode('0, 8, 76, 9'));
  })

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    const length = 'Good morning'.length;
    expect(length).toBe(encode('Good morning').length);
  });
});