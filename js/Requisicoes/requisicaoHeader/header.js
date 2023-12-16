async function loadHeader() {
    const resposta = await fetch('../components/header.html')
    const headerText = await resposta.text()
    const headerContainer = document.querySelector('.header');
    console.log(headerText)
     headerContainer.innerHTML = headerText;

     let addMenu = document.getElementById('addMenu')
let removeMenu = document.getElementById('removeMenu')
let nav = document.querySelector('nav')
addMenu.addEventListener('click', ()=> {
	nav.classList.add('navMenu')
    nav.style.transform = 'translateY(0)'
	console.log(nav)
})

removeMenu.addEventListener('click', ()=> {
	//nav.classList.remove('navMenu')
    nav.style.transform = 'translateY(-100%)';
})
}

loadHeader()