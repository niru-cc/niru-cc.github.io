// Did not work with querySelector, had to go with selecting via ID's.
const burger = document.getElementById("hamburger");
const nav = document.getElementById("navi");
const clickref = document.getElementById("slist");
const ref = document.getElementById("sourcelist");

//Scrolling- progress bar, written so the bar updates as the user scrolls.
window.onscroll = function() {progress()};
function progress() {
    var scroll = document.body.scrollTop ||
    document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (scroll / height) * 100;
    document.getElementById("progress").style.width = scrolled + "%";
}

burger.addEventListener("click", () => {
    nav.classList.toggle("hidden");
})
clickref.addEventListener("click", () => {
    ref.classList.toggle("hidden");
})

// "Read More" buttons
const button1 = document.querySelector("#b1");
const button2 = document.querySelector("#b2");
const button3 = document.querySelector("#b3");

const section1 = document.getElementById("hs1");
const section2 = document.getElementById("hs2");
const section3 = document.getElementById("hs3");

button1.addEventListener("click", () => {
    section1.classList.toggle("hidden");
})
button2.addEventListener("click", () => {
    section2.classList.toggle("hidden");

})
button3.addEventListener("click", () => {
    section3.classList.toggle("hidden");
})

// Added further down so the functions above can still work. 
button1.addEventListener("click", progress());
button2.addEventListener("click", progress());
button3.addEventListener("click", progress());