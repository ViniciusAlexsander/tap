

function pesquisaIndiceIgualValor(vetor, comeco, final) {

	if(final < comeco) {
		return false;
	}

	let indice = Math.ceil((comeco + final)/ 2);

	if(vetor[indice] == indice) {
		return indice;
	} else if(vetor[indice] > indice) {
		return pesquisaIndiceIgualValor(vetor, comeco, indice - 1); 
	} else {
		return pesquisaIndiceIgualValor(vetor, indice + 1, final);
	}
}
let vetor = [1, 1, 12, 124, 12];
const resultado2 = pesquisaIndiceIgualValor(vetor, 0, vetor.length - 1);
console.log(resultado2);
