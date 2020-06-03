const container = document.querySelector('.container');

let size = 16;

function makeGrid(size) {
    container.style.setProperty('--columns', size);
    container.style.setProperty('--rows', size);
    for(let i = 0; i < (size * size); i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
}

makeGrid(size);