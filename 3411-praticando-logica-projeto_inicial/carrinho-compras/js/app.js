let valorTotal = 0;
let carrinho = document.getElementById('lista-produtos');
carrinho.textContent = '';
document.getElementById('valor-total').textContent = 'R$ 0';

function adicionar(){
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    if(isNaN(quantidade) || quantidade <= 0){
        alert('Quantidade inválida');
        return;
    }
    let nomeProduto = produto.split('-')[0];
    let valorProtuto = parseInt(produto.split('R$')[1]);
    valorTotal = valorTotal + (valorProtuto*quantidade);
    document.getElementById('valor-total').innerHTML = `R$ ${valorTotal}`;
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProtuto}</span>
        </section>`
    console.log(valorTotal);
    document.getElementById('quantidade').value = '';

}

function limpar(){
    valorTotal = 0
    document.getElementById('valor-total').textContent = `R$ ${valorTotal}`;
    produtosCarrinho = [];
    console.log(produtosCarrinho);
    carrinho.innerHTML = ''
}
