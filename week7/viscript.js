const starVid = document.querySelector("#starvid");
console.log(starVid);

// 1. fetch the correct button
const playVid = document.querySelector("#play");
console.log(playVid);

//listen to clicks on the button
playVid.addEventListener("click", playVideo);
//audio is played on click
function playVideo () {
    starVid.play();
}

const pauseVid = document.querySelector("#pause");
pauseVid.addEventListener("click", pauseVideo);
function pauseVideo () {
    starVid.pause();
}