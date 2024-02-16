const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isBroken()) {
        lamp.src = "./imagens/ligada.png"
    }
}

function lampOff() {
    if (!isBroken()) {
        lamp.src = './imagens/apagada.png'
    }
}

function lampBreak() {
    lamp.src = './imagens/quebrada.png'
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBreak)