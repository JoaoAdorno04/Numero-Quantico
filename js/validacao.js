function verificaChute(chute) {
    const numero = +chute;

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += `<div> Valor inválido! </div>`
        return;

    } if(numeroPermitido(numero)){
        elementoChute.innerHTML += `<div> Valor inválido! O número precisa estar entre ${menorValor} e ${maiorValor} </div>`
        return;

    } if (numero === numeroQuantico){
        document.body.innerHTML = `
            <h1>Você conseguiu achar a posição do número quântico</h1>
            <h3>O número era ${numeroQuantico}</h3>
            <h3>Espero que esteje pronto para ir a lua quântica agora 😉</h3>
            <button id="jogar-novamente" class="btn-jogar"> Tentar novamente </button>

        `
        return;
    } else if(numero > numeroQuantico){
        elementoChute.innerHTML += `<div>O número quântico está menor <i class="fa-solid fa-arrow-down"></i></div>`;
        
    } else { 
         elementoChute.innerHTML += `<div>O número quântico está maior <i class="fa-solid fa-arrow-up"></i></div>`;
    } 
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload( );
    }
})

