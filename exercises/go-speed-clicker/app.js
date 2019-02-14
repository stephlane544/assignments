

var clicks = localStorage.getItem("clicks") || 0;

document.getElementById("box").innerHTML = `${clicks}`;

document.addEventListener("click", function(){
    var clicks = localStorage.getItem("clicks");
    clicks++;
    document.getElementById("box").innerHTML = `${clicks}`;
    localStorage.setItem("clicks", clicks);
});