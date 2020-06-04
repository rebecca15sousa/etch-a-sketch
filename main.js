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

function paintCell(bla) {
    bla.style.backgroundColor = 'black';
}

