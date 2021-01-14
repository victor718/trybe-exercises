const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


function studentAverage(students, grades) {
  // escreva seu código aqui
  const notMed = grades.reduce((ac, value) => {
    let n = value.reduce((acc, nota) => (acc + nota));
    ac.push(n / 5)
    return ac;
  }, [])
  let medAluno = []
  students.forEach((el, index) => {
    let aluno = {};
    aluno['name'] = el;
    aluno['average'] = notMed[index];
    medAluno.push(aluno);
  });
  return medAluno;
}
// studentAverage(students, grades)
const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(students, grades), expected);