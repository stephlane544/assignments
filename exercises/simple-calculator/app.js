document.add.addEventListener("submit", adding);

function adding(e){
    e.preventDefault();
    var num1 = document.getElementById("fANum").value;
    var num2 = document.getElementById("sANum").value;
    var sum = parseInt(num1) + parseInt(num2);
    document.getElementById("addMessage").textContent += `The sum is: ${sum}`;
}

document.sub.addEventListener("submit", subtract);

function subtract(e){
    e.preventDefault();
    var num1 = document.getElementById("fSNum").value;
    var num2 = document.getElementById("sSNum").value;
    var difference = parseInt(num1) - parseInt(num2);
    document.getElementById("subtractMessage").textContent += `The difference is: ${difference}`;
}

document.mult.addEventListener("submit", multiply);

function multiply(e){
    e.preventDefault();
    var num1 = document.getElementById("fMNum").value;
    var num2 = document.getElementById("sMNum").value;
    var product = parseInt(num1) * parseInt(num2);
    document.getElementById("multiplyMessage").textContent += `The product is: ${product}`;
}