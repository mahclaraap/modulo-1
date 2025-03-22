alert ('Boas vindas ao nosso site!');

let nome = prompt('Qual o seu nome?');
let idade = prompt('Qual a sua idade?');
//let nome = 'Lua';
//let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;

//alert ('Erro! Preencha todos os campos');

//let mensagemDeErro = 'Erro! Preencha todos os campos';
//alert(mensagemDeErro);

if (idade >= 18) {
    alert ('Pode tirar a habilitação!');
} else {
    alert ('Sinto muito, complete 18 anos e tente novamente.');
}