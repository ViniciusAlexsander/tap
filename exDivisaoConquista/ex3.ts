const x = [ 1, 1, 1, 0.5, 1, 1];

let posicao;

function achaMoedaFalsa(vetor , comeco, final) {

	if(final < comeco) {
		return false;
	}

	let meio = Math.ceil((comeco + final)/ 2);

	if(vetor[meio] === 0.5) {
		return meio;
	} 

  achaMoedaFalsa(vetor, comeco, meio-1);
  achaMoedaFalsa(vetor, meio+1, final);

}

let achou = achaMoedaFalsa(x, 0, 6);
console.log(achou);