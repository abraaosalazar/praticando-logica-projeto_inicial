let participantes = [];
let participante = document.getElementById('nome-amigo');
let lista = document.getElementById('lista-amigos');
let sorteio = document.getElementById('lista-sorteio');

function adicionar(){
    if(participantes.includes(participante.value)){
        alert('Participante já adicionado');
        return;
    }

    if(participante.value != ''){
        participantes.push(participante.value);

        if(lista.textContent == ''){
            lista.textContent = participante.value;
        } else{
            lista.textContent = lista.textContent + ', ' + participante.value;
        }

        participante.value = '';

    } else{
        alert('O campo de nome não pode estar em branco');
        return
    }
}

function sortear(){
    if(participantes.length < 4){
        alert('Insira pelo menos 4 participantes');
        return;
    }

    embaralha(participantes);
    
    for (let index = 0; index < participantes.length; index++) {
       if (index == participantes.length - 1){
         sorteio.innerHTML = sorteio.innerHTML + participantes[index] + '-->' + participantes[0] + '<br>';
       } else{
         sorteio.innerHTML = sorteio.innerHTML + participantes[index] + '-->' + participantes[index + 1] + '<br>';
       }
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
    sorteio.innerHTML = ''
    lista.innerHTML = ''
}

