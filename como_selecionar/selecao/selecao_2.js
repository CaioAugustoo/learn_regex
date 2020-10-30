// Para selecionarmos todo caractere, exceto quebra de linha, utilizamos o ponto.
const novoRegex = /./g;

// Para seleciornarmos qualquer caractere alfanumérico e o underline, utilizamos a letra "w"
const novoRegex = /\w/g;

// Caso utilizarmos W (maiúsculo), ele selecionará tudo que não for caractere alfanumérico.
const novoRegex = /\W/g;

// Para selecionarmos todos dígitos utilizamos o "d".
const novoRegex = /\d/g;

// E o D (maiúsculo), ele selecionará tudo que não for dígito.
const novoRegex = /\D/g;

// Para seleciornamos: espaço, quebra de linha e tab.
const novoRegex = /\s/g;

// E o S (maiúsculo), ele selecionará tudo que não for espaço, quebra de linha e tab.
const novoRegex = /\S/g;
