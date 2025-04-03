console.log("Hello");
let myName = "Emma";
console.log("Hi", myName);
// comments are same as css
let id = "123";
console.log("my id is", id);
/* let myCity = prompt("Where do you live?")
console.log("I live in", myCity); <== Don't do user inputs like this, more for testing 
() ==> Round brackets. Used in functions, conditions.
[] ==> Square brackets. Used for arrays.
{} ==> Curly brackets. Used to define scope, used in functions.
*/

//Variables. const = value cannot change, let = Can Change

// Code blocks are bound by {}. Allows scoping things. Variables inside the {} cannot be used outside.
{
  let a = 10;
}

//Variables always start with a lowercase. Afterwards can contain a capital or number. Rarely they can start with or contain an "_" or "$".

/* Types of Variables/What they are defined as
String ("of letters")
Number
Object
Boolean (true/false)
Null, Undefined
*/

let a = 10;
let b = parseInt("20");
let c = a + b;
console.log(c);
// multiplication ==> * , division ==> /

//object variables
const myRecord = {
  name: "Simon",
  id: 35,
  age: 24,
  isLocal: true,
};
console.log(myRecord.isLocal);
console.log(myRecord);

//strings. ' and " can be used but ` can be used for multiple lines/strings. ${variable} ==> a $ can include a var for a string
let myLocation = "a circus";
let msg = `<h1> I live in ${myLocation}</h1>
<p>Look another paragraph on a separate line in js</p>`;
console.log(msg);

/* + operator converts numeric values to strings. look at b. parseInt converts strings back to numbers.
z = "37" + 7 would turn out as 377
m = z + 10 turns out as 37710
m = parseInt(z) + 10 = 387
*/

//string array- everything needs to be same type of variable, so. array items START AT 0!!
let names = ["Acacia", "Samuel", "Somubusuta", "Yoonjae", "Morty"];
console.log(names);
console.log(names[0]);

/* if else conditionals 
if {do this if thing is true;}
else {do this if thing is false;}
multiple ifs can be else if
*/
let grade = 75;
if (grade > 70) {
  console.log("HD");
} else {
  console.log("Pass");
}

if (names[4] != "Morty") {
  console.log("200 sanity");
} else if ((names[1] = "Samuel")) {
  console.log("paradiselost!");
} else {
  console.log("oops error");
}

// == equals. ===eq value, variable type. !== doesnt equal. !== not equal val or type of variable. > greater than, >= greater than or eq to

//logical operators. && is and, || is or, ! is not.
//!(5 == 6) would be true. because ! means it isnt.

//queryselector searches the doc for the id because of #
let body = document.querySelector("body");

function checkWeather() {
  let myInput = document.querySelector("#myTemp");
  console.log(myTemp);
  let temp = myInput.value;
  console.log("temp value is", temp);
  if (temp < 10) {
    console.log("very cold");
    body.style.backgroundColor = "gray";
  } else if (temp >= 10 && temp < 20) {
    console.log("nice weather");
    body.style.backgroundColor = "blue";
  } else if (temp >= 20 && temp < 30) {
    console.log("sunny");
  } else if (temp >= 30) {
    console.log("hot");
  }
}
