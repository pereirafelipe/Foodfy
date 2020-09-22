const cards = document.querySelectorAll('.card');
const list = document.querySelectorAll('#submenu');

button1.addEventListener("click", () => {
    submenu.style.display == 'none'
})



for (let i=0; i < cards.length; i++) {
    const recipe = cards[i]
    recipe.addEventListener('click', () => {
        window.location.href = `/recipes/${i}`
    })
}

