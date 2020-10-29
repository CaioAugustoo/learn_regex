// Procura: a
const regex = /a/; // deve começar com as duas barras  "//"

const frase = "JavaScript";
const fraseComRegex = frase.replace(regex, "b"); // substituimos na frase o que tiver "a" por "b"

console.log(fraseComRegex);
// Resultado final: JbvaScript
