const audio = document.querySelector("#music");
console.log(audio);
const playPauseBtn = document.querySelector("#play");
const playPauseImg = document.querySelector("#playicon");
const progressBar = document.querySelector("#progressbar");
//added extra consts for added buttons
const muteButton = document.querySelector("#mute");
const muteIcon = document.querySelector("#muteicon");
const skipButton = document.querySelector("#skip");
const skipIcon = document.querySelector("#skipicon");
const timerButton = document.querySelector("#timer");
const timerIcon = document.querySelector("#timericon");

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

muteButton.addEventListener("click", toggleMute);
function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
    muteIcon.src = "https://img.icons8.com/ios-glyphs/24/high-volume--v1.png";
  } else {
    audio.muted = true;
    muteIcon.src = "https://img.icons8.com/ios-glyphs/24/no-audio--v1.png";
  }
}

// I added a function for setting up a timer so that the tracks wouldn't continue to play for too long after the user falls asleep.