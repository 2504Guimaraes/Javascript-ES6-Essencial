/*

    Javascript antigamente só tinha escopo de função e 
    de bloco, com a adição de Let e Const agora foi
    adicionado o escopo de bloco.

    Vat não obedece escopode bloco, mas obedece escopo
    de função.

    Let e Const obedecem escopo de bloco, e const é
    um valor que possui atribuição imutável.

    Abaixo um exemplo de como VAR não respeita escopo
    de bloco, dará um undefined mostrando q a variável
    msm não atribuida existe, em vez de um erro.

*/

/* Teste com var: */

(function(){
    
    console.log(`valor = ${test}`);

    if (true) {
        var test = 21; 
        console.log(`valor dentro de if= ${test}`);   
    }

    console.log(`valor após if = ${test}`);
})()

/* Teste com let (tbm funciona com const): */

(function(){
    
    console.log(`valor = ${test}`);

    if (true) {
        let test = 21; 
        console.log(`valor dentro de if= ${test}`);   
    }

    console.log(`valor após if = ${test}`);
})()