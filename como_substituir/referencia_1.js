// caso você queira fazer uma substituição de uma referência à seleção, utilizamos "$&"
const regex = /Java/g;

console.log(
  "Java é a melhor linguagem do mundo".replace(regex, "e Javascript")
);
