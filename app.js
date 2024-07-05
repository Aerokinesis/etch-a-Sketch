// create divs in container

const container = document.querySelector("#container");
const gridSize = document.querySelector("#changeGridSize");
const clearBoard = document.querySelector("#clearBoard");

const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;


console.log(containerWidth);
console.log(containerHeight);

function drawGrid(size = 16) {
    for (let i = 0; i < size * size; i++) {
        let board = document.createElement('div');
        board.classList.add("items");

        board.addEventListener("mouseover", function() {
            this.style.backgroundColor = "black";
        });

        board.style.width = `${containerWidth / size}px`;
        board.style.height = `${containerHeight / size}px`;
        container.appendChild(board);
    }
}

console.log(container);
console.log(drawGrid());


