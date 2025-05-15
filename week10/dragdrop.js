const card = document.querySelector(".card");

let draggedCard = null;
card.addEventListener("dragstart", function () {
    draggedCard = card;
    console.log(draggedCard);
});

const dropBox = document.querySelector(".dropbox");
dropBox.addEventListener("dragover", function (e) {
    e.preventDefault();
})

dropBox.addEventListener("drop", function (e) {
    const clone = draggedCard;
    // const clone = draggedCard.cloneNode(true);
    // no- dropBox.innerHTML = clone;
    dropBox.appendChild(clone);
    clone.addEventListener("click", function () {
        clone.classList.toggle("flip");
    });
});