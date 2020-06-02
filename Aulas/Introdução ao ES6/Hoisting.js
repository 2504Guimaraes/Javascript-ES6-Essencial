/*

    Hoisting tem o significado de erguer algo inglês.
    O Javascript tem como característica erguer a variável
    para o topo do código como se ela sempre tivesse existido. Esse padrão funciona tanto com variáveis como com funções.

    No caso de funções ele ergue tanto a declaração da 
    mesma quanto sua atribuição / seu funcionamento interno. Por isso em JS funções funcionam mesmo 
    sendo escritas fora de ordem, onde teoricamente as
    mesmas não eram atribuidas.

*/

/* Hoisting de Variável */

function fn() {

    console.log(text);

    var text = 'Exemplo';

    console.log(text);
}

fn();

/* Hoisting de Funções */

function rodarExemplo(){

    console.log(somarAeB(4,4));
    
    function somarAeB(primeiro, segundo) {
        return primeiro + segundo;
    }

}

rodarExemplo();

/* 
    AVISO: 
    É uma boa prática SEMPRE declarar uma função
    sempre antes de usá-la.
*/
