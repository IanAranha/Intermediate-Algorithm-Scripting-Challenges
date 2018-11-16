//Flatten a nested array. You must account for varying levels of nesting.


function steamrollArray(arr){
    var newArr =[]
    
    var flatten = function(arg){
        if(!Array.isArray(arg)){
            newArr.push(arg)
        } else {
            for( var a in arg) {
                flatten(arg[a])
                }
            }
    }
    
    arr.forEach(flatten)
    return newArr;
}

//steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
console.log(steamrollArray([[["a"]], [["b"]]]))

//steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
console.log(steamrollArray([1, [2], [3, [[4]]]]));

//steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]]));

//steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]]));
