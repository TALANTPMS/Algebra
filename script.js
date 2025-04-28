const cardsContainer = document.getElementById('cardsContainer');
const shuffleBtn = document.querySelector('.shuffle-btn');
const singleCardContainer = document.getElementById('singleCard');
const prevBtn = document.getElementById('prevCard');
const nextBtn = document.getElementById('nextCard');
const progressElem = document.getElementById('progress');
const viewedCardsContainer = document.getElementById('viewedCards');
let viewedCards = new Set();

let currentIndex = 0;
let cardsOrder = [];

function createCard(cardData) {
    const card = document.createElement('div');
    card.className = 'flash-card';
    card.style.cursor = 'pointer'; // Добавляем курсор-указатель

    const front = document.createElement('div');
    front.className = 'card-front';
    front.innerHTML = cardData.question;

    const back = document.createElement('div');
    back.className = 'card-back';
    back.innerHTML = cardData.answer;

    card.appendChild(front);
    card.appendChild(back);

    // Добавляем обработчик клика прямо здесь
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        if (card.classList.contains('flipped')) {
            addToHistory(cardData);
        }
        if (window.MathJax) {
            MathJax.typesetPromise();
        }
    });

    return card;
}

function renderSingleCard(cardData) {
    singleCardContainer.innerHTML = '';
    const card = createCard(cardData);
    singleCardContainer.appendChild(card);

    if (window.MathJax) {
        MathJax.typesetPromise();
    }
}

function showCurrentCard() {
    renderSingleCard(cardsOrder[currentIndex]);
    updateProgress();
    updateNavButtons();
}

function addToHistory(cardData) {
    if (!viewedCards.has(cardData.question)) {
        viewedCards.add(cardData.question);
        
        const historyCard = document.createElement('div');
        historyCard.className = 'viewed-card';
        
        const question = document.createElement('div');
        question.className = 'question';
        question.textContent = cardData.question;
        
        const answer = document.createElement('div');
        answer.className = 'answer';
        answer.innerHTML = cardData.answer;
        
        historyCard.appendChild(question);
        historyCard.appendChild(answer);
        viewedCardsContainer.appendChild(historyCard);

        if (window.MathJax) {
            MathJax.typesetPromise();
        }
    }
}

function shuffleCards() {
    // Выбираем новые 30 карточек из полного набора
    cardsOrder = [...allCardsData].sort(() => Math.random() - 0.5).slice(0, 30);
    currentIndex = 0;
    showCurrentCard();
}

function updateProgress() {
    progressElem.textContent = `${currentIndex + 1} / ${cardsDataFull.length}`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : cardsDataFull.length - 1;
    showCurrentCard();
});

nextBtn.addEventListener('click', () => {
    currentIndex = currentIndex < cardsDataFull.length - 1 ? currentIndex + 1 : 0;
    showCurrentCard();
});

function updateNavButtons() {
    // Убираем disabled состояние, так как теперь циклическая навигация
    prevBtn.disabled = false;
    nextBtn.disabled = false;
}

shuffleBtn.addEventListener('click', shuffleCards);

// Удаляем const swapModeBtn и его обработчик, так как он нам больше не нужен

// Initial render
shuffleCards();
