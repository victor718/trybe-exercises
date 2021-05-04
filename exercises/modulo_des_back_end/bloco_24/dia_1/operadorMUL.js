// ========= BY TRYBE  --> COURSE =========================
// ========= https://app.betrybe.com/ =====================


// Operador $mul


db.products.update(
  { _id: 1 },
  { $mul: { price: NumberDecimal("1.25"), qty: 2 } }
);

db.products.update(
  { _id: 2 },
  { $mul: { price: NumberLong("100") } }
);

