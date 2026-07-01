let produtosCarrinho = [];
let valorUnitário = [];
let valorTotal = 0

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProtuto = parseInt(produto.split('R$')[1]);
    let quantidade = document.getElementById('quantidade').value;

    for (let index = 0; index < quantidade; index++) {
            produtosCarrinho.push(nomeProduto);
            valorTotal = valorTotal + valorProtuto;

    }
    document.getElementById('valor-total').innerHTML = `R$ ${valorTotal}`;
    console.log(produtosCarrinho);
    console.log(valorUnitário);
    console.log(valorTotal);
}

function limpar(){
    valorTotal = 0
    document.getElementById('valor-total').innerHTML = `R$ ${valorTotal}`;
    produtosCarrinho = [];
    console.log(produtosCarrinho);
}
