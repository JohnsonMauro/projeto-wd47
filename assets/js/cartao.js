'use strict';

(function () {

  const cartao = document.querySelectorAll('.cartao');

  cartao.forEach(item => {
    item.addEventListener('focusin', function () {
      item.classList.add('cartao--focado');
    })

    item.addEventListener('focusout', function () {
      item.classList.remove('cartao--focado');
    })
  });

})();