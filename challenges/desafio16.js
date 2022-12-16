db.produtos.updateOne(
  { nome: { $in: ["Big Mac"] } },
  { $set: { ultimaModificacao: new Date() } },
);

db.produtos.findOne({}, { _id: 0, nome: 1 });
