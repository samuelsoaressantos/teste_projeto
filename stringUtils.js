const stringUtils = {
  inverterString: (str) => {
    if (typeof str !== 'string') {
      return '';
    }
    return str.split('').reverse().join('');
  },

  contarVogais: (str) => {
    if (typeof str !== 'string') {
      return 0;
    }
    const vogais = 'aeiouAEIOU';
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
      if (vogais.includes(str[i])) {
        contador++;
      }
    }
    return contador;
  },

  isPalindromo: (str) => {
    if (typeof str !== 'string' || str.length < 2) {
      return false;
    }
    const stringNormalizada = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const stringInvertida = stringUtils.inverterString(stringNormalizada);
    return stringNormalizada === stringInvertida;
  }
};

module.exports = stringUtils;
