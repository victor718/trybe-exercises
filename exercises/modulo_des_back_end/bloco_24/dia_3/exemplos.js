//======================TRYBE===============================
//=================https://app.betrybe.com/=================

//all
db.inventory.find({ tags: ["red", "blank"] });
db.inventory.find({ tags: { $all: ["red", "blank"] } });

// $elemMatch
db.scores.find(
  { results: { $elemMatch: { $gte: 80, $lt: 85 } } }
);

// O operador $size seleciona documentos em que um
// array contenha um número de elementos especificado.
db.products.find(
  { tags: { $size: 2 } }
);

//$expr
// O operador $expr permite que você utilize expressões 
// de agregação e construa queries que comparem campos 
// no mesmo documento.
// Considere os documentos abaixo na coleção monthlyBudget :
db.monthlyBudget.find(
  {
expr: { $gt: [ "$spent", "$budget" ] }
  }
);


// Operador $regex
// O operador $regex fornece os "poderes" das expressões regulares
//  ( regular expressions ) para seleção de strings .
//   MongoDB utiliza expressões regulares compatíveis 
//   com Perl ( PCRE ), versão 8.42, e com suporte a UTF-8 .
// Um uso muito comum para o operador $regex é
//  fazer consultas como o LIKE do SQL . Considere 
//  os seguintes documentos na coleção products :
db.products.find({ sku: { $regex: /789$/ } });

// Operador $text
// O operador $text faz uma busca "textual" em 
// um campo indexado por um text index. A expressão 
// para utilizar o $text tem a seguinte sintaxe:


// Operador $mod
// Saindo um pouco dos operadores textuais,
// existe o operador $mod , que seleciona todos os documentos em que o valor do campo dividido por um divisor seja igual ao valor especificado (ou seja, executa a operação matemática módulo).
// Operação módulo: encontra o resto da divisão de 
// um número por outro.
