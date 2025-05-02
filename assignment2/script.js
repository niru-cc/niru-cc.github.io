const audio = document.querySelector("#music");
const playPauseBtn = document.querySelector("#play");
const playPauseImg = document.querySelector("#playicon");
const progressBar = document.querySelector("#progressbar");

//These are the extra consts for added buttons
const muteButton = document.querySelector("#mute");
const muteIcon = document.querySelector("#muteicon");
const lessButton = document.querySelector("#lessen");
const timerButton = document.querySelector("#timer");

const t1 = document.querySelector("#s1");
const t2 = document.querySelector("#s2");
const t3 = document.querySelector("#s3");

audio.removeAttribute("controls");

function togglePlayPause() {
  if (audio.paused || audio.ended) {
    audio.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    audio.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

audio.addEventListener("timeupdate", updateProgress);
function updateProgress() {
  let progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = progress + "%";
}

// I added a function for adjusting the volume of the tracks to half their volume because I thought it would also fit with the site's function of helping to relax, since it wouldn't work if the volume was too loud. Since the high volume icon was already used, I just decided to have this icon be slightly darker to indicate that it could be toggled. I decided to have the audio become unmuted if the button was clicked after mute was toggled on, and I had to write extra lines to make sure that the mute/unmute icon wouldn't contradict whether or not it was muted.

lessButton.addEventListener("click", toggleVol);
function toggleVol() {
  if (audio.volume > 0.5 || audio.muted) {
    audio.muted = false;
    audio.volume = 0.5;
    lessButton.style.background = "#729daa";
    muteIcon.src = "https://img.icons8.com/ios-glyphs/24/high-volume--v1.png";
    muteButton.style.background = "#bef0ff";
  } else {
    audio.volume = 1;
    lessButton.style.background = "#bef0ff";
    muteIcon.src = "https://img.icons8.com/ios-glyphs/24/high-volume--v1.png";
    muteButton.style.background = "#bef0ff";
  }
}

//I changed the mute toggle that we did in class according to the wolume reduction feature I made by having the the mute button also dim when mute was toggled on. Similar to how I had to change the appearance of the mute button when the volume reduce button was clicked, I had to do the reverse here as well.

muteButton.addEventListener("click", toggleMute);
function toggleMute() {
  if (audio.muted) {
    audio.muted = false;
    muteIcon.src = "https://img.icons8.com/ios-glyphs/24/high-volume--v1.png";
    muteButton.style.background = "#bef0ff";
    lessButton.style.background = "#bef0ff";
  } else {
    audio.muted = true;
    muteIcon.src = "https://img.icons8.com/ios-glyphs/24/no-audio--v1.png";
    muteButton.style.background = "#729daa";
    lessButton.style.background = "#bef0ff";
  }
}

t1.addEventListener("click", function chooseAudio() {
  select(0);
});
t2.addEventListener("click", function chooseAudio() {
  select(1);
});
t3.addEventListener("click", function chooseAudio() {
  select(2);
});

function select(no) {
  audio.src = trackList[no].src;
  audio.load();
  audio.play();
}

