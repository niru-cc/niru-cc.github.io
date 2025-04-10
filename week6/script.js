/* using functions example

mulitiples below- do a function instead 

function add (val1, val2) {
    let total = val1+val2;
    console.log(total);
    return total;
}
/* ^ stuff in curly brackets are bound.
  "return" will put the value outside and total will register in the rest
  add is a real action in js yes
  

function subtract(val1, val2) {
    let res = val1 - val2;
    return res;
}

function myGrade(marks) {
    if (marks > 80) {
    console.log("HD")
    } else if (marks < 40) {
    console.log("fail")
    } else {
    console.log("pass")};
}

let score = 59;
let msg = whatGrade(score);


let a = 20;
let b = 20;
//let c = a + b;
instead:
let c = add(a, b);
console.log(c);

c = 40 + 56;
console.log(c)

a = 45;
b = 6;
c = a + b;
*/

// Selecting elements for DOM- querySelector() for the first on the document or querySelectorAll() for all
const header = document.querySelector("header");
console.log(header);
console.log(header.textContent);
header.innerHTML += "<h2>header fromm js</h2>";

const allParas = document.querySelectorAll("p");
console.log(allParas);
for (let i = 0; i < allParas.length; i++) {
    //console.log(allParas[i].textContent);
    allParas[i].style.border = "1px solid blue";
}

const listTwo = document.querySelector("#id-one");

//querySelector can select classes or ids with . or #
//other methods of selecting elements: getElementById("id"); ByTagName("p"); ByClassName("class");

