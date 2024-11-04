// Tentar fazer o menor possível e sem declarar variável

// Par ou Ímpar

+window.prompt('Insira um número: ') % 2 === 0
  ? window.alert('Número par')
  : window.alert('Número impar');

// Verificação de idade

+window.prompt('Digite sua idade:') >= 18
  ? window.alert('Maior de idade')
  : window.alert('Menor de idade');

// Desconto

function verifyDiscount(price) {
  return +price >= 100 ? +price - +price * 0.1 : +price;
}

window.alert(
  `Valor da compra: ${verifyDiscount(
    window.prompt('Digite o valor da compra: ')
  )}`
);

// Aumento salarial

function verifyAugment(wage) {
  return +wage < 1500 ? +wage + +wage * 0.2 : +wage + +wage * 0.1;
}

window.alert(
  `Salário com Aumento: ${verifyAugment(
    window.prompt('Digite o salário atual: ')
  )}`
);

// Positivo ou negativo

function verifyNum(num) {
  num === 0
    ? window.alert('Número zero')
    : num > 0
    ? window.alert('Número positivo')
    : window.alert('Número negativo');
}

verifyNum(window.prompt('Digite um número: '));

// Cálculo de média

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

// Classificação de idade

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

// Calculadora simples

window.alert(eval(window.prompt('Digite sua expressão matemática: ')));

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
    
}