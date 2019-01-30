document.getElementById("header").innerHTML = "<h1>JavaScript Made This!!!</h1>" + "<div><span class = name> Stephanie </span> wrote the JavaScript</div>";

document.getElementsByClassName("left")[0].innerHTML = "My girlfriend told me to go out and get something that makes her look sexy... so I got drunk.";

document.getElementsByClassName("left")[1].innerHTML = "Gambling addiction hotlines would do so much better if every fifth caller was a winner.";

document.getElementsByClassName("right")[0].innerHTML = "Just because nobody complains doesn't mean all parachutes are perfect.";

document.getElementsByClassName("right")[1].innerHTML = "My wife told me sex is better on holiday... that wasn't a very nice postcard to receive.";


document.getElementById("clear-button").addEventListener("click", clearMessages);


function clearMessages(){
    document.getElementsByClassName("messages")[0].innerHTML = "";
}

document.getElementById("theme-drop-down").addEventListener("change", changeBackground);

function changeBackground(){
    for(var i = 0; i < document.getElementsByClassName("left").length; i++){
    document.getElementsByClassName("left")[i].style.backgroundColor = "black";
    document.getElementsByClassName("right")[i].style.backgroundColor = "red";
    }
}

document.words.addEventListener("submit", addMessage);
var counter= 0

function addMessage(event){
    event.preventDefault();
    if(counter % 2 == 0){
        document.getElementById("messages").innerHTML += "<div class=\"message left\">" + document.words.message.value + "</div>";
        counter++;
    }else{
        document.getElementById("messages").innerHTML += "<div class=\"message right\">" + document.words.message.value + "</div>";
        counter++;
    }
    return counter;
}