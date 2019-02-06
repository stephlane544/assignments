document.getElementById("dropbtn").addEventListener("click", dropdown);
var clickCounter = 0
function dropdown(){
    clickCounter++;
    if (clickCounter % 2 == 1){
        document.getElementsByClassName("dropdown-content")[0].classList = "show";
    }else{ 
        document.getElementsByClassName("show")[0].classList = "dropdown-content";
    }

}