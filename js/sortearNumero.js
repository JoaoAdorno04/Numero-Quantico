const menorValor = 1;
const maiorValor = 100;
const numeroQuantico = gerarNumeroQuantico();

function gerarNumeroQuantico(){
    return parseInt(Math.random() * maiorValor + 1)
    
}

console.log('Número Quantico:', numeroQuantico)

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;
