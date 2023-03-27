
// Define a função que será executada quando a página for carregada inicialmente
window.addEventListener('load', function() {
  const linha1 = document.querySelector('.experiencia__linha__1');
  const alturaInicial = linha1.getBoundingClientRect().top - window.innerHeight + 400;

  function carregarLinha() {
    if (window.innerWidth <= 768) {
      linha1.style.height = '1000px';
    } else if (window.scrollY >= alturaInicial) {
      linha1.style.height = '825px';
    }
  }

  window.addEventListener('scroll', carregarLinha);
});



const menuLinks = document.querySelectorAll(".smooth-scroll");

// adicionar ouvinte de eventos para cada tag do menu
menuLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault(); // evitar que a tag 'a' recarregue a página
    const section = document.querySelector(this.hash);
    section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" }); // rolar para a seção de destino
  });
});

