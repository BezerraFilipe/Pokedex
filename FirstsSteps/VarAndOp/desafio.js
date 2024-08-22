const distancia = 100;
const precoCombustivel = 5.79;
const desempenho = 10;

let consumo = distancia / desempenho;

let custo = consumo * precoCombustivel;

console.log(custo.toFixed(2));

