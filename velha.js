let count = 1;
let count_modo = 0;
let modo = 'Normal';

function AlterarModo() {
  count_modo++;
  if (count_modo % 2 == 1) {
    modo = 'Infinito';
  }
  if (count_modo % 2 == 0) {
    modo = 'Normal';
  }
  document.getElementById('modo').innerHTML = `Alterar modo: ${modo}`;
}

function pressionado(posicao) {
  let espaco = document.getElementById(`espaco${posicao}`);

  if (modo == 'Normal') {
    if (espaco.innerHTML !== '-') return;
    espaco.innerHTML = count % 2 == 1 ? 'X' : 'O';
  }

  if (modo == 'Infinito') {
    if (count % 2 == 1 && espaco.innerHTML !== 'X') {
      espaco.innerHTML = 'X';
    }
    if (count % 2 == 0 && espaco.innerHTML !== 'O') {
      espaco.innerHTML = 'O';
    }
  }
  count++;
  VerificarGanhador();
}

function VerificarGanhador() {
  let g = (i) => document.getElementById(`espaco${i}`).innerHTML;
  let ganhador = document.getElementById('ganhador');

  const lista = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3],
  ];
  for (let [a, b, c] of lista) {
    if (g(a) !== '-' && g(a) == g(b) && g(b) == g(c)) {
      ganhador.innerHTML = `O Jogador ${g(a)} venceu`;
      return;
    }
  }
}

function reiniciar() {
  const espacos = document.querySelectorAll('.espacos');

  for (let espaco of espacos) {
    espaco.innerHTML = '-';
  }
  count = 1;
  document.getElementById('ganhador').innerHTML = 'Ganhador ainda não decidido';
  return;
}
