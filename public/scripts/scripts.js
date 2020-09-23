const cards = document.querySelectorAll('.card');


for (let i=0; i < cards.length; i++) {
    const recipe = cards[i]
    recipe.addEventListener('click', () => {
        window.location.href = `/recipes/${i}`
    })
}

