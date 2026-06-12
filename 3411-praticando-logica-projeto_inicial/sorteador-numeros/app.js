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

    exibirTextoNaTela('subtitulo_resultado', `Numeros sorteados: ${numerosSorteados}`)
}

function limparCampos(){
    let quantidadeNumeros = document.getElementById('quantidade');
    quantidadeNumeros.value = '';
    let numeroInicial = document.getElementById('de');
    numeroInicial.value = '';
    let numeroFinal = document.getElementById('ate');
    numeroFinal.value = '';
}

function reiniciar(){
    numerosSorteados = [];
    limparCampos();
    exibirTextoNaTela('subtitulo_resultado', `Numeros sorteados: nenhum até agora`);
}
