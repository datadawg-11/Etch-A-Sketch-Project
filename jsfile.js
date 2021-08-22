console.log('hello world')
const container = document.querySelector('.container');
const gridItems = document.querySelectorAll(".item");

gridItems.forEach(gridItem => gridItem.addEventListener("mouseenter", event => {
    console.log(event);
    event.target.classList.add('itemHover')

})
);

// mouseTarget.addEventListener("click", function(){ 
//     console.log("Event triggered!"); });


// mouseTarget.forEach(mouseTargetItem => {

//     mouseTargetItem.addEventListener('click', event => {
//             console.log( event.target.id );
//     });
// });


// const container = document.querySelector(".container");
// makeGrid(16, 16);
// const gridItem = document.querySelectorAll(".grid-item").forEach(gridItem => gridItem.addEventListener("click", myFunc));





// <!-- <script>

// var enterEventCount = 0;
// var leaveEventCount = 0;
// const mouseTarget = document.getElementById('mouseTarget');
// const unorderedList = document.getElementById('unorderedList');

// mouseTarget.addEventListener('mouseenter', e => {
//   mouseTarget.style.border = '5px dotted orange';
//   enterEventCount++;
//   addListItem('This is mouseenter event ' + enterEventCount + '.');
// });

// mouseTarget.addEventListener('mouseleave', e => {
//   mouseTarget.style.border = '1px solid #333';
//   leaveEventCount++;
//   addListItem('This is mouseleave event ' + leaveEventCount + '.');
// });

// function addListItem(text) {
//   // Create a new text node using the supplied text
//   var newTextNode = document.createTextNode(text);

//   // Create a new li element
//   var newListItem = document.createElement("li");

//   // Add the text node to the li element
//   newListItem.appendChild(newTextNode);

//   // Add the newly created list item to list
//   unorderedList.appendChild(newListItem);
// }
// </script> -->