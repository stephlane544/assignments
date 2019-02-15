// const ownerName = "John"
// const age = 101
// const pets = ["cat", "dog"]
// let petObjects = []

// function runForLoop() {
//     let name;
//     let petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i], name:"" }
//         if (pets[i] === "cat") {
//             name = "fluffy" 
//             pet.name = name
//         } else {
//             name = "spot"
//             pet.name = name
//         }
//         pet.name = name
//         petObjects.push(pet)
//     }
//     return petObjects
// }

// console.log(runForLoop())



//Task 1
// const carrots = ["bright orange", "ripe", "rotten"]
// let obj;
// const arr = carrots.map(carrot => obj = {type: "carrot", name: carrot})
// console.log(arr)


//Task 2
// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// const ppl = people.filter(person => !!person.friendly);
// console.log(ppl);




//Task 3
// const sum = (a, b) => a + b;
// console.log(sum(4,3));


// const product = (a, b) => a * b;
// console.log(product(4,3));




//Task 4
// const printString = (firstName = "Jane", lastName = "Doe", age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;
// console.log(printString("Steph", "Lane", 26));



//Task 5
// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
//  ];
 

//  const filterForDogs = animals.filter(animal => animal.type === "dog");
// console.log(filterForDogs);




//Template Literals
const string = (location, name)=> `
Hi, ${name}!

Welcome to ${location}.

I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`;

console.log(string("Bali", "Steph"));