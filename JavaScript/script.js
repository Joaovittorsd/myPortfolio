// Define a função que será executada quando a tecla F5 for pressionada
window.addEventListener("keydown", (event) => {
    if (event.keyCode === 116) { // 116 é o código da tecla F5
      event.preventDefault(); // Previne o comportamento padrão da tecla F5 (recarregar a página)
  
      const intervalo = 10;
      const velocidade = 90;
      let posicaoAtual = window.pageYOffset;
  
      const animarScroll = () => {
        const novaPosicao = posicaoAtual - velocidade;
        if (novaPosicao > 0) {
          window.scrollTo(0, novaPosicao);
          posicaoAtual = novaPosicao;
          setTimeout(animarScroll, intervalo);
        } else {
          window.scrollTo(0, 0);
        }
      };
      animarScroll();
    }
  });
  
  // Define a função que será executada quando a página for carregada novamente
  window.addEventListener("DOMContentLoaded", () => {
    // Verifica se a página foi recarregada após um F5 ou se é o carregamento inicial
    if (performance.navigation.type === 1) { // 1 é o código para recarregamento da página
      // Executa a animação de rolagem suave para o topo da página
      const intervalo = 10;
      const velocidade = 90;
      let posicaoAtual = window.pageYOffset;
  
      const animarScroll = () => {
        const novaPosicao = posicaoAtual - velocidade;
        if (novaPosicao > 0) {
          window.scrollTo(0, novaPosicao);
          posicaoAtual = novaPosicao;
          setTimeout(animarScroll, intervalo);
        } else {
          window.scrollTo(0, 0);
        }
      };
      animarScroll();
    }
  });
  
  // Define a função que será executada quando a página for carregada inicialmente
window.addEventListener('load', function() {
    const linha1 = document.querySelector('.experiencia__linha__1');
    const alturaInicial = linha1.getBoundingClientRect().top - window.innerHeight + 400;
  
    function carregarLinha() {
      if (window.scrollY >= alturaInicial) {
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


function clickMenu() {
  const lista__menu = document.querySelector('.header__menu');
  if (lista__menu.style.display == 'flex') {
    lista__menu.style.display = 'none';
  } else {
    lista__menu.style.display = 'flex';
  }
  lista__menu.style.flexDirection = 'column';

  const container_foto__perfil = document.querySelector('.container__caixa');
    container_foto__perfil.style.marginTop = '5em';

  const foto__perfil = document.querySelector('.foto__perfil')
    foto__perfil.style

  
}
