  let lastScroll = window.scrollY;
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
      // Rolar pra baixo
      header.style.top = "-150px"; // ajuste se o header for mais alto
    } else {
      // Rolar pra cima
      header.style.top = "0";
    }

    lastScroll = currentScroll;
  });


  setTimeout(() => {
    const header = document.getElementById('header');
    header.style.top = "-150px"; // Ajuste conforme a altura do seu header
  }, 3000); // 3000 milissegundos = 3 segundos

