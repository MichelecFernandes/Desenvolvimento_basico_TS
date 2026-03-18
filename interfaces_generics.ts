// Interface age com um contrato ou conjunto de regras que as classes ou objetos devem seguir. Ela define a estrutura e os tipos dos dados que um objeto deve ter, mas não implementa a lógica por trás desses dados.

//Uma interface em TypeScript é como uma lista de verificação para criar objetos: ela define o que deve ser incluído, mas não como esses itens são feitos ou como as acoes sao realizadas. Isso ajuda a garantir que os objetos criados sigam um formato específico, tornando o código mais organizado e fácil de entender.

// Exemplo de interface
interface Pessoa {
    nome: string;
    idade: number;
    saudacao(): string; // Método que retorna uma saudação
}

// Implementando a interface em um objeto
const pessoa1: Pessoa = {
    nome: "Alice",
    idade: 25,
    saudacao() {
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
};

// Usando o método de saudação
console.log(pessoa1.saudacao()); // Saída: Olá, meu nome é Alice e tenho 25 anos.

// Generics permitem criar componentes reutilizáveis que podem trabalhar com diferentes tipos de dados, mantendo a segurança de tipo. Com generics, você pode definir uma função, classe ou interface que pode operar com qualquer tipo de dado, sem perder a informação sobre o tipo específico que está sendo usado.

// Exemplo de interface com generics
interface Caixa<T> {
    conteudo: T;
    mostrarConteudo(): T;
}

// <T> é um parâmetro de tipo genérico que pode ser substituído por qualquer tipo específico quando a interface for implementada. Isso permite que a mesma interface seja usada para diferentes tipos de dados, como números, strings ou objetos, sem perder a segurança de tipo.

// Implementando a interface genérica
const caixaDeNumero: Caixa<number> = {
    conteudo: 42,
    mostrarConteudo() {
        return this.conteudo;
    }
};

const caixaDeString: Caixa<string> = {
    conteudo: "Olá, mundo!",
    mostrarConteudo() {
        return this.conteudo;
    }
};

// Usando os métodos para mostrar o conteúdo
console.log(caixaDeNumero.mostrarConteudo()); // Saída: 42
console.log(caixaDeString.mostrarConteudo()); // Saída: Olá, mundo! 