//PRELIMINARIES

// for (var i = 0; i < 10; i++){
//     console.log(i);
// }

// for (var i = 9; i >= 0; i--){
//     console.log(i);
// }

// var fruit = ["banana", "orange", "apple", "kiwi"]
// for ( var i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);
// }


//BRONZE MEDAL

// var array = [];
// for (var i = 0; i < 10; i++){
//     array.push(i);
// }
// console.log(array);

// var array = [];
// for (var i = 0; i <= 100; i++){
//     if (i % 2 == 0){
//         array.push(i);
//     }
// }

// console.log(array);

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

// for (var i = 0; i < fruit.length; i++){
//     if (i % 2 ==0){
//         console.log (fruit[i]);
//     }
// }


//SILVER MEDAL

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

//   for (var i = 0; i < peopleArray.length; i++) {
//         console.log(peopleArray[i].name);
//     }

// var names = [];
// var occupations =[];
// for (var i = 0; i < peopleArray.length; i++) {
//     names.push(peopleArray[i].name);
//     occupations.push(peopleArray[i].occupation);
// }


// var names = [];
// var occupations =[];
// for (var i = 0; i < peopleArray.length; i++) {
//     if (i % 2 == 0) {   
//         names.push(peopleArray[i].name);
//     } else {
//         occupations.push(peopleArray[i].occupation);
//     }
// }



//GOLD MEDAL


// arrayMatrix = [];
// for (var i = 0; i < 3; i++){
//     var zeroArray = [0, 0, 0];
//     arrayMatrix.push(zeroArray)
// }
// console.log("[[" + arrayMatrix[0] + "],");
// console.log("[" + arrayMatrix[1] + "],");
// console.log("[" + arrayMatrix[2] + "]]");

// arrayMatrix = [];
// for (var i = 0; i < 3; i++){
//     var countingArray = [i, i, i];
//     arrayMatrix.push(countingArray)
// }
// console.log("[[" + arrayMatrix[0] + "],");
// console.log("[" + arrayMatrix[1] + "],");
// console.log("[" + arrayMatrix[2] + "]]");


// arrayMatrix = [];
// for (var i = 0; i < 3; i++){
//     var countingArray = [0, 1, 2];
//     arrayMatrix.push(countingArray)
// }
// console.log("[[" + arrayMatrix[0] + "],");
// console.log("[" + arrayMatrix[1] + "],");
// console.log("[" + arrayMatrix[2] + "]]");

var arrayMatrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
for (var i = 0; i < arrayMatrix.length; i++){
    for (var j = 0; j < arrayMatrix[i].length; j++){
        arrayMatrix[i].splice(j, j, "x");
    }
}

console.log("[[" + arrayMatrix[0] + "],");
console.log("[" + arrayMatrix[1] + "],");
console.log("[" + arrayMatrix[2] + "]]");