// ========= BY TRYBE  --> COURSE =========================
// ========= https://app.betrybe.com/ =====================


db.fruits.updateOne(
  { name: "Banana" },
  { $rename: {
      "name": "productName"
    }
  }
);
