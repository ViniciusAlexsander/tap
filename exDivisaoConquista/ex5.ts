

function pesquisaBinária(vetor, comeco, final, elemento) {

	if(final < comeco) {
		return false;
	}

	let meio = Math.ceil((comeco + final)/ 2);

	if(vetor[meio] == elemento) {
		return meio;
	} else if (vetor[meio] > elemento) {
		return pesquisaBinária(vetor, comeco, meio-1, elemento);
	} else {
		return pesquisaBinária(vetor, meio+1, final, elemento);
	}
}
let array = [1, 2, 3, 4, 45, 6, 20];
const resultado = pesquisaBinária(array, 0, array.length - 1, 20);
console.log(resultado);