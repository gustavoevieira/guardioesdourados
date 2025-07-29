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

function mostrarDescricao(id) {
  const descricao = document.getElementById(id);
  if (descricao.style.display === "block") {
      descricao.style.display = "none";
  } else {
      descricao.style.display = "block";
  }
}


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

// --- Funcionalidade do Formulário de Inscrição ---

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('inscription-form');

    if (form) { // Executa apenas se o formulário existir na página
        const successMessage = document.getElementById('success-message');

        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o envio real do formulário
            if (validateForm()) {
                // Se o formulário for válido, esconde o formulário e mostra a mensagem de sucesso
                form.style.display = 'none';
                successMessage.style.display = 'block';
                window.scrollTo(0, 0); // Rola a página para o topo
            }
        });

        function validateForm() {
            let isValid = true;
            const inputs = form.querySelectorAll('[required]');

            inputs.forEach(input => {
                const inputGroup = input.parentElement;
                const errorMessage = inputGroup.querySelector('.error-message');
                
                // Limpa erros anteriores
                inputGroup.classList.remove('error');
                errorMessage.textContent = '';

                let hasError = false;

                // Validação para campos de texto e data
                if (input.type === 'text' || input.type === 'date' || input.type === 'tel' || input.type === 'textarea') {
                    if (input.value.trim() === '') {
                        errorMessage.textContent = 'Este campo é obrigatório.';
                        hasError = true;
                    }
                }

                // Validação para email
                if (input.type === 'email') {
                    if (input.value.trim() === '') {
                        errorMessage.textContent = 'Este campo é obrigatório.';
                        hasError = true;
                    } else if (!isValidEmail(input.value)) {
                        errorMessage.textContent = 'Por favor, insira um e-mail válido.';
                        hasError = true;
                    }
                }

                // Validação para checkbox
                if (input.type === 'checkbox') {
                    if (!input.checked) {
                        errorMessage.textContent = 'Você precisa aceitar os termos para continuar.';
                        hasError = true;
                    }
                }

                if (hasError) {
                    inputGroup.classList.add('error');
                    isValid = false;
                }
            });

            return isValid;
        }

        function isValidEmail(email) {
            // Expressão regular simples para validação de e-mail
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }
    }
});

