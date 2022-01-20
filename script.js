// script.js

const container = document.querySelector('#container');
const header = document.querySelector('#header');
const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
header.appendChild(clearButton);

for (let i=0; i<16; i++){
    const innerContainer = document.createElement('div');
    innerContainer.setAttribute('id', 'innerContainer');
    for (let j=0; j<16; j++){
        let sq = document.createElement('div');
        sq.setAttribute('class', 'blocks');
        sq.setAttribute('style', 'flex: 1 1 0; border: 2px solid black');
       // sq.textContent = +j + 1;
        innerContainer.appendChild(sq);
        sq.addEventListener("mouseover", () => {
            sq.setAttribute('style', "background-color:yellow; flex: 1 1 0; border: 2px solid black");
        }, false);
    }
    container.appendChild(innerContainer);
}

clearButton.onclick = removeElements;

function removeElements() {
    //console.log('remove elements called');
    while(container.hasChildNodes()){
        container.removeChild(container.lastChild);
    }

    let gridSize = prompt('Enter the grid Size', '16');

    for (let i=0; i<gridSize; i++){
        const innerContainer = document.createElement('div');
        innerContainer.setAttribute('id', 'innerContainer');
        for (let j=0; j<gridSize; j++){
            let sq = document.createElement('div');
            sq.setAttribute('class', 'blocks');
            sq.setAttribute('style', 'flex: 1 1 0; border: 2px solid black');
           // sq.textContent = +j + 1;
            innerContainer.appendChild(sq);
            sq.addEventListener("mouseover", () => {
                sq.setAttribute('style', "background-color:yellow; flex: 1 1 0; border: 2px solid black");
            }, false);
        }
        container.appendChild(innerContainer);
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }