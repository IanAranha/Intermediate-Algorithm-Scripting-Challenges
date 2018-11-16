//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//
//The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//
//For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
    var base = 1
    var added = 1
    var result = base
    var fibonnaciArray =[1]
    for( var i=0; i<num; i++){
        fibonnaciArray.push(result)
        result = base + added
        base = added
        added = result  
    }
    var sum = 0
    for(var i=0; i < fibonnaciArray.length; i++){
        if(fibonnaciArray[i] % 2 != 0 && fibonnaciArray[i] <= num){
            sum += fibonnaciArray[i]
        }
    }
    return sum
}

//sumFibs(1000) should return 1785.
console.log(sumFibs(1000))
//sumFibs(4000000) should return 4613732.
console.log(sumFibs(4000000))
//sumFibs(4) should return 5.
console.log(sumFibs(4))
//sumFibs(75024) should return 60696.
console.log(sumFibs(75024))
//sumFibs(75025) should return 135721.
console.log(sumFibs(75025))