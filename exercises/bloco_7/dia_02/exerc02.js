const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// Crie uma função para adicionar o turno da manhã na lesson2. 
// Essa função deve possuir três parâmetros, sendo eles: 
// o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addLesson2 = (obj, key, value) => {
    if (!obj.hasOwnProperty(key)) {
        obj[key] = value;
    } else {
        console.log('Propriedade já existe!')
    }
    console.log(obj);
}
addLesson2(lesson2, 'turno', 'manhã')

// // Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (obj) => console.log(Object.keys(obj) + '\n');
listKeys(lesson2)

// // Crie uma função para mostrar o tamanho de um objeto.

const lengthObj = (obj) => console.log(Object.keys(obj).length);
lengthObj(lesson1);

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (obj) => {
    Object.values(obj).forEach(value => {
        if (value && typeof value === 'object') {
            listValues(value);
        } else {
            console.log(value);
        }
    });
}
listValues(lesson3);

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. 
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. 
// Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const joinLessons = (obj1, obj2, obj3) => {
    const allLessons = Object.assign({'lesson1':obj1}, {'lesson2':obj2}, {'lesson3':obj3});
    console.log(allLessons);
    return allLessons;
}

const lessonsAll = joinLessons(lesson1, lesson2, lesson3);

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalAluno = (objAll) => {
    let total = 0
    Object.entries(objAll).forEach(([key, value]) =>{
        if (value && typeof value === 'object'){
            total += totalAluno(value);
        }else{
            if (key === 'numeroEstudantes'){
                total += value;
            }
        }
    });
    return total;
}

console.log(totalAluno(lessonsAll))

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

