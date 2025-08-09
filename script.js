
const container = document.querySelector('.container');
let gridDiv = [];
let gridSize = 16;


function makeGrid(a) {
    for (let row = 0; row < a; row++) {
        gridDiv[row] = [];
        for (let col = 0; col < a; col++) {
            gridDiv[row][col] = document.createElement('div');
            container.appendChild(gridDiv[row][col]);
            gridDiv[row][col].classList.add('grid-box');
            gridDiv[row][col].setAttribute('id', 'gridbox')
            gridDiv[row][col].style.width = `${800 / gridSize}px`
            gridDiv[row][col].style.height = `${800 / gridSize}px`
        }
    }

}

function deleteGrid(a) {
    for (let row = 0; row < a; row++) {
        for (let col = 0; col < a; col++) {
            gridDiv[row][col].remove();
        }
    }
}


makeGrid(gridSize);



document.addEventListener('click', (e) => {
    const eTarget = e.target.id
    if (eTarget === 'resize') {
        deleteGrid(gridSize);
        do {
            gridSize = prompt("Select new grid dimension between 1-100 i.e 1x1,100x100");
        } while (gridSize > 100 || gridSize < 1)

        makeGrid(gridSize);

    } else if (eTarget === 'clear') {
        deleteGrid(gridSize);
    } else if (eTarget === 'gridbox') {
        e.target.style.backgroundColor = 'red';
    }
})

document.addEventListener('mouseover', (e) => {
    const eTarget = e.target.id
    if (eTarget === 'gridbox' && e.shiftKey) {
        e.target.style.backgroundColor = 'red';
    }
})