// =================== << TRYBE >> ==========================
// =========== << https://app.betrybe.com/ >> ===============

// Remover itens de um array
db.supplies.updateMany(
  {},
  {
pull: {
      items: {
        name: { $in: ["pens", "envelopes"] },
      },
    },
  },
);