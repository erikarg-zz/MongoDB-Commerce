db.produtos.find(
  { $where: "this.curtidas > this.vendidos" },
  { _id: 0, nome: 1 },
);
