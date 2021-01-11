// Utilizando as mesmas funções do exercício anterior,
// repita a implementação para a primeira função. 
// Após repetir a implementação, restaure a 
// implementação original e crie os testes necessários para validar.

function in_upperCase(string) { return string.upperCase() };

describe('Teste com mock ', () => {
  it(`Faça uma nova implementação para a primeira função,
  mas agora ela deve retornar a string em caixa baixa.`, () => {
    in_upperCase = jest.fn().mockImplementation((string) => string.toLowerCase());
    const l = 'VamoS Colonizar MARTE em 2024!';
    in_upperCase(l);

    expect(in_upperCase).toHaveBeenCalled();
    expect(in_upperCase).toHaveBeenCalledTimes(1);
    expect(in_upperCase).toHaveBeenCalledWith(l);
    expect(in_upperCase(l)).toBe('vamos colonizar marte em 2024!');

    in_upperCase.mockReset();

    
    in_upperCase = jest.fn().mockReturnValue('VAMOS COLONIZAR MARTE EM 2024!');
    in_upperCase(l);
    expect(in_upperCase).toHaveBeenCalled();
    expect(in_upperCase).toHaveBeenCalledTimes(1);
    expect(in_upperCase).toHaveBeenCalledWith(l);
    expect(in_upperCase(l)).toBe('VAMOS COLONIZAR MARTE EM 2024!');

  });
});