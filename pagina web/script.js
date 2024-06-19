const allImages = [
    'uno.png', 'dos.png', 'tres.png', 'cuatro.png',
    'cinco.png', 'seis.png', 'siete.png', 'ocho.png',
    'nueve.png', 'diez.png'
];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function createCard(image) {
    const card = document.createElement('div');
    card.classList.add('card');
    
    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');
    
    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    
    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    const img = document.createElement('img');
    img.src = image;
    cardBack.appendChild(img);
    
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        checkMatch();
    });
    
    return card;
}

function checkMatch() {
    const flippedCards = document.querySelectorAll('.flipped');
    if (flippedCards.length === 2) {
        const [firstCard, secondCard] = flippedCards;
        if (firstCard.querySelector('img').src === secondCard.querySelector('img').src) {
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                firstCard.style.visibility = 'hidden';
                secondCard.style.visibility = 'hidden';
            }, 1000);
        } else {
            setTimeout(() => {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
            }, 1000);
        }
    }
}

function initGame(cardCount) {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; // Clear previous game
    const selectedImages = allImages.slice(0, cardCount / 2);
    const gameImages = selectedImages.concat(selectedImages);
    shuffle(gameImages);
    gameImages.forEach(image => {
        const card = createCard(image);
        gameBoard.appendChild(card);
    });
}

function startGame() {
    const cardCount = parseInt(document.getElementById('card-count').value);
    if (cardCount % 2 === 0 && cardCount <= 20 && cardCount >= 2) {
        initGame(cardCount);
    } else {
        alert('Por favor, elige un número par entre 2 y 20.');
    }
}
