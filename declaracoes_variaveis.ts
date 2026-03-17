// Variaveis com tipo explicitos
let idade1: number;
idade1 = 30 // Valor atribuído é do tipo number

// Variaveis com tipo implicitos 
let nome1 = "João" // TS infere que o 'nome' é do tipo string

// Tipos basicos em TS

// number: representa números inteiros ou de ponto flutuante. Exemplo
const idade: number = 30;
const altura: number = 1.75;

// string: representa sequências de caracteres, como texto. Exemplo
const nome: string = "Thamiris";
const mensagem: string = "Olá, Thamiris!";

// boolean: representa valores lógicos verdadeiro (true) ou falso (false). Exemplo
const ativo: boolean = true;
const isAdmin: boolean = false;

// Declarando e manipulando um Array

// Deve ser criado usando a notação de colchetes []
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ["Maria", "João", "Samuel"];

// Para acessar um informação do array é necessãrio passar a pósição do elemento
let primeiroNumero = numeros[0]; // Obtém o primeiro número (1)
let segundoNome = nomes[1];      // Obtém o segundo nome ("João")

