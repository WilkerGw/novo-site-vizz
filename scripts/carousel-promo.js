document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentIndex = 0;
  
    function showNextSlide() {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length; // Loop circular
      slides[currentIndex].classList.add('active');
    }
  
    // Troca de imagem a cada 1 segundo
    setInterval(showNextSlide, 1000);
  });
  