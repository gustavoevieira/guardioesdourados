let currentSlide = 0;
const slides = document.querySelectorAll('.carousel img');

// Mostrar a imagem inicial
slides[currentSlide].classList.add('active');

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

function prevSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Troca automática de slides a cada 4 segundos
setInterval(nextSlide, 3200);

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.querySelectorAll('.toggle-content').forEach(function(h2) {
  h2.addEventListener('click', function() {
      this.classList.toggle('active');
      let arrow = this.querySelector('.arrow');
      arrow.textContent = arrow.textContent === '▼' ? '▲' : '▼';
  });
});


// Selecionar todos os links com o atributo href começando com #
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir o comportamento padrão do link

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop, // Posição do elemento
                behavior: 'smooth' // Rolar suavemente
            });
        }
    });
});

