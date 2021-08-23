const container = document.querySelector('.container');
const gridItems = document.querySelectorAll(".item");

gridItems.forEach(gridItem => gridItem.addEventListener("mouseenter", event => {
    console.log(event);
    event.target.classList.add('itemHover')
}));

// const button = document.querySelector('.button');
const button = document.querySelector('button')

button.addEventListener('click', e => {
    var x = prompt("Please enter a number between 1 and 100", "")

    while(isNaN(x) || x < 1 || x >100) {
        x = prompt("You did not enter a valid number. Please try again", "")
    }

    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i =0 ; i < (x*x); i++) {
        const gridItems = document.createElement('div');
        gridItems.textContent = i+1; 
        gridItems.classList.add('item'); //add an item class to the div
        container.appendChild(gridItems); //append it to the container div
    }
    const gridItems = document.querySelectorAll(".item");
    gridItems.forEach(gridItem => gridItem.addEventListener("mouseenter", event => {
        event.target.classList.add('itemHover')
        })  
    )
    numColumns = `repeat(${x}, 1fr)`; //create a repeat string to factor in number of columns
    container.style.gridTemplateColumns = numColumns
    })
    
// // need a way to check if input is a valid number
// var isNumber = Number.isInteger || function(number){ return !isNaN(parseFloat(n)) && isFinite(n) }

// var result = prompt("Enter your number");
// if (!isNumber(result)){
//    prompt("Please try again and enter your number");
// }

