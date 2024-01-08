let numberOfBlocks = 4;
let width = 500;
let divBlock = document.querySelector(".block-div");
let button = document.querySelector(".prompt");
//divBlock.textContent = "new text";

let widthHeight = width / numberOfBlocks;

button.addEventListener("click", (event) => {
    let = newNumberOfBlocks = parseInt(prompt("How many blocks per line do you want?"));
    deleteGrid();

    numberOfBlocks = newNumberOfBlocks;
    widthHeight = width / numberOfBlocks;
    resizeGrid();

});
function deleteGrid() {
    let blocks = document.querySelectorAll(".block");
    blocks.forEach((block) => {
        block.remove();
    });
}
function resizeGrid() {


    for (let i = 0; i < numberOfBlocks; i++) {
        for (let j = 0; j < numberOfBlocks; j++) {
            let div = document.createElement("div");
            div.className = "block";
            div.style.width = `${widthHeight}px`;
            div.style.height = `${widthHeight}px`;

            console.log(widthHeight);
            divBlock.appendChild(div);
            div.addEventListener("mouseover", (event) => {
                let randomColor = Math.floor(Math.random() * 16777215).toString(16);
                div.style.backgroundColor = `#${randomColor}`;

            });
        }
    }
}

resizeGrid();