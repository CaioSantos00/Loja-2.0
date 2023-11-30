let cardsProdu = document.querySelectorAll('.aCard')
let logoCarregando = document.getElementById("loading")

function carregarProximaPagina() {
    logoCarregando.style.display = "flex";
    console.log('Funciona')
    setTimeout(function() {
        console.log('Funciona o set')
      window.location.href = "../../pages/anuncio.html";
    }, 50000);
  }

  cardsProdu.forEach((cadaEle) => {
    cadaEle.addEventListener('click', ()=>{
        console.log('Clicado')
        carregarProximaPagina()
    })
  })