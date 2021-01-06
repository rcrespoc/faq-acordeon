((d) => {
  const $menues = d.querySelectorAll(".option-title > button");
  const $parrafos = d.querySelectorAll(".option-body");
  const $titulos = d.querySelectorAll('.option-title > p');
  $menues.forEach(boton => {
    boton.addEventListener('click', e => {
      $parrafos[boton.dataset.id].classList.toggle("none");
      $titulos[boton.dataset.id].classList.toggle("fw-bold");
    })
  })
})(document);
