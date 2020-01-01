//store value in these variable
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// body.style.background = "red";

//make funtion for gradient css
function setGradient(){
    body.style.background = "linear-gradient(to right, "
    + color1.value 
    + ", "
    + color2.value 
    + ")";  

    css.textContent = body.style.background + ";" ; // this is for css write in another element
}

// call the functions in eventListener
//we use these functions as well in html viw attribute oninput="setGradient()" 
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);