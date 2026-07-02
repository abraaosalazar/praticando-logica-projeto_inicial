function comprar(){
    let categoriaIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    console.log(categoriaIngresso);

    if(parseInt(document.getElementById(`qtd-${categoriaIngresso}`).textContent) < quantidade){
        alert('Quantidade indisponível');
        return;
    } else{
        let resultado = parseInt(document.getElementById(`qtd-${categoriaIngresso}`).textContent) - quantidade;
        alert('Compra realizada com sucesso!')
        document.getElementById(`qtd-${categoriaIngresso}`).innerHTML = resultado;
    }
}
