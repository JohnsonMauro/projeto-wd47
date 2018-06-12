'use strict';

(function () {

  const modal = document.querySelector('#myModal');
  const btn = document.querySelector("#btnAjuda");
  const span = document.querySelector(".close");

  btn.addEventListener('click', function () {
    modal.style.display = "block";
  });

  span.addEventListener('click', function () {
    modal.style.display = "none";
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });

})();

