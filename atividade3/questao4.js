let valor1, valor2, contas
valor1 = 0
valor2 = 1
contas = 1

console.log(valor1)

while (contas < 10) {
    console.log(valor2);
    let subsequente = valor1 + valor2
    
    valor1 = valor2
    valor2 = subsequente
    contas++
}