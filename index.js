document.addEventListener('DOMContentLoaded', () => {

const grid = document.querySelector('.grid');
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

array.sort(() => Math.random() - 0.5);

var chosen = [];
var options = [];
var matched = [];

function board() {
    for (i = 0; i < array.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'back.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flip);
        grid.appendChild(card);
    }
}

function match() {
    var card = document.querySelectorAll('img');
    const cardOne = options[0];
    const cardTwo = options[1];

    if (chosen[0] == chosen[1]) {
        matched.push(chosen);
    } else {
        card[cardOne].setAttribute('src', 'back.png');
        card[cardTwo].setAttribute('src', 'back.png');
    }
    chosen = [];
    options = [];

    if (matched.length == array.length/2) {
        alert("You've WON!!");
    }
}

function flip() {
    var id = this.getAttribute('data-id');
    chosen.push(array[id].name);
    options.push(id);
    this.setAttribute('src', array[id].img);
    if (chosen.length == 2) {
        setTimeout(match, 500);
    }
}

board();
})