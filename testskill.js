document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.word-list, .source-words');
    
    containers.forEach(container => {
        new Sortable(container, {
            group: 'shared',
            animation: 150,
            ghostClass: 'dragging',
            onStart: function(evt) {
                evt.item.classList.add('dragging');
            },
            onEnd: function(evt) {
                evt.item.classList.remove('dragging');
            },
            onChange: function(evt) {
                updateContainerStyles();
            }
        });
    });

    document.querySelectorAll('.word-list').forEach(container => {
        container.addEventListener('dragenter', function() {
            this.classList.add('dragover');
        });

        container.addEventListener('dragleave', function() {
            this.classList.remove('dragover');
        });

        container.addEventListener('drop', function() {
            this.classList.remove('dragover');
        });
    });
});

function updateContainerStyles() {
    document.querySelectorAll('.word-list').forEach(container => {
        if (container.children.length > 0) {
            container.style.backgroundColor = '#f8f9fa';
        } else {
            container.style.backgroundColor = '';
        }
    });
}

function checkAnswers() {
    const bakuContainer = document.getElementById('baku');
    const tidakBakuContainer = document.getElementById('tidakBaku');
    let correct = 0;
    let total = 0;

    document.querySelectorAll('.word-item').forEach(item => {
        item.style.backgroundColor = '';
    });

    bakuContainer.querySelectorAll('.word-item').forEach(item => {
        total++;
        if (item.dataset.correct === 'baku') {
            correct++;
            item.style.backgroundColor = '#90EE90';
            item.style.color = '#006400';
        } else {
            item.style.backgroundColor = '#FFB6C1';
            item.style.color = '#8B0000';
        }
    });

    tidakBakuContainer.querySelectorAll('.word-item').forEach(item => {
        total++;
        if (item.dataset.correct === 'tidakBaku') {
            correct++;
            item.style.backgroundColor = '#90EE90';
            item.style.color = '#006400';
        } else {
            item.style.backgroundColor = '#FFB6C1';
            item.style.color = '#8B0000';
        }
    });

    const scoreElement = document.getElementById('score');
    const percentage = Math.round((correct / total) * 100) || 0;

    scoreElement.style.opacity = '0';
    setTimeout(() => {
        scoreElement.textContent = `Skor Anda: ${correct}/${total} (${percentage}%)`;
        scoreElement.style.opacity = '1';
    }, 200);

    const checkButton = document.querySelector('.check-button');
    checkButton.disabled = true;
    checkButton.style.opacity = '0.7';
    setTimeout(() => {
        checkButton.disabled = false;
        checkButton.style.opacity = '1';
    }, 1500);
}