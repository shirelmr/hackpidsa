// script.js
document.addEventListener('DOMContentLoaded', () => {
    const dragItems = document.querySelectorAll('.drag-item');
    const dropZones = document.querySelectorAll('.drop-zone');
    const feedbackElement = document.getElementById('feedback');
    const dragItemsContainer = document.getElementById('drag-items');

    // Posicionar aleatoriamente los elementos arrastrables en la pantalla
    dragItems.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        const x = Math.random() * (dragItemsContainer.clientWidth - item.clientWidth);
        const y = Math.random() * (dragItemsContainer.clientHeight - item.clientHeight);
        item.style.left = `${x}px`;
        item.style.top = `${y}px`;
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleDrop);
    });

    function handleDragStart(e) {
        const color = e.target.dataset.color || e.target.parentElement.dataset.color;
        e.dataTransfer.setData('color', color);
        console.log('Color arrastrado:', color); // Debugging line
    }

    function handleDragOver(e) {
        e.preventDefault(); // Permitir que el elemento sea soltado
    }

    function handleDrop(e) {
        e.preventDefault(); // Prevenir el comportamiento por defecto
        const color = e.dataTransfer.getData('color');
        const dropZone = e.target.closest('.drop-zone');
        const dropZoneColor = dropZone.dataset.color;

        // Verificar y depurar los valores de color
        console.log('Color arrastrado:', color);
        console.log('Color de la zona de caída:', dropZoneColor);

        if (color === dropZoneColor) {
            const item = document.querySelector(`.drag-item[data-color="${color}"][draggable="true"]`);
            if (item) {
                dropZone.appendChild(item);
                item.style.cursor = 'default';
                item.setAttribute('draggable', 'false');
                item.style.position = 'relative';
                item.style.left = '0';
                item.style.top = '0';
                checkCompletion();
            }
        } else {
            alert('¡Color incorrecto! Inténtalo de nuevo.');
        }
    }

    function checkCompletion() {
        const totalItems = dragItems.length;
        const placedItems = document.querySelectorAll('.drop-zone .drag-item').length;

        if (totalItems === placedItems) {
            feedbackElement.textContent = '¡Todas las piezas han sido colocadas correctamente!';
            feedbackElement.style.color = 'green';
        }
    }
});
