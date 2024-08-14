let slideIndex = 1; // Inicia no primeiro slide
showSlides(slideIndex); // Mostra o primeiro slide automaticamente

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1} // Retorna ao primeiro slide se n for maior que o número de slides
  if (n < 1) {slideIndex = slides.length} // Vai para o último slide se n for menor que 1

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Esconde todos os slides
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // Remove a classe "active" de todos os pontos
  }

  slides[slideIndex-1].style.display = "block"; // Exibe o slide atual
  dots[slideIndex-1].className += " active"; // Adiciona a classe "active" ao ponto correspondente
}
