const myCards = [
    {id:1, name:"Queen", src:"queen.png"},
    {id:2, name:"King", src:"king.png"},
    {id:3, name:"Jack", src:"jack.png"},
];

let cardComp = "";

for (let i = 0; i < myCards.length; i++) {
    // += will add the initial value (queen then king then jack)
    cardComp += `
    <div class="card-container">
            <div class="card" draggable="true">
              <div class="card-face"><img src="cloud.png" alt="Back" /></div>
              <div class="card-face flip">
                <img src="${myCards[i].src}" alt="${myCards[i].name}" class="card-front" />
              </div>
            </div>
          </div>
    `;
    console.log(cardComp);
}

const deck = document.querySelector(".deck");
deck.innerHTML = cardComp;

const cards = document.querySelectorAll(".card");

// let draggedCard = null;
// for (let i = 0; i < cards.length; i++) {
//     cards[i].addEventListener("dragstart", function () {
//     draggedCard = cards[i];
//     const name = draggedCard.querySelector(".card-front");
//     });
// }

// //nextstep randomise card placements (fisher yates)

// Shuffle cards using Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const shuffledCards = shuffleArray(myCards);

let cardComposition = "";

for (let i = 0; i < shuffledCards.length; i++) {
  cardComposition += `
<div class="card-container">
        <div class="card" draggable="true">
          <div class="card-face"><img src="cloud.png" alt="Back" /></div>
          <div class="card-face flip">
            <img src="${shuffledCards[i].src}" alt="${shuffledCards[i].name}" class="card-front" />
          </div>
        </div>
      </div>
`;
  console.log(cardComposition);
}

const dropBox = document.querySelector(".dropbox");
dropBox.addEventListener("dragover", function (e) {
    e.preventDefault();
})

dropBox.addEventListener("drop", function (e) {
    const clone = draggedCard;
    dropBox.innerHTML = "";
    // const clone = draggedCard.cloneNode(true);
    // no- dropBox.innerHTML = clone;
    dropBox.appendChild(clone);
    clone.addEventListener("click", function () {
        clone.classList.toggle("flip");
    });
});