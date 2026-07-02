let participantes = [];
let inputNome = document.getElementById('nome-amigo');

function adicionar(){
    if(inputNome.value != ''){
        nomeParticipante = inputNome.value;
        participantes.push(nomeParticipante)
        console.log(participantes);
        inputNome.value = '';
        document.getElementById('lista-amigos').innerHTML = participantes;
    } else{
        return
    }
}

function sortear(){
    let sorteados = participantes;
    
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }
}

function reiniciar(){
    participantes = [];
    document.getElementById('lista-amigos').innerHTML = participantes;
}

