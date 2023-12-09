function sumPrimes(num) {
    /*
    Thought process
    - Implementing a helper function to check if the number is a prime 
    - Only check up to the square root of that number since it is the largegst unique divisor
    - Return true if prime and false otherwise
    
    - loop through the array starting from 2 again until num 
    - take the result of the helper function as a parameter
    - if it is true, add the current iterating value to sum
    - return sum
    */
     function isPrime(num){
       for(let i = 2; i <= Math.sqrt(num); i++){
         if(num % i === 0){
           return false
         }
       }
        return true
     }
     let sum = 0
     for (let i = 2; i <= num; i++){
       if(isPrime(i)){
         sum+=i
       }
     }
     return sum
    }
//Test
console.log(sumPrimes(10));