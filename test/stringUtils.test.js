const { expect } = require('chai');
const stringUtils = require('../stringUtils');

describe('Função inverterString', () => {
  it('deve inverter corretamente uma string comum', () => {
    expect(stringUtils.inverterString('hello')).to.equal('olleh');
  });

  it('deve retornar uma string vazia quando a entrada é uma string vazia', () => {
    expect(stringUtils.inverterString('')).to.equal('');
  });

  it('deve retornar uma string vazia quando a entrada não é uma string', () => {
    expect(stringUtils.inverterString(null)).to.equal('');
    expect(stringUtils.inverterString(123)).to.equal('');
    expect(stringUtils.inverterString(undefined)).to.equal('');
  });
});

describe('Função contarVogais', () => {
  it('deve contar corretamente as vogais em uma string comum', () => {
    expect(stringUtils.contarVogais('JavaScript')).to.equal(3);
  });

  it('deve retornar 0 para uma string sem vogais', () => {
    expect(stringUtils.contarVogais('rhythm')).to.equal(0);
  });

  it('deve contar vogais maiúsculas e minúsculas (case-insensitive)', () => {
    expect(stringUtils.contarVogais('AEIOUaeiou')).to.equal(10);
  });
});

describe('Função isPalindromo', () => {
  it('deve retornar true para uma palavra palíndroma', () => {
    expect(stringUtils.isPalindromo('arara')).to.be.true;
  });

  it('deve retornar false para uma palavra que não é palíndroma', () => {
    expect(stringUtils.isPalindromo('teste')).to.be.false;
  });

  it('deve considerar espaços, pontuações e letras maiúsculas/minúsculas', () => {
    expect(stringUtils.isPalindromo('A man, a plan, a canal: Panama')).to.be.true;
  });
});
