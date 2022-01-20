// script.js

const container = document.querySelector('#container');

const clearButton = document.createElement('button');
clearButton.textContent = 'Clear';
container.appendChild(clearButton);

for (let i=0; i<16; i++){
    const innerContainer = document.createElement('div');
    innerContainer.setAttribute('id', 'innerContainer');
    for (let j=0; j<16; j++){
        let sq = document.createElement('div');
        sq.setAttribute('style', 'width: 25px; height: 25px; border: 2px solid black');
       // sq.textContent = +j + 1;
        innerContainer.appendChild(sq);
        sq.addEventListener("mouseover", () => {
            sq.setAttribute('style', "background-color:yellow; width: 25px; height: 25px; border: 2px solid black");
        }, false);
    }
    container.appendChild(innerContainer);
}

clearButton.onclick = removeElements;

function removeElements() {
    //console.log('remove elements called');
    while(container.childElementCount > 1){
        container.removeChild(container.lastChild);
    }

    let gridSize = prompt('Enter the grid Size', '16');

    for (let i=0; i<gridSize; i++){
        const innerContainer = document.createElement('div');
        innerContainer.setAttribute('id', 'innerContainer');
        for (let j=0; j<gridSize; j++){
            let sq = document.createElement('div');
            sq.setAttribute('style', 'width: 25px; height: 25px; border: 2px solid black');
           // sq.textContent = +j + 1;
            innerContainer.appendChild(sq);
            sq.addEventListener("mouseover", () => {
                sq.setAttribute('style', "background-color:yellow; width: 25px; height: 25px; border: 2px solid black");
            }, false);
        }
        container.appendChild(innerContainer);
    }
}
