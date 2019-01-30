// make the box disapear when the user clicks it

document.getElementsByClassName("red-box")[0].addEventListener("mouseover", clearBox);
function clearBox(){
    document.getElementsByClassName("red-box")[0].style.backgroundColor = "white";
}

