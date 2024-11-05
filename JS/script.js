// Desafio: Tentar fazer o menor possível e sem declarar variável

// Par ou Ímpar

+window.prompt('Insira um número: ') % 2 === 0
  ? window.alert('Número par')
  : window.alert('Número impar');

// // Verificação de idade

+window.prompt('Digite sua idade:') >= 18
  ? window.alert('Maior de idade')
  : window.alert('Menor de idade');

// // Desconto

function verifyDiscount(price) {
  return +price >= 100 ? +price - +price * 0.1 : +price;
}

window.alert(
  `Valor da compra: ${verifyDiscount(
    window.prompt('Digite o valor da compra: ')
  )}`
);

// // Aumento salarial

function verifyAugment(wage) {
  return +wage < 1500 ? +wage + +wage * 0.2 : +wage + +wage * 0.1;
}

window.alert(
  `Salário com Aumento: ${verifyAugment(
    window.prompt('Digite o salário atual: ')
  )}`
);

// // Positivo ou negativo

function verifyNum(num) {
  num === 0
    ? window.alert('Número zero')
    : num > 0
    ? window.alert('Número positivo')
    : window.alert('Número negativo');
}

verifyNum(window.prompt('Digite um número: '));

// // Cálculo de média

function calcAverage(...grades) {
  return grades.reduce((prev, current) => +prev + +current, 0) /
    grades.length >=
    7
    ? 'Aprovado'
    : 'Reprovado';
}

window.alert(
  calcAverage(
    window.prompt('Digite sua nota: '),
    window.prompt('Digite sua nota: '),
    window.prompt('Digite sua nota: ')
  )
);

// // Classificação de idade

function ageClassification(age) {
  return age < 0
    ? 'Inválido'
    : age <= 12
    ? 'Criança'
    : age <= 17
    ? 'Adolescente'
    : age >= 18
    ? 'Adulto'
    : null;
}

window.alert(ageClassification(+window.prompt('Digite sua idade:')));

// // Calculadora simples

function simpleCalc() {
  return eval(
    `${window.prompt('Digite o primeiro número: ')}${window.prompt(
      'Digite o operador (+, -, /, *): '
    )}${window.prompt('Digite o segundo número: ')}`
  );
}

window.alert(simpleCalc());

// Calculadora de IMC

function calcIMC(weight, height) {
  return weight / height ** 2;
}

function classifyIMC(IMC) {
  return IMC <= 18.5
    ? 'Baixo Peso'
    : IMC >= 18.5 && IMC <= 24.9
    ? 'Peso adequado'
    : IMC >= 25 && IMC <= 29.9
    ? 'Sobrepeso'
    : 'Obeso';
}
window.alert(
  classifyIMC(
    calcIMC(
      window.prompt('Digite seu peso:'),
      window.prompt('Digite sua altura:')
    )
  )
);

// Conversão de notas

function gradeConversion(grade) {
  return grade > 100 || grade < 0
    ? 'Nota inválida'
    : grade < 60
    ? 'F'
    : grade >= 60 && grade <= 69
    ? 'D'
    : grade >= 70 && grade <= 79
    ? 'C'
    : grade >= 80 && grade <= 89
    ? 'B'
    : 'A';
}

window.alert(gradeConversion(+window.prompt('Digite sua nota entre 0 e 100:')));

// // Bhaskara

function bhaskara(a, b, c) {
  return b ** 2 - 4 * a * c < 0
    ? window.alert('Raiz negativa')
    : window.alert(
        `xi: ${(-b + Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)},
        xii: ${(-b - Math.sqrt(b ** 2 - 4 * a * c)) / (2 * a)},
`
      );
}

bhaskara(
  +window.prompt('Digite A:'),
  +window.prompt('Digite B:'),
  +window.prompt('Digite C:')
);

// Verificador de triângulo

function triangleChecker(side1, side2, side3) {
  return !(
    side1 + side2 > side3 &&
    side1 + side3 > side2 &&
    side2 + side3 > side1
  )
    ? 'Não é um triângulo'
    : side1 === side2 && side2 === side3
    ? 'Triângulo Equilátero'
    : (side1 === side2 && side2 !== side3) ||
      (side2 === side3 && side1 !== side2)
    ? 'Triângulo Isósceles'
    : 'Triângulo Escaleno';
}

window.alert(
  triangleChecker(
    +window.prompt('Digite o lado:'),
    +window.prompt('Digite o lado:'),
    +window.prompt('Digite o lado:')
  )
);

// Juros simples

function fees(startCap, rate, time) {
  return startCap * (rate / 100) * time;
}

window.alert(
  'Juros de ' +
    fees(
      +window.prompt('Digite o capital inicial: '),
      +window.prompt('Digite a taxa dos juros: '),
      +window.prompt('Digite o tempo em meses: ')
    )
);

// Ano Bissexto

function leapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && !(year % 100 === 0))
    ? 'Bissexto'
    : 'Não é Bissexto';
}

window.alert(leapYear(+window.prompt('Digite um ano:')));

// Raiz quadrada

function squareRoot(num) {
  return Math.sqrt(num).toFixed(2);
}

window.alert(squareRoot(+window.prompt('Digite um número')));

// Número primo

function primeNumber(num, divider = 2) {
  return num < 2
    ? 'Não é primo'
    : divider ** 2 > num
    ? 'É primo'
    : num % divider === 0
    ? 'Não é primo'
    : primeNumber(num, divider + 1);
}

window.alert(primeNumber(window.prompt('Digite um número:')));

// Fatorial

function factorial(num, result = 1) {
  return result > 10000
    ? 'Não foi possível calcular devido ao limite de 10.000'
    : num < 2
    ? result * num
    : factorial(num - 1, result * num);
}
window.alert(factorial(+window.prompt('Digite um número')));

// IMC com conselho

function complexCalcIMC(weight, height) {
  return {
    IMC: weight / height ** 2,
    height: height,
  };
}

function complexClassifyIMC(result) {
  return result.IMC < 18.5
    ? `Baixo peso, peso ideal mínimo: ${
        18.5 * result.height ** 2
      }, peso ideal máximo: ${24.9 * result.height ** 2}`
    : result.IMC >= 18.5 && result.IMC <= 24.9
    ? 'Peso adequado'
    : result.IMC >= 25 && result.IMC <= 29.9
    ? `Sobrepeso, peso ideal mínimo: ${
        18.5 * result.height ** 2
      }, peso ideal máximo: ${24.9 * result.height ** 2}`
    : `Obeso, peso ideal mínimo: ${
        18.5 * result.height ** 2
      }, peso ideal máximo: ${24.9 * result.height ** 2}`;
}

window.alert(
  complexClassifyIMC(
    complexCalcIMC(
      window.prompt('Digite seu peso:'),
      window.prompt('Digite sua altura:')
    )
  )
);
