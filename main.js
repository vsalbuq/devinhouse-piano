//TODO

//Pegar todas as teclas do piano
var teclas = document.querySelectorAll('.key');

function obterDataKey(evento) {
  var ehTeclado = evento.type === 'keydown';

  if (ehTeclado) {
    tocarNota(evento.keyCode)
  }
  else {
    var dataKey = evento.target.getAttribute('data-key');
    tocarNota(dataKey)
  }
}

//Tocar notas
function tocarNota(dataKey) {
  var audio = document.querySelector('audio[data-key="' + dataKey + '"]');

  audio.play();
}

//Tocar notas ao clicar na tecla com o mouse
for (var tecla of teclas) {
  tecla.addEventListener('click', obterDataKey);
  tecla.addEventListener('mouseover', obterDataKey);
}

//Tocar notas ao apertar tecla do teclado

document.addEventListener('keydown', obterDataKey);

document.body.addEventListener("mouseleave", function () { alert("NÃO SE VÁ!!!!!!") })