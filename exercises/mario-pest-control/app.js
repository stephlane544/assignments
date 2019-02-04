var sound = new Audio();
sound.src = "Super Mario Bros.-Coin Sound Effect.mp3";
var total = 0;
document.getElementById("total").textContent += `${total}`;
// You can do this ^^ in the HTML too

document.getElementById("goombaButton").addEventListener("click", addToTotalGoomba);

document.getElementById("bobombButton").addEventListener("click", addToTotalBobomb);

document.getElementById("cheepButton").addEventListener("click", addToTotalCheep);

document.getElementById("reset").addEventListener("click", reset);

function addToTotalGoomba (){
    sound.play();
    total = total + 5;
    document.getElementById("total").innerHTML = `Total: ${total}`;
}

function addToTotalBobomb (){
    sound.play();
    total = total + 7;
    document.getElementById("total").innerHTML = `Total: ${total}`;
}

function addToTotalCheep (){
    sound.play();
    total = total + 11;
    document.getElementById("total").innerHTML = `Total: ${total}`;
}

function reset(){
    total = 0;
    document.getElementById("total").innerHTML = `Total: ${total}`;
}

