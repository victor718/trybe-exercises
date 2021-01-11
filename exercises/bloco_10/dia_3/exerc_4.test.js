// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

function in_upperCase(string) { return string.upperCase() };

function first_letter(string) { return string[0] };

function concat_string(string_1, string_2) { return `${string_1} ${string_2}` };

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

  });

  it('Para a segunda função, uma nova implementação deve retornar a última letra de uma string.', () => {
    first_letter = jest.fn().mockImplementation((string) => string[string.length - 1]);
    const l = 'VamoS Colonizar MARTE em 2024!';
    first_letter(l);

    expect(first_letter).toHaveBeenCalled();
    expect(first_letter).toHaveBeenCalledTimes(1);
    expect(first_letter).toHaveBeenCalledWith(l);
    expect(first_letter(l)).toBe('!');
  });

  it(' A terceira deve receber três strings e concatená-las.', () => {
    concat_string = jest.fn().mockImplementation((a, b, c) => `${a} ${b} ${c}`);
    const a = 'Vamos';
    const b = 'mais longe';
    const c = 'cada vez mais.';
    concat_string(a, b, c);

    expect(concat_string).toHaveBeenCalled();
    expect(concat_string).toHaveBeenCalledTimes(1);
    expect(concat_string).toHaveBeenCalledWith(a, b, c);
    expect(concat_string(a, b, c)).toBe(`${a} ${b} ${c}`); 

  })
});