const linhas = document.querySelectorAll('.tecnologia__linha__1');
linhas.forEach((linha) => {
  const porcentagem = linha.dataset.porcentagem;
  linha.style.width = porcentagem + '%';
  if (porcentagem > 0) {
    linha.classList.add('preenchido');
  }
});