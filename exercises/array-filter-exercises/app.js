// var numbers = [3, 4, 5, 6];

// var newArr = numbers.filter(function(number){
//     return number >= 5;
// });
// console.log(newArr);


// var numbers = [3, 4, 5, 6];

// var newArr = numbers.filter(function(number){
//     return number % 2 == 0;
// });
// console.log(newArr);



// var strings = ["dog", "wolf", "by", "family", "eaten", "camping"];

// var newStrings = strings.filter(function(string){
//     return string.length <= 5;
// });
// console.log(newStrings);



// var people = [
//     {
//         name: "Angelina Jolie",
//         member: true
//     },
//     {
//         name: "Eric Jones",
//         member: false
//     },
//     {
//         name: "Paris Hilton",
//         member: true
//     },
//     {
//         name: "Kayne West",
//         member: false
//     },
//     {
//         name: "Bob Ziroll",
//         member: true
//     }
// ];

// var newArr = people.filter(function(person){
//     return person.member == true;
// });
// console.log(newArr);



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


var newArr = people.filter(function(person){
    return person.age < 18;
});
console.log(newArr);