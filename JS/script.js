// const meuNome = window.prompt('Digite o nome:');
// window.alert(meuNome);

// const num1 = 7;
// const num2 = 8;

// window.alert(num1 + num2);

// const num1 = 123;
// const num2 = 1534;
// const num3 = 17;
// const num4 = 15;
// const num5 = 12;
// const num6 = 121;
// const num7 = 14;
// const num8 = 41;
// const num9 = 13;
// const num10 = 21;

// window.alert(
//   (num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10) / 10
// );

// const aNum = 10;
// const anotherNum = 8;

// window.alert(
//   `Adição: ${aNum + anotherNum} \n Multiplicação: ${
//     aNum * anotherNum
//   } \n Subtração: ${aNum - anotherNum} \n Divisão: ${aNum / anotherNum} `
// );

// const age = +window.prompt('Digite sua idade:');

// if (age >= 18) {
//   window.alert('Maior de idade');
// } else {
//   window.alert('Menor de idade');
// }

// const num1 = +window.prompt('Digite um número:');
// const num2 = +window.prompt('Digite um número:');

// window.alert('O maior é ' + Math.max(num1, num2));

// const diameter = +window.prompt('Insira o diâmetro: ');
// const circumference = Math.PI * diameter;

// const tempInCelsius = +window.prompt('Insira a temperatura em Celsius:');
// const tempInFahrenheit = tempInCelsius * 1.8 + 32;

// window.alert('A temperatura em graus fahrenheit é: ' + tempInFahrenheit);

// const valorFralda = 2.5;
// const fraldaPorDia = 4;
// const diasPorMes = 30;

// window.alert(valorFralda * fraldaPorDia * diasPorMes);

const prod = [3265, 4127, 2987];

const minProd = Math.min(...prod);
const maxProd = Math.max(...prod);

const total = prod.reduce((prev, current) => prev + current, 0);

window.alert(`Produção total: ${total}\nQueda: ${maxProd - minProd}`);
