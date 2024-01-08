let numberOfBlocks = 4;
let width = 500;
let divBlock = document.querySelector(".block-div");
//divBlock.textContent = "new text";

let widthHeight = Math.round(( width/numberOfBlocks) * 10) / 10;



for (let i = 0; i < numberOfBlocks; i++) {
    for (let j = 0; j < numberOfBlocks; j++) {
        let div = document.createElement("div");
        div.className = "block";
        div.style.width = `${widthHeight}px`;
        div.style.height = `${widthHeight}px`;
        divBlock.appendChild(div);
        console.log("test2");
    }
}