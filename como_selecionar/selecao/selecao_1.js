// Procura: a
const regex = /a/; // deve começar com as duas barras  "//"

const frase = "JavaScript";
const fraseComRegex = frase.replace(regex, "b"); // substituimos na frase o que tiver "a" por "b"

console.log(fraseComRegex);
// Resultado final: JbvaScript

// Utilizar um caracter literal irá realizar uma busca específica deste caracter
// Procura: J seguido de "a", "v" e "a";
const novoRegex = /Java/;

console.log("JavaScript".replace(novoRegex, "Type"));
// Resultado final: TypeScript
