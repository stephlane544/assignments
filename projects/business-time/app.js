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

document.getElementById("twitter").addEventListener("click", twitter);

function twitter(){
    window.open("https://twitter.com/StephLane544");
}

document.getElementById("github").addEventListener("click", github);

function github(){
    window.open("https://github.com/stephlane544/assignments");
}

document.getElementById("linkedIn").addEventListener("click", linkedIn);

function linkedIn(){
    window.open("https://www.linkedin.com/in/stephanie--lane/");
}

document.contact.addEventListener("submit", thanks);

function thanks(){
    alert(" Thank you for your message. I will get back to you within 2 business days.");
}