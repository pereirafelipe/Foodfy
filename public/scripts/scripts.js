const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards){
    card.addEventListener("click", function(){

        modalOverlay.classList.add('active');

        const imagemID = card.getAttribute('id')
        modalOverlay.querySelector('img').src = `/assets/${imagemID}.png`

        const cardInfo = card.querySelector('p').innerHTML
        modalOverlay.querySelector('p').innerHTML = cardInfo

        const cardChef = card.querySelector('h3').innerHTML
        modalOverlay.querySelector('h3').innerHTML = cardChef
    


    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modal.classList.remove("active")
})
