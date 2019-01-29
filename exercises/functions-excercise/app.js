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
//     if (string.length <= 20){
//         return string.concat();
//     } else {
//         return string.slice(0, string.length/2);
//     }
// }


// console.log(stringStuff("My name is Stephanie."));





// function fibonacciSum (n){
//     var fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
//     var sum = 0
//     for (var i = 0; i < n ; i++){
//         console.log(fibonacci[i]);
//         var sum = sum + fibonacci[i]
//     }
//     return sum;
// }

// console.log(fibonacciSum(4));


// function quadForm (a, b, c){
//     console.log(a, b, c);
//     var x = b * b - 4 * a * c;
//     if (x < 0){
//         return "imaginary solutions";
//     }else{
//         var y = (0 - b + Math.sqrt(x))/(2 * a);
//         var z = (0 - b - Math.sqrt(x))/(2 * a);
//         return "x = " + y + ' & '+ "x = " + z;
//     }
// }
// console.log(quadForm(1, 7, 2));



function frequentChar(str){
    var letters = str.split("");
    var mostFrequentLetter = letters[0];
    var counter = 0;
    var times = 0;
    for(var i = 1; i < letters.length; i++){
        if (mostFrequentLetter == letters[i]){
            counter++;
            console.log("counter: " + counter);
            console.log("times: " + times);
            if (times < counter){
                mostFrequentLetter = letters[i];
                times = counter;
            }
        }
        }
        return mostFrequentLetter;
}

console.log (frequentChar("Hey google, sing me a song."));