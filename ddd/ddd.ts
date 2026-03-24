// Domain Driven Design (DDD) é uma abordagem de desenvolvimento de software que enfatiza a importância de modelar o domínio do problema de forma clara e precisa. O objetivo do DDD é criar um modelo de domínio rico e expressivo, que reflita as regras de negócio e as necessidades dos usuários.

// O DDD é baseado em alguns conceitos-chave, como:

// 1. Entidades: são objetos que possuem uma identidade única e persistente ao longo do tempo. Elas representam os elementos principais do domínio e têm um ciclo de vida próprio.

// 2. Value Objects: são objetos que não possuem identidade própria e são definidos apenas por seus atributos. Eles são imutáveis e podem ser usados para representar conceitos como dinheiro, data, etc.

// 3. Agregados: são grupos de entidades e value objects que estão relacionados entre si e formam uma unidade de consistência. O agregado é responsável por garantir a integridade dos dados dentro de seu escopo.

// 4. Repositórios: são responsáveis por fornecer acesso aos agregados, permitindo a recuperação e persistência dos dados.

// 5. Serviços de Domínio: são responsáveis por encapsular a lógica de negócio que não pertence a nenhuma entidade ou value object específico.

// O DDD também enfatiza a importância de uma linguagem ubíqua, que é uma linguagem comum e compartilhada entre os desenvolvedores e os especialistas do domínio. Essa linguagem deve ser usada para descrever o modelo de domínio, as regras de negócio e as interações entre os objetos.

// Em resumo, o DDD é uma abordagem que busca criar um modelo de domínio rico e expressivo, que reflita as necessidades dos usuários e as regras de negócio, promovendo a clareza, a flexibilidade e a manutenibilidade do software.

// Existe tipos dideferentes de domínios:
// Domínio de Negócio: Refere-se ao conjunto de regras, processos e entidades que compõem o negócio ou a área de atuação para a qual o software está sendo desenvolvido. Ele é o foco principal do DDD, pois é onde estão as regras de negócio e as necessidades dos usuários.

// Domínio Técnico: Refere-se às tecnologias, ferramentas e infraestruturas utilizadas para implementar o software. Ele é importante para garantir que o software seja eficiente, escalável e seguro, mas não é o foco principal do DDD.

// Domínio de Aplicação: Refere-se à camada de software que lida com a lógica de aplicação, como a orquestração de processos, a comunicação entre componentes e a integração com sistemas externos. Ele é importante para garantir que o software funcione corretamente e atenda às necessidades dos usuários, mas também não é o foco principal do DDD.    

// Domínio de Interface: Refere-se à camada de software que lida com a interação do usuário, como a interface gráfica, a experiência do usuário e a usabilidade. Ele é importante para garantir que o software seja fácil de usar e atenda às expectativas dos usuários, mas também não é o foco principal do DDD.

// Subdomínios: Refere-se a partes específicas do domínio que têm regras de negócio e necessidades distintas. Eles são importantes para organizar o modelo de domínio e garantir que as diferentes áreas do negócio sejam tratadas de forma adequada. Os subdomínios podem ser classificados em subdomínio principal e subdomínio de suporte, dependendo da importância e complexidade das regras de negócio envolvidas.

// Subdominio Principal: É o núcleo do domínio, onde estão as regras de negócio mais importantes e complexas. Ele é o foco principal do DDD e deve ser modelado com cuidado para garantir que o software atenda às necessidades dos usuários e seja flexível o suficiente para evoluir ao longo do tempo.

// Subdominio de Suporte: Refere-se a partes do domínio que são importantes, mas não são o foco principal do DDD. Eles podem incluir funcionalidades auxiliares, integrações com sistemas externos, etc. Embora sejam importantes para o funcionamento do software, eles não devem ser o foco principal do modelo de domínio.   


// Domain Expert: É um especialista no domínio de negócio para o qual o software está sendo desenvolvido. Ele tem um conhecimento profundo das regras de negócio, dos processos e das necessidades dos usuários, e é responsável por fornecer informações e orientações para os desenvolvedores durante o processo de modelagem do domínio.

export class DomainExpert {
    nome: string;
    areaDeEspecializacao: string;

    constructor(nome: string, areaDeEspecializacao: string) {
        this.nome = nome;
        this.areaDeEspecializacao = areaDeEspecializacao;
    }

    fornecerInformacoes() {
        console.log(`O especialista ${this.nome} tem conhecimento em ${this.areaDeEspecializacao}.`);
    }
}

const especialista = new DomainExpert("Maria", "Finanças");
especialista.fornecerInformacoes(); // Saída: O especialista Maria tem conhecimento em Finanças.