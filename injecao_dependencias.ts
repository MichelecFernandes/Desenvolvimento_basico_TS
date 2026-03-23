// Inversão de Controle (IoC)
// Em vez de a classe criar tudo sozinha, ela recebe de fora o que precisa usar.

// Injeção de Dependências (DI)
// É uma forma de aplicar IoC.
// A dependência é passada para a classe, em vez de ser criada dentro dela.

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
