 // 1. FILTRAR POR CATEGORIA (ABAS)
    function filtrarCategoria(idCategoria, elementoBtn) {
      // Atualiza estado visual dos botões
      const botoes = document.querySelectorAll('.nav-btn');
      botoes.forEach(btn => btn.classList.remove('active'));
      if (elementoBtn) elementoBtn.classList.add('active');

      // Limpa a busca ao trocar de categoria
      document.getElementById('inputPesquisa').value = '';

      const secoes = document.querySelectorAll('.categoria');
      secoes.forEach(secao => {
        const cards = secao.querySelectorAll('.card');
        cards.forEach(card => card.style.display = 'flex');

        if (idCategoria === 'todas' || secao.id === idCategoria) {
          secao.style.display = 'block';
        } else {
          secao.style.display = 'none';
        }
      });
    }

    // 2. BUSCA/PESQUISA EM TEMPO REAL
    function pesquisarCardapio() {
      const termo = document.getElementById('inputPesquisa').value.toLowerCase().trim();
      const secoes = document.querySelectorAll('.categoria');

      // Reseta ativo dos botões ao pesquisar
      if (termo.length > 0) {
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
      }

      secoes.forEach(secao => {
        let possuiItemVisivel = false;
        const cards = secao.querySelectorAll('.card');

        cards.forEach(card => {
          const titulo = card.querySelector('h3') ? card.querySelector('h3').innerText.toLowerCase() : '';
          const descricao = card.querySelector('p') ? card.querySelector('p').innerText.toLowerCase() : '';

          if (titulo.includes(termo) || descricao.includes(termo)) {
            card.style.display = 'flex';
            possuiItemVisivel = true;
          } else {
            card.style.display = 'none';
          }
        });

        // Mostra a seção inteira se houver correspondência dentro dela
        if (possuiItemVisivel) {
          secao.style.display = 'block';
        } else {
          secao.style.display = 'none';
        }
      });
    }

    // 3. EXIBIÇÃO DO BOTÃO VOLTAR AO TOPO
    const btnTopo = document.getElementById("btnTopo");

    window.onscroll = function () {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTopo.style.display = "flex";
      } else {
        btnTopo.style.display = "none";
      }
    };

    function voltaAoTopo() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
