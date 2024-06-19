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
    
    calculateProduct();
}

function calculateProduct() {
    const input1 = parseInt(document.getElementById('input1').value) || 0;
    const input2 = parseInt(document.getElementById('input2').value) || 0;
    const product = Math.max(0, input1 * input2); // Ensure the result is not negative
    document.getElementById('result').value = product;
    
    // Visual representation of the result
    const resultContainer = document.getElementById('result-balls');
    resultContainer.innerHTML = '';
    
    let box, ball;
    for (let i = 0; i < product; i++) {
        if (i % 10 === 0) {
            box = document.createElement('div');
            box.className = 'box';
            const label = document.createElement('div');
            label.className = 'box-label';
            label.textContent = `Caja ${Math.floor(i / 10) + 1}`;
            box.appendChild(label);
            resultContainer.appendChild(box);
        }
        ball = document.createElement('div');
        ball.className = 'ball ball3';
        box.appendChild(ball);
    }
}
