const acertos = [];
const outErro = document.querySelector('#outErro')
const respAcerto = document.querySelector('#respAcerto')
const btAgain = document.querySelector ('#outAgain');
const change = document.querySelector ('.change')
const out1 = document.querySelector ('#out1')
const out2 = document.querySelector ('#out2')
const out3 = document.querySelector ('#out3')
let sorteado = Math.floor(Math.random() *3) +1;
let escolha

function porta1() {
    escolha = 1; 
    if (escolha == sorteado){
        acertos.push(escolha)
        const numAcertos = acertos.length
        respAcerto.innerText = numAcertos + '/3'
        sorteado = Math.floor(Math.random() *3) +1;
    if(numAcertos==3){
        outErro.innerText = 'PARABENS!!! VOCÊ GANHOU'
        btAgain.className = 'exibe';
        change.style.color = '#57924b'
        }
    } else {
        out1.disabled=true;
        out2.disabled=true;
        out3.disabled=true;
        outErro.innerText = 'Game over...';
        btAgain.className = 'exibe';
        change.style.color = '#914a4a'
        out1.style.color = '#FFF'
        out2.style.color = '#FFF'
        out3.style.color = '#FFF'
        out1.style.transition = 'background-color 1s'
        out2.style.transition = 'background-color 1s'
        out3.style.transition = 'background-color 1s'
        out1.style.backgroundColor = '#914a4a'
        out2.style.backgroundColor = '#914a4a'
        out3.style.backgroundColor = '#914a4a'
    }

    btAgain.addEventListener('click',() =>{
        location.reload()
})
    
}

function porta2() {
    escolha = 2; 
    if (escolha == sorteado){
        acertos.push(escolha)
        const numAcertos = acertos.length
        respAcerto.innerText = numAcertos + '/3'
        sorteado = Math.floor(Math.random() *3) +1;
    if(numAcertos==3){
        outErro.innerText = 'PARABENS!!! VOCÊ GANHOU'
        btAgain.className = 'exibe';
        change.style.color = '#57924b'
        }
    } else {
        out1.disabled=true;
        out2.disabled=true;
        out3.disabled=true;
        outErro.innerText = 'Game over...';
        btAgain.className = 'exibe';
        change.style.color = '#914a4a'
        out1.style.color = '#FFF'
        out2.style.color = '#FFF'
        out3.style.color = '#FFF'
        out1.style.transition = 'background-color 1s'
        out2.style.transition = 'background-color 1s'
        out3.style.transition = 'background-color 1s'
        out1.style.backgroundColor = '#914a4a'
        out2.style.backgroundColor = '#914a4a'
        out3.style.backgroundColor = '#914a4a'
    }
    btAgain.addEventListener('click',() =>{
        location.reload()
})
}

function porta3() {
    escolha = 3;
    if (escolha == sorteado){
        acertos.push(escolha)
        const numAcertos = acertos.length
        respAcerto.innerText = numAcertos + '/3'
        sorteado = Math.floor(Math.random() *3) +1;
    if(numAcertos==3){
        outErro.innerText = 'PARABENS!!! VOCÊ GANHOU'
        btAgain.className = 'exibe';
        change.style.color = '#57924b'
        }
    } else {
        out1.disabled=true;
        out2.disabled=true;
        out3.disabled=true;
        outErro.innerText = 'Game over...';
        btAgain.className = 'exibe';
        change.style.color = '#914a4a'
        out1.style.color = '#FFF'
        out2.style.color = '#FFF'
        out3.style.color = '#FFF'
        out1.style.transition = 'background-color 1s'
        out2.style.transition = 'background-color 1s'
        out3.style.transition = 'background-color 1s'
        out1.style.backgroundColor = '#914a4a'
        out2.style.backgroundColor = '#914a4a'
        out3.style.backgroundColor = '#914a4a'
    }
    btAgain.addEventListener('click',() =>{
        location.reload()
})
}

