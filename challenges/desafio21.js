db.produtos.updateOne(
  { nome: { $in: ["Cheddar McMelt"] } },
  { $pull: { ingredientes: "pão escuro com gergelim" } },
);

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
