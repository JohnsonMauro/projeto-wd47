; (function () {
  'use strict';

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

})();
