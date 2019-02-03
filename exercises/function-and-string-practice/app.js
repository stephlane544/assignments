//Practice 1
// function reverseArray(string){
//     var arr = string.split('');
//     var newArr = arr.reverse();
//     return (newArr.join(""));
// }

// console.log(reverseArray("HelloWorld"))


//2

// function num(str){

//     if(str == parseInt(str)){
//         return (true);
//     }else{
//         return (false);
//     }
// }

// console.log(num("2"));

//3

// function isEven(num){
//     if(num % 2 == 0){
//         return(true);
//     }else{
//         return(false);
//     }
// }

// console.log(isEven(5));


//5

function arr(arr1, arr2){
    var newArr = [];
    for(var i = 0; i < arr1.length; i++){
        for (var j = 0; j < arr2.length; j++){
            newArr.push(arr1.shift());
            newArr.push(arr2.shift());
        }
    }
    return (newArr);
}

console.log(arr([1, 2, 3, 4, 5, 6], [3, 4, 5, 6, 7, 8]));