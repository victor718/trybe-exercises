const exam_4 = require('./exem_4');

describe('Teste função: ', () => {
  it('Número aleatorio: ', () => {
    exam_4.isDivisible = jest.fn().mockReturnValueOnce(true);
    expect(exam_4.isDivisible()).toBe(true);
    expect(exam_4.isDivisible).toHaveBeenCalled();
    expect(exam_4.isDivisible).toHaveBeenCalledTimes(1);
  });
});