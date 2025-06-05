// Did not work with querySelector, had to go with selecting via ID's.
const burger = document.getElementById("hamburger");
const nav = document.getElementById("navi");
const clickref = document.getElementById("slist");
const ref = document.getElementById("sourcelist");

// The source list toggles hidden, this is because I want to make it seem like this is still part of the nav
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

const section1 = document.querySelector("#hs1");
const section2 = document.querySelector("#hs2");
const section3 = document.querySelector("#hs3");

button1.addEventListener("click", () => {
    section1.classList.toggle("hidden");
})
button2.addEventListener("click", () => {
    section2.classList.toggle("hidden");
})
button3.addEventListener("click", () => {
    section3.classList.toggle("hidden");
})