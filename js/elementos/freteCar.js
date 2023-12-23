let divFrete = document.getElementById('divFrete'),
    divInputFrete = document.getElementById('divInputFrete')
let descriptionFalseTrue = false

divFrete.addEventListener('click', () =>{
    descriptionFalseTrue = !descriptionFalseTrue

    divFrete.style.overflow = 'visible'
    divFrete.style.height = '100%'
    divInputFrete.style.transform = 'translateY(0px)'
    /*if (!descriptionFalseTrue) {
        divFrete.style.overflow = 'hidden'
        divInputFrete.style.transform = 'translateY(100%)'
        divFrete.style.height = '20px'
    }*/
})