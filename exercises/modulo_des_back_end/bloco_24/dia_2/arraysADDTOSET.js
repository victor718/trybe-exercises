// =================== << TRYBE >> ==========================
// =========== << https://app.betrybe.com/ >> ===============

// Adicionando ao array
// A operação abaixo adiciona o elemento 
// "accessories" ao array tags desde que 
// "accessories" não exista no array :

db.inventory.updateOne(
  { _id: 1 },
  { $addToSet: { tags: "accessories" } },
);


// Com o modificador $each

// A operação abaixo utiliza o operador $addToSet 
// e o modificador $each para adicionar alguns 
// elementos a mais no array tags :
db.inventory.updateOne(
  { _id: 2 },
  {
  $addToSet: {
      tags: {
$each: ["camera", "electronics", "accessories"],
      },
    },
  },
);