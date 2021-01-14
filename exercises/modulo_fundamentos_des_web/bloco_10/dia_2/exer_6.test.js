const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age_animal) => {
  return new Promise((resolve, reject) => {
    const result = Animals.filter(animal => animal.age === age_animal);
    if (result.length > 0) {
      resolve(result);
    }
    reject('Nenhum animal encontrado!');
  });
};

const getAnimals = (age_animal) => {
  return findAnimalByAge(age_animal);
};

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com o idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimals(2).then(animal => {
        expect(animal).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
      });
    });
  });

  describe('Quando não existe o animal com idade procurada', () => {
    test('Retorne um erro', () => {
      expect.assertions(1);
      return getAnimals(100).catch(error => 
        expect(error).toEqual('Nenhum animal encontrado!')
      );
    });
  });
  
});