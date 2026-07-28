let participantes = [];
let participante = document.getElementById('nome-amigo');
let lista = document.getElementById('lista-amigos');

function adicionar(){
    if(participante.value != ''){
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
    embaralha(participantes);
    let sorteio = document.getElementById('lista-sorteio');
    for (let index = 0; index < participantes.length; index++) {
        sorteio.innerHTML = sorteio.innerHTML + participantes[index] + '-->' + participantes[index + 1] + '<br>';
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}



function reiniciar(){
    participantes = [];
    lista.textContent = '';
}

