document.addEventListener('DOMContentLoaded', function () {
    // Selecione os elementos do slideshow
    var slideshow = document.getElementById('slideshow');
    var slideshowContents = document.getElementById('slideshowContents');
    var slides = document.getElementsByClassName('slide');
    var currentIndex = 0;
  
    // Função para mostrar o slide atual
    function showSlide(index) {
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      slides[index].style.display = 'block';
    }
  
    // Função para avançar para o próximo slide
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    // Função para retroceder para o slide anterior
    function lastSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
  
    // Adicionar event listeners para os botões
    var nextButton = document.getElementById('nextSlide');
    var lastButton = document.getElementById('lastSlide');
  
    if (nextButton && lastButton) {
      nextButton.addEventListener('click', nextSlide);
      lastButton.addEventListener('click', lastSlide);
    }
  
    // Inicializar mostrando o primeiro slide
    showSlide(currentIndex);
  });