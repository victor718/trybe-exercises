// ========= BY TRYBE  --> COURSE =========================
// ========= https://app.betrybe.com/ =====================

db.increment.update(
  { sku: "abc123" },
  { $inc: { quantity: -2, "metrics.orders": 1 } }
);
