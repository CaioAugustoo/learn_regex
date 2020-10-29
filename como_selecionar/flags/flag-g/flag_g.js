// Flag: g
// Por padrão procura apenas o primeiro item que for encontrado, dito isso, ela não procura mais. Se procurarmos "Palavra" em um texto, e este texto
// conter mais de uma "Palavra", será retornada apenas a primeira "Palavra". Para procurar no texto todo utilizamos a flag "g";

const novoRegex = /a/g;
console.log("JavaScript".replace(novoRegex, "i"));
// Resultado final: JiviScript
