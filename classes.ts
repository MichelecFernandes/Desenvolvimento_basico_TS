// Classes

// Classes abstratas  : define caracaterísticas comuns que servem de base para outras classes. Elas não podem ser instanciadas diretamente, ou seja, você não pode criar um objeto a partir de uma classe abstrata. Em vez disso, elas são projetadas para serem estendidas por outras classes que implementam os detalhes específicos.

// Exemplo de classe abstrata
abstract class Animal {
    abstract fazerSom(): void; // Método abstrato que deve ser implementado pelas subclasses
}

// Classes concretas : são classes que podem ser instanciadas diretamente, ou seja, você pode criar objetos a partir delas. Elas implementam todos os detalhes e funcionalidades necessárias para serem usadas em um programa.

// Exemplo de classe concreta que estende a classe abstrata
class Cachorro extends Animal {
    fazerSom() {
        console.log("Au au!");
    }
}

// Criando uma instância da classe concreta
const meuCachorro = new Cachorro();
meuCachorro.fazerSom(); // Saída: Au au!
