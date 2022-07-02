//(Questão 5): Escreva um programa que inverta os caracteres de um string, sem usar função pronta.

let stringExemplo = "!wohs é tegraT";
let stringInvertida = inverterString(stringExemplo);
console.log(stringInvertida);

function inverterString(string) {
    let inversao = []
    for (let i = 0; i < string.length; i++) {
        inversao[string.length - i] = string.slice(i, i + 1);
    }
    return inversao.toString().replace(/,/g, '');
}