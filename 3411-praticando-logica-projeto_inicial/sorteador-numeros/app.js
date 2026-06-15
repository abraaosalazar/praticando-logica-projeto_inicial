let numerosSorteados = [];

function exibirTextoNaTela(id, texto){
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function mensagemInicial(){
    exibirTextoNaTela('subtitulo_resultado', 'Números sorteados: nenhum até agora');
}

mensagemInicial();

function gerarNumeros(min,max){
    return(parseInt(Math.random()*(max - min + 1)));
}
    
function sortear(){
    numerosSorteados = [];
    let quantidadeNumeros = parseInt(document.getElementById('quantidade').value);
    let numeroInicial = parseInt(document.getElementById('de').value);
    let numeroFinal = parseInt(document.getElementById('ate').value);
    
    for(let i = 1; i <= quantidadeNumeros; i++){
        let numeroGerado = gerarNumeros(numeroInicial, numeroFinal);

        while (numerosSorteados.includes(numeroGerado)){
            numero = gerarNumeros(numeroInicial, numeroFinal);
        }

        numerosSorteados.push(numeroGerado);
    }
    console.log(numerosSorteados);
    alterarStatusBotao();

    exibirTextoNaTela('subtitulo_resultado', `Numeros sorteados: ${numerosSorteados}`)
}

function limparCampos(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}

function reiniciar() {
    numerosSorteados = [];
    limparCampos();
    exibirTextoNaTela('subtitulo_resultado', `Numeros sorteados: nenhum até agora`);
    alterarStatusBotao();
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}