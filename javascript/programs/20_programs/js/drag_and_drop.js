const sortableList = document.getElementById('sortable-list');
let draggedItem = null;

sortableList.addEventListener('dragstart', function (e) {
    draggedItem = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', draggedItem.textContent);
});

sortableList.addEventListener('dragover', function (e) {
    e.preventDefault();
    const targetItem = e.target;

    if (targetItem && targetItem !== draggedItem && targetItem.classList.contains('sortable-item')) {
        const rect = targetItem.getBoundingClientRect();
        const isAfter = e.clientY > rect.top + rect.height / 2;

        if (isAfter) {
            sortableList.insertBefore(draggedItem, targetItem.nextSibling);
        } else {
            sortableList.insertBefore(draggedItem, targetItem);
        }
    }
});

sortableList.addEventListener('dragend', function () {
    draggedItem = null;
});