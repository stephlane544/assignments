// Task one
// const collectAnimals = (...animals) =>  (animals);

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 


//Task two
// const combineFruit = (fruit, sweets, vegetables) => [...fruit, ...sweets, ...vegetables];

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"]));


//Task three
// const vacation = {  
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   };
  
//  const {location, duration} = vacation;
//   const parseSentence = ({location, duration}) => `We're going to have a good time in ${location} for ${duration}`;

//   console.log(parseSentence({location, duration}));



//Task four
// function returnFirst(items){
//     const {firstItem} = items[0]; /*change this line to be es6*/
//     return {firstItem};
// }


//Task five
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
// const [firstFav, secondFav, thirdFav] = favoriteActivities;

// const returnFavorites = (firstFav, secondFav, thirdFav) => `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;

// console.log(returnFavorites(firstFav, secondFav, thirdFav));


//Task six
// const combineAnimals = (arr1, arr2, arr3) => [...arr1, ...arr2, ...arr3]; 

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 


//Task seven

// let numArr = [];
// const product = (a, b, c, d, e) => [a,b,c,d,e].reduce((acc, number) => acc * number, 1); 
// console.log(product(1, 2, 3, 4, 5));


//Task eight
// const unshift = (array, a, b, c, d, e) => [a, b, c, d, e, ...array];
// console.log(unshift([3, 5, 75, 3], "f", "s", "u", "v", "w"));



//Task nine
// let obj = {firstName: "Jane", lastName: "Doe"}

const populatePeople = names => names.map(name => name.split(" "));
const peopleObj = populatePeople => populatePeople.map(([firstName, lastName]) => ({firstName, lastName}));

console.log(peopleObj(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])));
