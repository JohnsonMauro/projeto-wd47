'use strict';

(function () {

  // Alterar Layout dos Cartões
  const btnMudaLayout = document.querySelector('#btnMudaLayout');
  const mural = document.querySelector('.mural')
  btnMudaLayout.addEventListener("click", function () {
    if (btnMudaLayout.textContent == 'Linhas') {
      btnMudaLayout.textContent = 'Blocos';
    } else {
      btnMudaLayout.textContent = 'Linhas';
    }
  });

  btnMudaLayout.addEventListener("click", function () {
    mural.classList.toggle('mural--linha');
  });

  // Remoção de cartões
  const btnRemoverCartao = document.querySelectorAll('.opcoesDoCartao-remove');
  for (let i = 0; i < btnRemoverCartao.length; i++) {
    btnRemoverCartao[i].addEventListener("click", function () {
      btnRemoverCartao[i].parentNode.parentNode.remove();
    });
  }

})();
