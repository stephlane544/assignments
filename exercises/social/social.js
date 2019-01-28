var programmingMathematician = {
    name: "Stephanie", 
    age: 26,
    birthday: "January 25, 1993",
    favColors: ["blue", "purple"],
    favFood: ["Mexican", "Chinese", "Indian"],
    codingFriends: [
        {
            name: "Waylon",
            age: 25,
            birthday: "April 20",
            favColors: ["Black", "Red"]
        },
        {
            name: "Madie",
            age: 26,
            birthday: "May 14",
            favColors: ["blue", "pink", "green"]

        },
        {
            name: "Amy",
            age: 30,
            birthday: "August 27",
            favColors: ["blue", "green"]
        },
        {
            name: "Dani",
            age: 21,
            birthday: "November 12",
            favColors: ["blue", "black", "red"]
        },
        {
            name: "Lara",
            age: 30,
            birthday: "May 2",
            favColors: ["blue", "yellow", "red"]
        },
        {
            name: "Jessie",
            age: 26,
            birthday: "December 8",
            favColors: ["red", "black"]
        },
        {
            name: "Montigo",
            age: 25,
            birthday: "September 22",
            favColors: ["green", "anthracite"]
        }
    ],
}
friendsNames = [];

console.log(programmingMathematician.name + "'s coding friends are: ");

for (i = 0; i < programmingMathematician.codingFriends.length; i++){
    friendsNames.push(programmingMathematician.codingFriends[i].name);
    console.log(friendsNames[i]);
}

