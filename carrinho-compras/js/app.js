let totalgeral  = 0;

function adicionar() {
    let produto  = document.getElementById('produto').value;
    let quantidade  = document.getElementById('quantidade').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];

    let preco = quantidade * valorUnitario;

    
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul"> ${preco} </span> </section>`

    totalgeral = totalgeral + preco;

    let campototal = document.getElementById('valor-total');

    campototal.textContent = `R$ ${totalgeral}`;

    quantidade  = document.getElementById('quantidade').value = 0;


}



function limpar() {
    carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = '';

    campototal = document.getElementById('valor-total').textContent = 'R$ 0,00'

}

