// Crie uma função que faça requisição para a api dog pictures .
// Mocke a requisição e crie dois testes. 
// O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". 
// O segundo deve interpretar que a requisição falhou e ter como valor "request failed". 
// Crie todos os testes que achar necessário.

function request_api_dog() {
  return new Promise((resolve, reject) => {
    fetch('https://dog.ceo/api/breeds/list/all');
  });
};

describe('Teste request api', () => {
  it('should fetch', () => {
    request_api_dog = jest.fn().mockReturnValue('request sucess');
    expect(request_api_dog()).toBe('request sucess');
    expect(request_api_dog).toHaveBeenCalled();
    expect(request_api_dog).toHaveBeenCalledTimes(1);
  });

  it('request fails', () => {
    request_api_dog = jest.fn().mockReturnValue('request failed');
    expect(request_api_dog()).toBe('request failed');
    expect(request_api_dog).toHaveBeenCalled();
    expect(request_api_dog).toHaveBeenCalledTimes(1);
  })
});