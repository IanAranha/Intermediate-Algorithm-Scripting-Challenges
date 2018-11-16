//Sum all the prime numbers up to and including the provided number.
//
//A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
//
//The provided number may not be a prime.

function sumPrimes(num){
    var numbers = [], primes =[], maxNum = num;
    for(var i = 2; i <= maxNum; i++){
        numbers.push(i)
    }
    while(numbers.length){
        primes.push(numbers.shift())
        numbers = numbers.filter((e) => e%primes[primes.length-1]!=0)
    }
    var sum = 0
    for(var i=0;i<primes.length; i++){
        sum = sum + primes[i]
    }
    return sum;
}
//sumPrimes(10) should return 17.
console.log(sumPrimes(10));
//sumPrimes(977) should return 73156.
console.log(sumPrimes(977));
