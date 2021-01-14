const searchEmployee = require('./searchEmployee');

describe('Teste a funcao searchEmployee', () => {
  it('Caso o id não conste no quadro de funcionários, a funcção retornar o erro ID não identificada', () => {
    expect('ID não identificado').toBe(searchEmployee('5678-232', 'firstName'));
  });

  it('Se a informação acessada não existir, a função deve retornar o erro Informação indisponível', () => {
    expect('Informação indisponível').toBe(searchEmployee('5569-4', 'name'));
  });

  it('Verifique se a chamada searchEmployee("1256-4", "lastName") retorna "Bezos"', () => {
    expect('Bezos').toBe(searchEmployee('1256-4', 'lastName'));
  });

  it('Verifique se a chamada searchEmployee("9852-2-2", "firstName") retorna "Jeff"', () => {
    expect('Jeff').toBe(searchEmployee('9852-2-2', 'firstName'));
  });

  it('Verifique se a chamada searchEmployee("4678-2", "specialities") retorna ["Backend"] ', () => {
    expect(["Backend"]).toEqual(searchEmployee('4678-2', 'specialities'));
  });

});