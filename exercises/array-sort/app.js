// var numbers = [1, 3, 5, 2, 90, 20];

// var newArr = numbers.sort(function(a, b){
//     return a - b;
// });
// console.log(newArr);


// var numbers = [1, 3, 5, 2, 90, 20];

// var newArr = numbers.sort(function(a, b){
//     return b - a;
// });
// console.log(newArr);



// var strings = ["dog", "wolf", "by", "family", "eaten"];

// var newArr = strings.sort(function(a, b){
//     return a.length - b.length;
// });

// console.log(newArr);

// var strings = ["dog", "wolf", "by", "family", "eaten"];
// var newArr = strings.sort();
// console.log(newArr);


var people = [
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
];

var newArr = people.sort(function(a, b){
    return a.age - b.age;
});
console.log(newArr);