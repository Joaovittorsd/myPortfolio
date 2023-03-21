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

function downloadPDF() {
  const fileUrl = 'https://drive.google.com/file/d/1GWr04Ndme0Gv3G__fo2ANn5MEZvMWVLV/view?usp=sharing';
  const fileName = 'meu_arquivo.pdf';
  fetch(fileUrl, {
    mode: 'no-cors'
  })
    .then(resp => resp.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    })
    .catch(() => alert('Erro ao fazer download do arquivo.'));
}
