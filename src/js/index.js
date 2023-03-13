document.querySelectorAll('.botao').forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        botaoSelecionado(botao);
        alterarImagem(indice);
    })
})

function alterarImagem(indice) {
    document.querySelector('.ativa').classList.remove('ativa');
    document.querySelectorAll('.imagem')[indice].classList.add('ativa');
}

function botaoSelecionado(botao) {
    document.querySelector('.selecionado').classList.remove('selecionado');
    botao.classList.add('selecionado');
}

