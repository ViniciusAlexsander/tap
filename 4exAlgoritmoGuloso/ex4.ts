let fornecedores = [
  { empresa: "A", precoPorLitro: 5, producao: 20 },
  { empresa: "B", precoPorLitro: 9, producao: 40 },
  { empresa: "C", precoPorLitro: 3, producao: 10 },
  { empresa: "D", precoPorLitro: 8, producao: 80 },
  { empresa: "E", precoPorLitro: 6, producao: 30 },
];

function comprarLeite(quantidadeLitros) {
  fornecedores.sort((a, b) => a.precoPorLitro - b.precoPorLitro);
  let quantidadeComprada = 0;
  let custo = 0;
  fornecedores.forEach((fornecedor) => {
    let preco = 20 * 5;
    if (quantidadeComprada + fornecedor.producao <= quantidadeLitros) {
      console.log(fornecedor.empresa);
      quantidadeComprada += fornecedor.producao;
      custo += preco;
    }
  });

  console.log(custo);
}

comprarLeite(100);
