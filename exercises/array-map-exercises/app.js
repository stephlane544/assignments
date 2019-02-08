var numbers = [1, 2, 3, 4];

// var newArr = numbers.map(function(number){
//     return number * 2;
// })

// console.log(newArr);



// var newArr = numbers.map(function(number){
//     return String(number);
// })
// console.log(newArr);


// var names = ["john", "jacob", "jingle", "heimer", "schmidt"];
// var upperNames = [];

// var newArr = names.map(function(name){
//     upperNames.push(name.charAt(0).toUpperCase() + name.slice(1));
// })
// console.log(upperNames);


var people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
];

// var namesOnly = people.map(function(person){
//     return person.name;
// });
// console.log(namesOnly);

var matrix = [];
var makeStrings = people.map(function(person){
    if(person.age < 18){
        matrix.push(person.name + " is under age!!");
    } else{
        matrix.push(person.name + " can go to The Matrix.");
    }
});
console.log(matrix);
