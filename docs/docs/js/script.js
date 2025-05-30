document.addEventListener('DOMContentLoaded', () => {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function moveSlide(direction) {
    slideIndex += direction;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    if (slideIndex >= slides.length) slideIndex = 0;
    showSlide(slideIndex);
  }

  // Mostrar slide inicial
  showSlide(slideIndex);

  // Auto troca de slide a cada 5 segundos
  setInterval(() => moveSlide(1), 5000);

  // Menu hamburguer
  function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
  }

  // Tema
  const toggleThemeBtn = document.getElementById('toggle-theme');
  toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    toggleThemeBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
  });

  // Escape HTML para XSS
  function escapeHTML(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // Comentários
  const form = document.getElementById('comentarioForm');
  const listaComentarios = document.getElementById('listaComentarios');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nomeInput = document.getElementById('nome');
    const mensagemInput = document.getElementById('mensagem');

    const nome = escapeHTML(nomeInput.value.trim());
    const mensagem = escapeHTML(mensagemInput.value.trim());

    if (!nome || !mensagem) {
      alert('Por favor, preencha nome e comentário.');
      return;
    }

    const li = document.createElement('li');
    li.innerHTML = `<strong>${nome}</strong>: ${mensagem}`;
    listaComentarios.appendChild(li);

    form.reset();
  });

  // Tornar funções acessíveis no HTML
  window.toggleMenu = toggleMenu;
  window.moveSlide = moveSlide;
});
