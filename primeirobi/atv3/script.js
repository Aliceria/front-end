const input = document.getElementById('tarefa');
const botao = document.getElementById('adicionar');
const lista = document.getElementById('lista');

botao.addEventListener('click', function () {
    const texto = input.value.trim();

    if (texto === '') {
        return;
    }

    const item = document.createElement('li');
    item.textContent = texto;
    lista.appendChild(item);
    input.value = '';
});

// O evento fica na ul e funciona também para os novos itens.
lista.addEventListener('click', function (evento) {
    if (evento.target.tagName === 'LI') {
        evento.target.remove();
    }
});
