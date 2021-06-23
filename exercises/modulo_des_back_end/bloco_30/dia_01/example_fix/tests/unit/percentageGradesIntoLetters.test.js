// ./tests/unit/percentageGradesIntoLetters.test.js

const { expect } = require('chai');

const { percentageGradesIntoLetters } = require('../../index');

const disciplinesDict = {
  mathematics: 'matemática',
};

describe('Testando a função "percentageGradesIntoLetters"', () => {
  describe('quando a nota é maior ou igual a 0.9', () => {
    it('retorna "A"', () => {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: disciplinesDict.mathematics, grade: 0.9 },
        ],
      };

      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('A');
    });
  });

  describe('quando a nota é maior ou igual a 0.8 e menor que 0.9', () => {
    it('retorna "B"', () => {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: disciplinesDict.mathematics, grade: 0.8 },
        ],
      };

      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('B');
    });
  });

  describe('quando a nota é maior ou igual a 0.7 e menor que 0.8', () => {
    it('retorna "C"', () => {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: disciplinesDict.mathematics, grade: 0.7 },
        ],
      };

      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('C');
    });
  });

  describe('quando a nota é maior ou igual a 0.6 e menor que 0.7', () => {
    it('retorna "D"', () => {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: disciplinesDict.mathematics, grade: 0.6 },
        ],
      };

      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('D');
    });
  });

  describe('quando a nota é maior ou igual a 0.1 e menor que 0.6', () => {
    it('retorna "E"', () => {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: disciplinesDict.mathematics, grade: 0.1 },
        ],
      };

      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('E');
    });
  });

  describe('quando a nota é menor que 0.1', () => {
    it('retorna "F"', () => {
      const student = {
        name: 'Lee',
        disciplines: [
          { name: 'matemática', grade: 0.05 },
        ],
      };

      const {
        disciplines: [{ letterGrade }],
      } = percentageGradesIntoLetters(student);

      expect(letterGrade).to.be.equals('F');
    });
  });
});