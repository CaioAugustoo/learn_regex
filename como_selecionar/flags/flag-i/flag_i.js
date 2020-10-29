// Flag: i
// Esta flag irá ignorar as diferenças entre maiúsculas e minúsculas.

const novoRegex = /Ap/gi;

console.log("Apenas um teste".replace(novoRegex, "O"));
// Resultado final: Oenas um Teste
