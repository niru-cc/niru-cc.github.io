const audio = document.querySelector("#musicplayer");
const playPauseBtn = document.querySelector("#play");
const playPauseImg = document.querySelector("#playicon");
const progressBar = document.querySelector("#progressbar");
audio.removeAttribute("controls");

// playPauseBtn.addEventListener("click", togglePlayPause);
audio.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (audio.paused || audio.ended) {
    audio.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    audio.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (audio.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}
// Add other functionalities here