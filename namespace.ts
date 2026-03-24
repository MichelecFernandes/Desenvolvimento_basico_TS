console.log("Uso de namespaces e módulos em TypeScript" );

// Uso de namespaces: serve para organizar o código em blocos lógicos, evitando conflitos de nomes e melhorando a legibilidade. Ele agrupa funções, classes e interfaces relacionadas em um escopo específico, permitindo que sejam acessados de forma estruturada.

// Uso de módulos: é uma forma de organizar o código em arquivos separados, onde cada arquivo é um módulo. Os módulos permitem importar e exportar funcionalidades entre arquivos, promovendo a reutilização de código e a modularidade. Eles ajudam a manter o código mais limpo e organizado, facilitando a manutenção e o desenvolvimento em equipe.

namespace MatematicaBasica {
    export function somar(a: number, b: number): number {
        return a + b;
    }

    export function subtrair(a: number, b: number): number {
        return a - b;
    }
}

const resultadoSoma = MatematicaBasica.somar(5, 3);
const resultadoSubtracao = MatematicaBasica.subtrair(5, 3);

console.log(`Resultado da soma: ${resultadoSoma}`); // Saída: Resultado da soma: 8
console.log(`Resultado da subtração: ${resultadoSubtracao}`); // Saída: Resultado da subtração: 2

namespace MatematicaAvancada {
    export function multiplicar(a: number, b: number): number {
        return a * b;
    }

    export function dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("Divisão por zero não é permitida.");
        }
        return a / b;
    }
}

const resultadoMultiplicacao = MatematicaAvancada.multiplicar(5, 3);
const resultadoDivisao = MatematicaAvancada.dividir(5, 3);

console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`); // Saída: Resultado da multiplicação: 15
console.log(`Resultado da divisão: ${resultadoDivisao}`); // Saída: Resultado da divisão: 1.6666666666666667


