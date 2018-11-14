//We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
//
//The lowest number will not always come first.
//
//Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
//
//sumAll([1, 4]) should return a number.
//sumAll([1, 4]) should return 10.
//sumAll([4, 1]) should return 10.
//sumAll([5, 10]) should return 45.
//sumAll([10, 5]) should return 45.

//ATLERNATIVE SOLUTION:

/*  function sumAll(arr) {
        var max = Math.max(arr[0], arr[1])
        var min = Math.min(arr[0], arr[1])
        var sum = 0
        for(var i = min; i<=max; i++){
            sum+=i
            }
        return sum;
    }

sumAll([1, 4]); */


function sumAll(arr) {
    var newArr = arr.sort(function(a,b){return a > b });
    var sum = 0
    for(let x = arr[0]; x <= arr[1]; x++){
        sum = sum + x
    }
    return sum
}



//sumAll([1, 4]) should return 10.
console.log(sumAll([1, 4]))

//sumAll([4, 1]) should return 10.
console.log(sumAll([4, 1]))

//sumAll([5, 10]) should return 45.
console.log(sumAll([5, 10]))

//sumAll([10, 5]) should return 45.
console.log(sumAll([10, 5]))
