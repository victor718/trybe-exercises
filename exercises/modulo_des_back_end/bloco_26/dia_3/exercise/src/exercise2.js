const fs = require('fs').promises;

async function readFile(fileName, content) {
  const pathName = `./${fileName}`;
  try {
    if (!fileName) {
      throw new Error(null);
    }
    // const newFile = await fs.readFileSync(pathName, 'utf-8');
    await fs.writeFile(pathName, content);
    return 'ok';
  } catch {
    return null;
  }
}

readFile().then((result) => console.log(result));

fs.readFile('./testeFS.txt', 'utf-8').then((r) => console.log(r));

module.exports = readFile;
