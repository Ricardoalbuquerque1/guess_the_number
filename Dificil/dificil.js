const acertos = [];
const outErro = document.querySelector('#outErro');
const respAcerto = document.querySelector('#respAcerto');
const btAgain = document.querySelector('#outAgain');
const change = document.querySelector('.change');
const doors = Array.from(document.querySelectorAll('.door'));
let sorteado = Math.floor(Math.random() * doors.length); 
let escolha;


doors.forEach((door, index) => {
  door.addEventListener('click', () => {
    escolha = index;
    checkGuess(escolha);
  });
});


function checkGuess(escolha) {
  if (escolha === sorteado) {
    acertos.push(escolha);
    respAcerto.innerText = `${acertos.length}/3`;
    sorteado = Math.floor(Math.random() * doors.length); 
    if (acertos.length === 3) {
      outErro.innerText = 'PARABÉNS!!! VOCÊ GANHOU';
      btAgain.classList.add('exibe');
      change.style.color = '#57924b';
    }
  } else {
    doors.forEach(door => door.disabled = true);
    outErro.innerText = 'Fim de jogo...';
    btAgain.classList.add('exibe');
    change.style.color = '#914a4a';
    doors.forEach(door => {
      door.style.color = '#FFF';
      door.style.transition = 'background-color 1s';
      door.style.backgroundColor = '#914a4a';
    });
  }
}


btAgain.addEventListener('click', () => {
  location.reload();
});
