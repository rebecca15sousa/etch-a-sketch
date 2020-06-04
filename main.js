const container = document.querySelector('.container');

let cell;
let size = 16;

function makeGrid(size) {
    container.style.setProperty('--columns', size);
    container.style.setProperty('--rows', size);
    for(let i = 0; i < (size * size); i++) {
        cell = document.createElement('div');
        cell.classList.add('contCell');
        container.appendChild(cell);
    }
}

makeGrid(size);

const cellBlack = document.querySelectorAll('.contCell');
cellBlack.forEach(function(contCell) {
    contCell.addEventListener('mouseover', function() {
        //contCell.style.backgroundColor = 'black';
        paintCell(contCell);
    })
})

function paintCell(cellColor) {
    cellColor.style.backgroundColor = 'black';
}

const button = document.querySelector('.btn');
button.addEventListener('click', function() {
    clearGrid(cellBlack);
})

function clearGrid(cellErase) {
    cellErase.forEach(function(contCell) {
        contCell.style.backgroundColor = 'white';
    })
}

