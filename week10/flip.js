const card = document.querySelector(".card");
console.log(card);

card.addEventListener("mouseenter", flipMe);
function flipMe() {
    card.classList.add("flip");
}
card.addEventListener("mouseleave", revertBack);

function revertBack() {
  card.classList.remove("flip");
}


/* 
card.addEventListener("click", toggleFlip);

function toggleFlip() {
    card.classList.toggle("flip");
}
*/