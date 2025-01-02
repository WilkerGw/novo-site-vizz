document.querySelectorAll('.header__menu ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Impede o comportamento padrão do link
      
      const targetId = this.getAttribute('href').slice(1); // Pega o ID do destino
      const targetElement = document.getElementById(targetId);
  
      // Rola suavemente até a seção alvo
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Centraliza a rolagem na seção
      });
    });
  });
  