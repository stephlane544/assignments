// function sum (numOne, numTwo){
//     return numOne + numTwo
// }

// console.log (sum(3, 7));

// function largest (numOne, numTwo, numThree){
//     if(numOne > numTwo && numOne > numThree){
//         return numOne;
//     }else if (numTwo > numOne && numTwo > numThree){
//         return numTwo;
//     } else{
//         return numThree;
//     }
// }

// console.log(largest(1, 3, 2));

// function evenOrOdd (num){
//     if (num % 2 == 0){
//         return "even";
//     } else{
//         return "odd";
//     }
// }

// console.log(evenOrOdd(3));

// function stringStuff(string){
//     var newString = [];
//     if (string.length <= 20){
//         return string + string;
//     } else {
//         var length = string.length / 2
//         for (var i = 0; i < length; i++){
//             newString.push(string.charAt(i));
//         } 
//         for (var j = 0; j < newString.length; j++){
//             console.log (newString[j]);
//         }
//     }
// }

// console.log(stringStuff("My name is Stephanie."));





function fibonacciSum (n){
    var fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
    for (var i = 0; i < n ; i++){
        console.log(fibonacci[i]);
    }
    for (var j = 0; j < n ; j++){
        var sum = fibonacci
        console.log(fibonacci[i]);
    }
}

console.log(fibonacciSum(4));