//#1

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
// var count = 0;
// for (var i = 0; i < officeItems.length; i++){
//     if (officeItems[i] == "computer"){
//         count++;
//     }
// }
// console.log(count);

//#2

// var peopleWhoWantToSeeMadMaxFuryRoad = [{
//   name: "Mike",
//   age: 12,
//   gender: "male"
// }, {
//   name: "Madeline",
//   age: 80,
//   gender: "female"
// }, {
//   name: "Cheryl",
//   age: 22,
//   gender: "female"
// }, {
//   name: "Sam",
//   age: 30,
//   gender: "male"
// }, {
//   name: "Suzy",
//   age: 4,
//   gender: "female"
// }]

// for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//   if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
//     console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough.");
//   } else {
//     console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough.");
//   }
// }

function toggleSwitch(switches){
    var on = false;

    for (var i = 0; i < switches.length; i++){
        for (var j = 0; j < switches[i]; j++){
            on = !on;
        }

    }
    if (on){
        return "The light is on.";
    }else{
        return "The light is off.";
    }
}

console.log(toggleSwitch([2, 5, 435, 4, 3]));
console.log(toggleSwitch([1, 1, 1, 1, 3]));
console.log(toggleSwitch([9, 3, 4, 2]));



// var array = []
// function toggleSwitch(array){
//     var i = 0;
//     // for (var i = 0; i < array.length; i++){
//     //     var arraySum = array[i]
// }
// if (arraySum % 2 ==0){
//     console.log ("The light is on.");
// } else {
//     console.log("The light is off.");
// }