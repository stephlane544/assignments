var numbers = [1, 2, 3];

// var newArr = numbers.reduce(function(a, b){
//     return a + b;
// });

// console.log(newArr);


// var string = numbers.reduce(function(a, b){
//     return a.toString() + b.toString();
// });
// console.log(string);


// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// var newArr = voters.reduce(function(a, voter){
//     if(voter.voted){
//     return  a + 1;
//     }else{
//         return a + 0;
//     }
// }, 0);
// console.log(newArr);


// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ];

// var newArr = wishlist.reduce(function(a, b){
//     return a + b.price;
// }, 0);
// console.log(newArr);


// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ];

// var newArr = [];
// var concat = arrays.reduce(function(a, b){
//     return newArr.push(...b);
// }, newArr);
// console.log(newArr);




var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

var newArr = voters.reduce(function(a, b){
    if(b.age <= 25){
        if(b.voted){
        a.youthVotes++;
        }
        a.youth++;
        return a;
    }else if(b.age <= 35){
        if(b.voted){
            a.midVotes++;
        }
         a.mids++;
        return a;

    }else {
        if(b.voted){
            a.oldVotes++;
        }
         a.olds++;
        return a;

    }

}, {
    youthVotes: 0,
    youth: 0 ,
    midVotes: 0,
    mids: 0,
    oldVotes: 0,
    olds: 0 
});
console.log(newArr);