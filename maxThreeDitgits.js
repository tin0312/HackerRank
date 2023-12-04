/*

Given a string of number, find a maximum value in string which has the length of 3 and only include 1 unique digits.
Return an empty string if there is no such value  

*/

/**
 * @param {string} num
 * @return {string}
 */

const largestGoodNumber = (num) => {
    //max good integer
    let maxGoodInteger = ""
    //loop through the given string
    for (let i = 0; i < num.length; i++){
        let subString = num.substring(i, i+3)
        if (subString.length === 3 && new Set(subString.split("")).size === 1){
            maxGoodInteger = subString > maxGoodInteger ? subString : maxGoodInteger 
        }
    }

    return maxGoodInteger
}

console.log(largestGoodNumber("6777888999"))