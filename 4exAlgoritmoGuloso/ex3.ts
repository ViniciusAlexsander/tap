const moedas = [100, 25, 10, 5, 1];

function darTroco(valorTroco) {
  let troco = 0;
  let quantidadeMoedas = 0;
  for (let i = 0; i < moedas.length; i++) {
    while (troco + moedas[i] <= valorTroco) {
      troco += moedas[i];
      quantidadeMoedas++;
      console.log(`Moeda: ${moedas[i]}`);
    }
  }

  console.log(quantidadeMoedas);
}

darTroco(141);
