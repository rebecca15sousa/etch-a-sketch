let container = document.querySelector('.container');

let cell;
let cellAllColor;
let size = 16;

function makeGrid(units) {
    container.style.setProperty('--columns', units);
    container.style.setProperty('--rows', units);
    for(let i = 0; i < (units * units); i++) {
        cell = document.createElement('div');
        cell.classList.add('contCell');
        container.appendChild(cell);
        selectCells();
    }
}

makeGrid(size);

function selectCells() {
    cellAllColor = document.querySelectorAll('.contCell');
    cellAllColor.forEach(function(contCell) {
        contCell.addEventListener('mouseover', function() {
            paintCell(contCell);
        });
    });
}

function paintCell(cellColor) {
    cellColor.style.backgroundColor = 'black';
}

const button = document.querySelector('.btn');
button.addEventListener('click', function() {
    container.textContent = '';
    let cellArray = Array.from(cellAllColor);
    cellArray = [];
    size = prompt('What size?');
    Number(size);
    makeGrid(size);
});

