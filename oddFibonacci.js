/*

Given a positive integer input, find all oddFibonacci numbers that are less than or equal to the 
input number, and return their sum. The first two numbers in the Fibonacci sequence are 0 and 1.

Every additional number in in sequence is the sum of the two previous numbers

*/

const sumFibs = (num) => {
    let sum = 0
    let prev = 0
    let curr = 1
    while(curr <= num){
        if(curr % 2 !== 0){
            sum += curr
        }
        curr += prev
        prev = curr - prev
    }
    return sum
}

// Test 

console.log(sumFibs(10)) // 10