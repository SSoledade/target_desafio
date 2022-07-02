/*(Questão 2): Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores 
anteriores(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um
número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a
sequência.*/

function GerarFibonacci(numero) {
    let sequenciaFibonacci = [];
    sequenciaFibonacci[0] = 0;
    sequenciaFibonacci[1] = 1;

    if (numero <= 3 && numero >= 0) {
        console.log(`O número ${numero} pertence a sequência Fibonacci!`);
        return;
    }

    for (let i = 2; i <= numero; i++) {
        sequenciaFibonacci[i] = sequenciaFibonacci[i - 2] + sequenciaFibonacci[i - 1];
        if (sequenciaFibonacci[i] == numero) {
            console.log(`O número ${numero} pertence a sequência Fibonacci!`);
            return;
        }
    }

    console.log(`O número ${numero} não pertence a sequência Fibonacci!`);
}

GerarFibonacci(34);