function sortear() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const de = parseInt(document.getElementById('de').value);
    const ate =  parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for (let i = 0; i< quantidade; i++){
        numero = obterNumeroAleatorio(de,ate);
        
      while (sorteados.includes(numero)) {
        numero = obterNumeroAleatorio(de,ate)
      }

      sorteados.push(numero)

    }

    let numeros = document.getElementById('numeros')

    numeros.textContent = sorteados

    alterarStatusbotao();
}


function obterNumeroAleatorio(min,max) {    
    return parseInt(Math.random() * (max - min + 1) + min);
}


function alterarStatusbotao() {
    let btn = document.getElementById('btn-reiniciar')

    if (btn.classList.contains('container__botao-desabilitado')) {
        btn.classList.remove('container__botao-desabilitado')
        btn.classList.add('container__botao')
        

    }else {
        btn.classList.remove('container__botao')
        btn.classList.add('container__botao-desabilitado')
        
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '';

    alterarStatusbotao();
    
}
