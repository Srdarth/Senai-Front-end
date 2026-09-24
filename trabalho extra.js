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
