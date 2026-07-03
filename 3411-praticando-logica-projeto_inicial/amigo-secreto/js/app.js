let participantes = [];
let participante = document.getElementById('nome-amigo');

function adicionar(){
    if(participante.value != ''){
        let lista = document.getElementById('lista-amigos');
        participantes.push(participante.value);

        if(lista.textContent == ''){
            lista.textContent = participante.value;
        } else{
            lista.textContent = lista.textContent + ', ' + participante.value;
        }

        participante.value = '';

    } else{
        return
    }
}

function sortear(){
    
    for (let index = 0; index < participantes.length; index++) {
        let idPaticipante = parseInt(Math.random()* participantes.length);
        let idSorteado = parseInt(Math.random()* sorteados.length);

        while (idPaticipante == idSorteado) {
            idSorteado = parseInt(Math.random()* sorteados.length)
        }

        console.log(`Participante: ${participantes[idPaticipante]}, Sorteado: ${sorteados[idSorteado]}`);

        participantes.splice(idPaticipante, 1);
        sorteados.splice(idSorteado, 1);
        
    }
}

function reiniciar(){
    participantes = [];
    lista.textContent = '';
}

