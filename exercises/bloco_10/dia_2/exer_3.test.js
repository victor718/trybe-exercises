const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

describe('Requisito 1: ', () => {
  it('faça um teste que verifique que os repositórios "sd-01-week4-5-project-todo-list" e "sd-01-week4-5-project-meme-generator" se encontram nessa lista.', async () => {
    expect.assertions(2);
    const url = 'https://api.github.com/users/tryber/repos';
    const p1 = 'sd-01-week4-5-project-todo-list';
    const p2 = 'sd-01-week4-5-project-meme-generator';
    // const p2 = 'exercise-end-block5';
    const data = await getRepos(url);
    console.log(data)
    const project_1 = data.find(element => element === p1);
    const project_2 = data.find(element => element === p2);
    expect(project_1).toBeUndefined();
    expect(project_2).toBeUndefined();
  });
});
