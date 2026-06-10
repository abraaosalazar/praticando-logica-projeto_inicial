function exibirTextoNaTela(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

mensagemInicial();

function mensagemInicial(){
    exibirTextoNaTela('subtitulo_resultado', 'Números sorteados: nenhum até agora');
}
    
function sortear(){
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroFinal = parseInt(document.getElementById('ate').value);
    let numerosSorteados = [];

    for(let i = 1; i <= quantidadeNumeros; i++){
        numerosSorteados.push(parseInt(Math.random()*numeroFinal + numeroInicial));
    }
    console.log(numerosSorteados);
    exibirTextoNaTela('subtitulo_resultado', `Numeros sorteados: ${numerosSorteados}`)
}


