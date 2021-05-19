const fs = require('fs').promises;
const { expect } = require('chai');
const sinon = require('sinon');
const readFile = require('../exercise2');

describe('Test the "readFile()" function.', () => {
  describe('Test the "readFile()" if it is really a function', () => {
    it('The expected result is function', () => {
      expect('function').to.be.equal(typeof readFile);
    });
  });

  describe('Checks whether the file was created', () => {
    const nameFile = 'test.txt';
    const content = "Brick by ";
    
    before(() => {
      sinon.stub(fs, 'readFile').resolves(nameFile, content);
    });

    after(() => {
      fs.readFile.restore();
    });

    it('The expected result is "ok"', async () => {
      const result = await readFile(nameFile, content);
      expect(result).to.be.a('string');
      expect('ok').to.be.equal(result);
    });
  });

  describe('Checks that the file has not been created', () => {
    before(() => {
      sinon.stub(fs, 'readFile').resolves('', '');
    });

    after(() => {
      fs.readFile.restore();
    });

    it('The expected result is "null"', async () => {
      const result = await readFile();
      expect(result).to.throw(null);
    });
  });
  
  
});
