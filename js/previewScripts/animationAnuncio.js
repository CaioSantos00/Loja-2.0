let cardsProdu = document.querySelectorAll('.aCard')
let logoCarregando = document.getElementById("loading")

function carregarProximaPagina(e) {
  e.preventDefault()
    logoCarregando.style.display = "flex";
    console.log('Funciona')
    setTimeout(function() {
        console.log('Funciona o set')
      window.location.href = "../pages/anuncio.html";
    }, 3000);
  }

  cardsProdu.forEach((cadaEle) => {
    cadaEle.addEventListener('click', carregarProximaPagina)
  })