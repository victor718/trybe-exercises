// ========= BY TRYBE  --> COURSE =========================
// ========= https://app.betrybe.com/ =====================
// UPDATE ONE
db.inventory.updateOne(
  { item: "paper" },
  { $set: { "size.uom": "cm", status: "P" } }
);

// ALTERANDO MÚLTIPLOS DOCUMENTOS
db.inventory.updateMany(
  { "qty": { $lt: 50 } },
  { $set: { "size.uom": "in", status: "P" } }
);

// ==============================================
// Exemplo 1: Alterando campos no primeiro nível (top-level)
db.products.update(
  { _id: 100 },
  { $set: {
      quantity: 500,
      details: { model: "14Q3", make: "xyz" },
      tags: [ "coats", "outerwear", "clothing" ]
    }
  }
);

// Exemplo 2: Alterando campos em documentos embedados
db.products.update(
  { _id: 100 },
  { $set: { "details.make": "zzz" } }
);

// Exemplo 3: Alterando valores em arrays
db.products.update(
  { _id: 100 },
  { $set: {
      "tags.1": "rain gear",
      "ratings.0.rating": 2
    }
  }
);
