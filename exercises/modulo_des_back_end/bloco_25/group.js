// Selecione todos os bancos;
db.transactions.aggregate([
  { $group: {
    _id: "$bank",
    // count: { $sum: 1}
  }}
]);


// Selecione o valor total das transações em cada banco e quantas são;
db.transactions.aggregate([
  { $group: {
    _id: "$bank",
    count: { $sum: 1 },
    total: { $sum: "$value" }
  } }
]);


// Selecione o valor total de transações;
db.transactions.aggregate([
  { $group: {
    _id: null,
    total: { $sum: "$value" }
  } }
]);


// Selecione os bancos que têm o valor total 
// de transações maior que 1000.
db.transactions.aggregate([
  
  { $group: {
    _id: '$bank',
    total: { $sum: "$value" },
  } },
  { $match: {
    total: { $gt: 1000 }
  } },
  {
    $project: {
      _id: 0,
      nomeBanco: "$_id",
      valorTotal: "$total"
    }
  }
]);
