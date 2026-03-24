import { MatematicaBasica } from "./basic_operations";
import { MatematicaAvancada } from "./advanced_operations";

const resultadoSoma = MatematicaBasica.somar(5, 3);
const resultadoSubtracao = MatematicaBasica.subtrair(5, 3);
const resultadoMultiplicacao = MatematicaAvancada.multiplicar(5, 3);
const resultadoDivisao = MatematicaAvancada.dividir(5, 3);

console.log(`Resultado da soma: ${resultadoSoma}`); 
console.log(`Resultado da subtração: ${resultadoSubtracao}`);
console.log(`Resultado da multiplicação: ${resultadoMultiplicacao}`); 
console.log(`Resultado da divisão: ${resultadoDivisao}`); 