let numeros = [3, 8, 5, 2, 7, 4];

for (let i = 0; i < numeros.length; i++) {
    
    if (numeros[i] % 2 == 0){

        let dobro = numeros[i] * 2;

        console.log("numeros:", numeros[i], "dobro:", dobro);
    }
}

let quantidade = numeros.length;

console.log("Quantidade de numeros:", quantidade);

console.log("Fim do Programa");


// ### Explicação linha por linha

// | Linha | O que acontece |
// |-------|----------------|
// | *1* | Declara a variável numeros e guarda um *array* (lista) com os valores: 3, 8, 5, 2, 7 e 4. |
// | *2* | Linha em branco (apenas organização visual). |
// | *3* | Inicia um *laço for*. Cria a variável i com valor inicial 0. Enquanto i for menor que o tamanho do array (numeros.length), o laço continua. A cada volta, i aumenta 1 (i++). |
// | *4* | Linha em branco. |
// | *5* | Abre um *if. Verifica se o número na posição i do array é **par* (% 2 == 0 significa resto da divisão por 2 igual a zero). |
// | *6* | Linha em branco. |
// | *7* | Se o número for par, cria a variável dobro e guarda o valor do número multiplicado por 2. |
// | *8* | Linha em branco. |
// | *9* | Mostra no console a mensagem com o número original e o seu dobro. |
// | *10*| Fecha o bloco do if. |
// | *11*| Fecha o bloco do for. |
// | *12*| Linha em branco. |
// | *13*| Declara a variável quantidade e guarda o tamanho do array (numeros.length), que é 6. |
// | *14*| Linha em branco. |
// | *15*| Mostra no console a quantidade total de números do array. |
// | *16*| Linha em branco. |
// | *17*| Mostra a mensagem final “Fim do programa”. |

// ---

// ### Teste de Mesa (execução do for)

// O array é: [3, 8, 5, 2, 7, 4]  
// Tamanho do array (numeros.length) = *6*

// | Volta | Valor de i | numeros[i] | É par? (% 2 == 0) | O que acontece | Saída no console |
// |-------|--------------|--------------|----------------------|----------------|------------------|
// | 1ª    | 0            | 3            | Não (3 % 2 = 1)      | Não entra no if | — |
// | 2ª    | 1            | 8            | Sim (8 % 2 = 0)      | Calcula dobro = 16 e mostra | Número: 8 Dobro: 16 |
// | 3ª    | 2            | 5            | Não (5 % 2 = 1)      | Não entra no if | — |
// | 4ª    | 3            | 2            | Sim (2 % 2 = 0)      | Calcula dobro = 4 e mostra  | Número: 2 Dobro: 4 |
// | 5ª    | 4            | 7            | Não (7 % 2 = 1)      | Não entra no if | — |
// | 6ª    | 5            | 4            | Sim (4 % 2 = 0)      | Calcula dobro = 8 e mostra  | Número: 4 Dobro: 8 |

// *Depois do for:*

// - quantidade recebe o valor *6*
// - Console mostra: Quantidade de números: 6
// - Console mostra: Fim do programa

// ---

// ### Saída final completa do programa:


// Número: 8 Dobro: 16
// Número: 2 Dobro: 4
// Número: 4 Dobro: 8
// Quantidade de números: 6
// Fim do programa
