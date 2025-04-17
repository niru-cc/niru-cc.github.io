const airportAud = document.querySelector("#ap");
console.log(airportAud);

// 1. fetch the correct button
const playButton = document.querySelector("#play");
console.log(playButton);

//listen to clicks on the button
playButton.addEventListener("click", playAudio);
//audio is played on click
function playAudio () {
    airportAud.play();
}

const pauseButton = document.querySelector("#pause");
pauseButton.addEventListener("click", pauseAudio);
function pauseAudio () {
    airportAud.pause();
}

//popping
const popSound = document.querySelector("#popping");
const popButton = document.querySelector("#popButton");
popButton.addEventListener("click", popAud);
function popAud () {
    popSound.play();
}
