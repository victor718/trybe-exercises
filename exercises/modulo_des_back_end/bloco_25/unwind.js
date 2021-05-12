// Operador $unwind
// O operador $unwind "desconstrói" um campo array do documento 
// de entrada e gera como saída um documento para cada elemento 
// do array . Cada documento de saída é o documento de
// entrada com o valor do campo array substituído por um elemento 
// do array .
// Na prática fica mais fácil de entender. Insira o seguinte 
// documento na coleção inventory :


// db.inventory.insertOne({ _id: 7, item: "ABC1", sizes: ["S", "M", "L"] });

// db.inventory.aggregate([{ $unwind : "$sizes" }]);

// { "_id" : 7, "item" : "ABC1", "sizes" : "S" }
// { "_id" : 7, "item" : "ABC1", "sizes" : "M" }
// { "_id" : 7, "item" : "ABC1", "sizes" : "L" }
