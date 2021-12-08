const array = [
    {
        name: 'heart',
        img: 'heart.jpg'
    },
    {
        name: 'heart',
        img: 'heart.jpg'
    },
    {
        name: 'diamond',
        img: 'diamond.jpg'
    },
    {
        name: 'diamond',
        img: 'diamond.jpg'
    },
    {
        name: 'spade',
        img: 'spade.jpg'
    },
    {
        name: 'spade',
        img: 'spade.jpg'
    },
    {
        name: 'clover',
        img: 'clover.jpg'
    },
    {
        name: 'clover',
        img: 'clover.jpg'
    }
]

const grid = document.querySelector('.grid');

function board() {
    for (i = 0; i <array.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'back.png');
        card.setAttribute('data-id', i);
        //card.addEventListener('click', flip);
        grid.appendChild(card);
    }
}



function flip() {
    
}

board();