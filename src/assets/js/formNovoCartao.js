; (function () {
  'use strict';

  const mural = $('.mural');
  const formNovoCartao = $('.formNovoCartao')

  formNovoCartao.on('submit', (event) => {
    event.preventDefault();
    const conteudo = $(event.target).children('textarea').val().trim();

    if (conteudo) {
      mural.trigger('adicionarNovoCartao', [conteudo]);
      formNovoCartao[0].reset();
    } else {
      const div = document.createElement('div');
      div.textContent = 'Deu Ruim!';
      div.classList.add('formNovoCartao-msg');
      formNovoCartao.appendChild(div);
    }
  })

})();
