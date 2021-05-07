db.voos.find(
  { $expr: { 
    $lt: ["$passageiros.gratis", "$passageiros.pagos"]
  } },
  { "passageiros": 1 }
).pretty();

db.voos.find(
  { "aeroportoOrigem.continente": {
    $regex: /^América.*$/i
   } },
   { "aeroportoOrigem": 1 }
).pretty();


db.articles.find(
  { $text: { $search: "coffee" } },
).pretty();

db.voos.find(
  {}
)

db.voos.find(
  {}
)