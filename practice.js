function names (arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i].name);
    }
    return newArr;
}

console.log(names([{ name: 'Steve'}, { name: 'Mike'}, { name: 'John'}]));

// [{ name: 'Steve'}, { name: 'Mike'}, { name: 'John'}] ➞ ['Steve', 'Mike', 'John']
