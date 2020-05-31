/*

    Assim como em linguagens verdadeiramente funcionais,
    nunca jamais alterar o valor de uma variável. Caso
    precisemos mudá-la, fassamos uma cópia da mesma com
    as alterações cabíveis.

    Esse conceito é muito bom para evitar side effects /
    alterações indesejadas no código.

    NOTA_01: O operador Spread (...) pega todas as 
    propriedades do nosso user.

    NOTA_02: O operador Template Literal (${variável}) 
    facilita juntar variáveis que não sejam do tipo string em textos.

*/

/* Exemplo 1 */

const user = {
    name: 'Ivan',
    lastName: 'Guimarães',
}

function getUserFullName(usuario) {
    return {
        ...usuario,
        fullName: `${usuario.name} ${usuario.lastName}`,
    }
}

const userFullName = getUserFullName(user);

console.log(userFullName);
console.log(user);

/* Exemplo 2 */

const students = [
    {
        nome: 'Ivan',
        nota: 8,
    },
    {
        nome: 'Nathalia',
        nota: 9,
    },
    {
        nome: 'João',
        nota: 3,
    }
]

function alunosAprovados(estudantes) {
    return estudantes.filter( aluno => aluno.nota >= 7);
}

console.log('Alunos Aprovados:');
console.log(alunosAprovados(students));

console.log('Alunos:');
console.log(students);