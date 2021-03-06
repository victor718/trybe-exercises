// db.articles.aggregate(
//   [
//     { $limit : 5 }
//   ]
// );

// Selecione todas as transações feitas pelo cliente 
// chamado "Dave America";

db.transactions.aggregate([
  { $match: { to: "Dave America" } }
]);


// Selecione todas as transações com o valor entre 
// 700 e 6000, ou que sejam recebidas pela cliente "Lisa Simpson";
db.transactions.aggregate([
  { $match: {
    $or: [
      { value: { $gte: 700, $lte: 6000 }  },
      { to: "Lisa Simpson" }
  ]}}
]);


//Selecione três transações com o valor acima de 1000.
db.transactions.aggregate([
  { $match: {
    value: { $gt: 1000 }
  } },
  { $limit: 3  }
]).pretty();
