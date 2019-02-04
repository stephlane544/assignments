var ask = require("readline-sync");

var firstNum = ask.question("Please enter you first number:  ");
var secondNum = ask.question("Please enter you second number:  ");
var operation = ask.question("Please enter the operation you would like to perform (add, sub, mul, div):   ");

console.log(calc(operation));

function calc(operation){
    if(operation === "add"){
        return "The result is:  " + firstNum + secondNum;
    }else if(operation === "sub"){
        return "The result is:  " + firstNum - secondNum;
    }else if (operation === "mul"){
        return "The result is:  " + firstNum * secondNum;
    }else if (operation === "div"){
        return "The result is:  " + firstNum / secondNum;
    } else{
        return "The operation you have entered is not valid. Please try again";
    }
}
