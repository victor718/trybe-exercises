//Selecione todos os clientes com as suas respectivas transações feitas;
db.transactions.aggregate([
  {
    $lookup: {
      from: "clients",
      localField: "name",
      foreignField: "to",
      as: "clients_transactions"
    }
  }
]);



/*
// Selecione quatro clientes com as suas respectivas transações
recebidas;
*/
db.transactions.aggregate([
  {
    $lookup: {
      from: "clients",
      localField: "name",
      foreignField: "to",
      as: "clients_transactions"
    }
  },{
    $limit:4
  }
]);


// ============= db storage =======================================
// add

// Calcule qual o custo total de cada produto,
// considerando o preço de compra e os impostos.
db.products.aggregate([
  {
     $project: {
       _id: 0,
       total: { $add: ["$purchase_price", "$taxes"] }
     }
  }
]);


// subtract
// Calcule qual o lucro total de cada produto, 
// considerando o preço de compra, os impostos e seu valor de venda.
db.products.aggregate([
  {
     $project: {
       _id: 0,
       lucro_total:{
         $subtract: [
           "$sale_price",
           { $add: ["$purchase_price", "$taxes"] }
         ] 
       }
     }
  }
]);


//ceil
/*
A expressão $ceil basicamente arredonda o número 
especificado para "cima". Ela executa a função matemática teto 
que converte um número x no número inteiro mais próximo, 
que seja maior ou igual a x .
*/
db.products.aggregate([
  {
    $project: {
      _id: 0,
      lucro_total: {
        $ceil: {
          $subtract: [
            "$sale_price",
            { $add: ["$purchase_price", "$taxes"] }
          ] 
        }
      }
    }
  }
]);


// floor
/*
Já a expressão $floor retorna o maior número inteiro 
menor ou igual ao número especificado, ou seja, 
faz um arredondamento para baixo.
*/
db.products.aggregate([
  {
    $project: {
      _id: 0,
      lucro_total: {
        $floor: {
          $subtract: [
            "$sale_price",
            { $add: ["$purchase_price", "$taxes"] }
          ] 
        }
      }
    }
  }
]);



// round
/*
A expressão $round retorna o número inteiro mais próximo do
valor atual e também permite definir a quantidade de casas
decimais que você quer manter ao arredondar.
*/



/*
O $addFields é um estágio que adiciona novos campos aos documentos.
 A saída desse estágio conterá todos os 
campos existentes nos documentos de entrada e adicionará os 
novos campos especificados.
Você pode incluir subdocumentos ou arrays de subdocumentos,
 utilizando o conceito de dot notation . Um pipeline pode conter mais de um estágio $addFields .

 db.scores.aggregate([
  {
  $addFields: {
      totalHomework: { $sum: "$homework" } ,
      totalQuiz: { $sum: "$quiz" }
    }
  },
  {
  $addFields: {
      totalScore: {
  $add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ]
      }
    }
  }
]);
 */
