"use strict";
// Inversão  de  controle  (IoC)
// Inversão de Controle (IoC) é um princípio de design de software que inverte o fluxo tradicional de controle em um programa. Em vez de um componente controlar a criação e a dependência de outros componentes, o controle é transferido para um contêiner ou framework que gerencia essas dependências. Isso promove a modularidade, a flexibilidade e a testabilidade do código.
// Injeção de Dependências (DI)
// A Injeção de Dependências (DI) é um padrão de design que implementa a Inversão de Controle. Ele permite que as dependências de um objeto sejam fornecidas externamente, em vez de o objeto criar ou gerenciar suas próprias dependências. Isso facilita a substituição de dependências por implementações alternativas, como mocks para testes, e promove a reutilização de código.
class ServicoEmail {
    enviarEmail(destinatario, mensagem) {
        console.log(`Enviando email para ${destinatario}: ${mensagem}`);
    }
}
class Usuario {
    emailService;
    constructor(servicoRecebido) {
        this.emailService = servicoRecebido;
    }
    notificar(destinatario, mensagem) {
        this.emailService.enviarEmail(destinatario, mensagem);
    }
}
const meuServico = new ServicoEmail();
const usuario = new Usuario(meuServico);
usuario.notificar("ualuno@fiap.com", "Olá! Esta é uma mensagem de teste.");
