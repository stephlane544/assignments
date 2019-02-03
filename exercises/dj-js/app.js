document.getElementById("box").addEventListener("mouseover", blue);

function blue(){
    document.getElementById("box").style.backgroundColor = "blue";
}


document.getElementById("box").addEventListener("mousedown", red);


function red(){
    document.getElementById("box").style.backgroundColor = "red";
}


document.getElementById("box").addEventListener("mouseup", yellow);

function yellow(){
    document.getElementById("box").style.backgroundColor = "yellow";
}

document.getElementById("box").addEventListener("dblclick", green);

function green(){
    document.getElementById("box").style.backgroundColor = "green";
}

document.body.addEventListener("wheel", orange);

function orange(){
    document.getElementById("box").style.backgroundColor = "orange";
}


document.addEventListener("keydown", color);

function color(e){
    if( e.key == "b"){
        document.getElementById("box").style.backgroundColor = "blue";
    }else if( e.key == "r"){
        document.getElementById("box").style.backgroundColor = "red";
    }else if( e.key == "y"){
        document.getElementById("box").style.backgroundColor = "yellow";
    }else if( e.key == "g"){
        document.getElementById("box").style.backgroundColor = "green";
    }else if( e.key == "o"){
        document.getElementById("box").style.backgroundColor = "orange";
    }
}