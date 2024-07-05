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

gridSize.addEventListener("click", function() {
    userSelectedSize = parseInt(prompt("Enter a grid size less than 100"));

    if (userSelectedSize > 100) {
        alert("Too big");
    } else if (userSelectedSize <= 0) {
        alert("Enter a positive number greater than 0.");
    } else if (Number.isNaN(userSelectedSize)) {
        alert("Not a number")
    } else {
        console.log(userSelectedSize);

        container.innerHTML = "";
        drawGrid(userSelectedSize);
    }

    
})

clearBoard.addEventListener("click", function() {
    container.innerHTML = "";
    drawGrid();
    console.log("cleared");
})


console.log(container);
console.log(drawGrid());


