const container = document.querySelector('.container');

let cell;
let size = 16;

function makeGrid(units) {
    container.style.setProperty('--columns', units);
    container.style.setProperty('--rows', units);
    for(let i = 0; i < (units * units); i++) {
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
    size = prompt('What size?');
    Number(size);
    makeGrid(size)
})

function clearGrid(cellErase) {
    cellErase.forEach(function(contCell) {
        contCell.style.backgroundColor = 'white';
    })
}

