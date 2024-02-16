const veiculos = document.getElementById('veiculos');
const pedestres = document.getElementById('pedestre');
const andar = document.getElementById('andar');

function amarelo() {
    veiculos.src = './imagens/amarelo.png';

}

function fecharVeiculos() {
    veiculos.src = './imagens/vermelho.png';
    pedestre.src = './imagens/pedestre-verde.png';

}

andar.addEventListener('click', amarelo);
andar.addEventListener('mouseleave', fecharVeiculos);