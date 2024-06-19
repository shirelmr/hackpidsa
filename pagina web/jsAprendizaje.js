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
