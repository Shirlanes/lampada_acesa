const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function lampOn() {
  lamp.src = './img/lampada_acesa.jpg';
}

function lampOff() {
  lamp.src = './img/lampada_apagada.jpg';
}

function lampBroken() {
  lamp.src = './img/lampada_quebrada.jpg';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
