let carrinho = [];
function adicionar(){
    let produto = document.getElementById('produto').value;
    carrinho.push(produto);
    console.log(carrinho);
}

function limpar(){
    carrinho = [];
    console.log(carrinho);
}