var evenArray = [];
function createEvenArray(highestNum){
    for (var i = 1; i < highestNum; i++){
        if(i % 2 == 0){
        evenArray.push(i);
        }
    }
    
}
createEvenArray(10);
// console.log(evenArray);

function addOdds(highestNum){
    for (var i = 1; i < highestNum; i++){
        if (i % 2 == 1){
            evenArray.push(i);
        }
    }
}
addOdds(10);
// console.log(evenArray);

function sortNums(numArray){
    const output = numArray.sort(function(a, b){return a-b});
    console.log(output);
}

sortNums(evenArray);
