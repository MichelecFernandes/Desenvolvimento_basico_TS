// Inversão de Controle (IoC)
// Em vez de a classe criar tudo sozinha, ela recebe de fora o que precisa usar.

// Injeção de Dependências (DI)
// É uma forma de aplicar IoC.
// A dependência é passada para a classe, em vez de ser criada dentro dela.


// Como rodar o codigo:
// Para rodar o código TypeScript, siga os passos abaixo:

// 1. Instale o Node.js e o TypeScript:
//    - Baixe e instale o Node.js a partir do site oficial: https://nodejs.org/
//    - Após a instalação do Node.js, abra o terminal e execute o comando para instalar o TypeScript globalmente:
//      npm install -g typescript

// 2. Crie um arquivo com a extensão .ts (por exemplo, injecao_dependencias.ts) e copie o código fornecido para esse arquivo.

// 3. Compile o arquivo TypeScript para JavaScript usando o comando tsc no terminal:
//    tsc injecao_dependencias.ts

// 4. Isso gerará um arquivo JavaScript (injecao_dependencias.js) na mesma pasta. Agora, você pode executar esse arquivo usando Node.js:
//    node injecao_dependencias.js

// Você verá a saída no console 

class ServicoEmail {
    enviarEmail(destinatario: string, mensagem: string) {
        console.log(`Enviando email para ${destinatario}: ${mensagem}`);
    }
}

class Usuario {
    private emailService: ServicoEmail;

    constructor(servicoRecebido: ServicoEmail) {
        this.emailService = servicoRecebido;
    }

    notificar(destinatario: string, mensagem: string) {
        this.emailService.enviarEmail(destinatario, mensagem);
    }
}


const meuServico = new ServicoEmail();
const usuario = new Usuario(meuServico);

usuario.notificar("ualuno@fiap.com", "Olá! Esta é uma mensagem de teste.");
