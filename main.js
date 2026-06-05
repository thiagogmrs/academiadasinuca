// Pega o botão
let mybutton = document.getElementById("btnTopo");

// Quando o usuário rolar a página 20 pixels para baixo, mostra o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Quando o usuário clicar no botão, volta ao topo da página de forma suave
function voltaAoTopo() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
