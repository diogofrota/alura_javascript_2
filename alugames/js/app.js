function alterarStatus(id) {
    let btn = document.getElementById(`game-${id}`);
    let imagem = btn.querySelector('.dashboard__item__img');
    let botao  = btn.querySelector('.dashboard__item__button');


    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar'
        botao.classList.remove('dashboard__item__button--return')
   }   else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver'
        botao.classList.add('dashboard__item__button--return')
   }

}

