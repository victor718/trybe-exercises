// ========= BY TRYBE  --> COURSE =========================
// ========= https://app.betrybe.com/ =====================

db.fruits.updateMany(
  { productName: "Banana" },
  { $unset: { quantity: "" } }
);
