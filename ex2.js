// dado numero me fale se é par ou ímpar

// dado um número
let numero = 12;

// operador: %
// saber se é par ou impar:
// faz o resto por 2. Se o resto for 0 é par. Se não for zero é ímpar.

if (numero % 2 == 0) {
  console.log(`${numero} é par!`);
} else {
  console.log(`${numero} é ímpar!`);
}

let ehImpar = numero % 2 != 0;
if (ehImpar) {
  console.log(`${numero} é impar!`);
} else {
  console.log(`${numero} é pár!`);
}

//tipoDoValor

let valor = '1'; //string
let tipoDoValor = typeof valor;
console.log(`${valor} é do tipo ${tipoDoValor}`);
