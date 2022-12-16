db.produtos.updateOne(
  { nome: { $in: ['Quarteirão com Queijo'] } },
  { $pull: { ingredientes: 'hamburguer' } }
);

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
