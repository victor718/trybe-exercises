/*
Operador $lookup
O operador $lookup foi introduzido na versão 3.2 do
MongoDB e vem evoluindo desde então. Com ele, é possível 
juntar documentos de outra coleção ( join ). Como resultado 
dessa junção, um elemento do tipo array é adicionado a cada 
documento da coleção de entrada, contendo os documentos que 
deram "match" na coleção com a qual se faz o "join".

Existem quatro parâmetros básicos para montar um $lookup :

from : uma coleção no mesmo database para executar o join ;

localField : o campo da coleção de onde a operação de 
agregação está sendo executada. Será comparado por igualdade 
com o campo especificado no parâmetro foreingField ;

foreingField : o campo da coleção especificada no parâmetro 
from que será comparado com o campo localField por igualdade simples;

as : o nome do novo array que será adicionado.

Join com igualdade simples
Considere os seguintes documentos nas coleções orders e inventory :

db.orders.aggregate([
  {
lookup: {
      from: "inventory",
      localField: "item",
      foreignField: "sku",
      as: "inventory_docs"
    }
  }
]);
*/

// Selecione todos os clientes com as suas 
// respectivas transações feitas;
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_clients"
    }
  },
]).pretty();

// Selecione quatro clientes com as suas 
// respectivas transações recebidas;
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_clients"
    }
  },
  {
    $limit: 4
  }
]);


// Selecione todos os cliente do estado da
// "Florida" e suas respectivas transações recebidas.
db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "to",
      as: "transactions_clients"
    }
  },
  {
    $match: {
      "State": "Florida"
    }
  },
  // { $limit: 1 }
]);

