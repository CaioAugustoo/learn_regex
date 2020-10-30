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

// Character Class
// Quando quisermos procurar por determinadas letras, colocamos entre colchetes. Procura letra por letra, não a palavra inteira.

// Procura: Todo a, A, i, I
const novoRegex = /[ai]/gi;

console.log("JavaScript".replace(novoRegex, "u"));
// Resultado final: JuvuScrupt

// Para escapar um caractere, utilizamos a barra invertida
const novoRegex = /\./gi;

const frase =
  "RegExr was created by gskinner.com, and is proudly hosted by Media Temple.";

console.log(frase.replace(novoRegex, "'"));

// Resultado final: RegExr was created by gskinner'com, and is proudly hosted by Media Temple'

// Para procurar de uma letra à outra, utilizamos hífen
const novoRegex = /[a-z]/gi;

console.log("Javascript é linguagem de programação".replace(novoRegex, "5"));

// Resultado final: 5555555555 é 555555555 55 55555555çã5

// Para procurar com minúscula e maíuscula:
const novoRegex = /[A-az-Z]/; // pode colocar com pontuação também

// Para procurar por números de 0 à 9:
const novoRegex = /[0-9]/g;

// Para negar um caractere utlizamos acento circunflexo
const novoRegex = /[*b]/g;
