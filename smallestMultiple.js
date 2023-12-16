/*

Given an array of 2 numbers, find smallest common multiple of all numbers between that range of the numbers, make sure that all the numbers are divisible by that numbers


*/

const smallCommonMultiple = (arr) => {
    //sort the array in the ascending order
    let [min, max] = arr.sort((a,b) => a - b)
    //find the number of the divisors exits the that range
    let divisorNum = max - min + 1
    //find the largest possible common multiple number of all the numbers
    let largestPCM = 1
    for (let i = min; i <= max;  i ++){
        largestPCM*= i
    }
    //find the largest common multiple of the max number
    for(let multiple = max; multiple <= largestPCM; multiple++){
        // keep track of the divisor count 
        let divisorCount = 0
        for(let j = min; j <=max; j++){
            if(multiple % j === 0){
                divisorCount+= 1
            }
        }
        if(divisorCount === divisorNum ){
            return multiple
        }
    }
}
//Test

console.log(smallCommonMultiple([1,5]))