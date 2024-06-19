document.addEventListener('DOMContentLoaded', () => {
    const numberItems = document.querySelectorAll('.number__item');

    numberItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('is-flipped');
            const front = document.createElement('div');
            const back = document.createElement('div');
            front.classList.add('number__item-front', 'number__item-content');
            back.classList.add('number__item-back', 'number__item-content');
            front.textContent = item.dataset.number;
            back.textContent = item.dataset.number;
            if (!item.innerHTML.includes('number__item-front')) {
                item.innerHTML = '';
                item.appendChild(front);
                item.appendChild(back);
            }
        });
    });
});

function generateBalls(inputNumber) {
    const input = document.getElementById(`input${inputNumber}`);
    const value = parseInt(input.value) || 0;
    const container = document.getElementById(`number${inputNumber}`);
    
    // Clear previous balls
    container.innerHTML = '';
    
    // Generate new balls with different colors based on input number
    for (let i = 0; i < value; i++) {
        const ball = document.createElement('div');
        ball.className = 'ball ' + (inputNumber === 1 ? 'ball1' : 'ball2');
        container.appendChild(ball);
    }
    
    calculateDifference();
}

function calculateDifference() {
    const input1 = parseInt(document.getElementById('input1').value) || 0;
    const input2 = parseInt(document.getElementById('input2').value) || 0;
    const difference = Math.max(0, input1 - input2); // Ensure the result is not negative
    document.getElementById('result').value = difference;
    
    // Visual representation of the result
    const resultContainer = document.getElementById('result-balls');
    resultContainer.innerHTML = '';
    for (let i = 0; i < difference; i++) {
        const ball = document.createElement('div');
        ball.className = 'ball ball3';
        resultContainer.appendChild(ball);
    }
}