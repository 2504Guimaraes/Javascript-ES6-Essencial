/*
    Currying é o processo de transformar uma função que espera vários 
    argumentos em uma função que espera um único argumento e retorna 
    outra função curried. 
    
    Uma função que normalmente recebe 3 argumentos, ao sofrer currying, 
    resulta em uma função que recebe um argumento e retorna uma função 
    que recebe um argumento, que por sua vez retorna uma função que 
    recebe um argumento e retorna o resultado da função original.
*/

/* Função Primeiro Grau sem Currying */

function primeiroGrau(a,b,x) {
  return a * x + b;
}

console.log(primeiroGrau(3,2,42));


/* Função Primeiro Grau com Currying */

function primeiroGrauCurried(a) { 
    return function(b) {
      return function(x) {
  
       return a * x + b;
      };
    };
  }
  
  let resultado = primeiroGrauCurried(3)(2)(42);
  
  console.log(resultado);

  /*
  
    A vantagem de escrever uma função curried é que fica mais fácil de 
    construir funções com base nas funções curried fixando alguns 
    argumentos.

    A função celsiusParaFahrenheit pode ser escrita assim:

  */

  let celsiusParaFahrenheit = primeiroGrauCurried(1.8)(32);

  console.log(celsiusParaFahrenheit(25));