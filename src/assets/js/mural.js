; (function () {
  'use strict';

  const mural = $('.mural');

  mural.on('adicionarNovoCartao', (event, conteudo) => adicionarNovoCartao(conteudo));
  
  const adicionarNovoCartao = (conteudo) => {
    let id = mural.children('.cartao').length + 1;
    
    const $cartao = $(`
                      <article id="cartao_${id}" class="cartao" tabindex="0">
                        <div class="opcoesDoCartao">
                          <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                            <svg>
                              <use xlink:href="#iconeRemover"></use>
                            </svg>
                          </button>
  
                          <input type="radio" name="corDoCartao${id}" value="#EBEF40" id="corPadrão-cartao${id}" class="opcoesDoCartao-radioTipo" checked>
                          <label for="corPadrão-cartao${id}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                            Padrão
                          </label>
  
                          <input type="radio" name="corDoCartao${id}" value="#F05450" id="corImportante-cartao${id}" class="opcoesDoCartao-radioTipo">
                          <label for="corImportante-cartao${id}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                            Importante
                          </label>
  
                          <input type="radio" name="corDoCartao${id}" value="#92C4EC" id="corTarefa-cartao${id}" class="opcoesDoCartao-radioTipo">
                          <label for="corTarefa-cartao${id}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                            Tarefa
                          </label>
  
                          <input type="radio" name="corDoCartao${id}" value="#76EF40" id="corInspiração-cartao${id}" class="opcoesDoCartao-radioTipo">
                          <label for="corInspiração-cartao${id}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                            Inspiração
                          </label>
                        </div>
                        <p class="cartao-conteudo" contenteditable tabindex="0">${conteudo}</p>
                      </article>
                    `);

    $cartao
      .on('focusin', () => $cartao.addClass('cartao--focado'))
      .on('focusout', () => $cartao.removeClass('cartao--focado'))
      .on('change', '.opcoesDoCartao-radioTipo', (event) => {
        const inputSelecionado = event.target;
        const cor = inputSelecionado.value;
        $cartao.css('background-color', cor);
      })
      .on('keydown', '.opcoesDoCartao-tipo', (event) => {
        if (event.key == 'Enter' || event.key == ' ') {
          event.target.click();
        }
      })
      .on('click', '.opcoesDoCartao-remove', () => {
        $cartao.addClass('cartao--some');
        $cartao.on('transitionend', () => $cartao.remove());
      })
      .appendTo('.mural');
  };
})();
