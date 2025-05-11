const duck = document.querySelector("#myduck");
const myButton = document.querySelector("#mybutton");
myButton.addEventListener("click", moveInput);

let clicked = false;

function moveInput() {
    /*transitions will not be smooth. that will have to be implemented in the css file.*/
    if (!clicked) {
        duck.style.translate = "10px 20px";
        clicked = true;
    } else {
        duck.style.translate = "0px 0px";
        clicked = false;
    }
}