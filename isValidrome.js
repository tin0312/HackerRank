/*

Given a string, check if the string is a validrome after converting to lowercase and has removed all alphanumeric values.


*/

const isValidrome = (string) => {
    const cleanString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

    let left = 0
    let right = cleanString.length - 1
    while(left < right){
        if (cleanString[left] !== cleanString[right]) return false
        left++
        right--
    }
    return true
}

//example
console.log(isValidrome("hiih"))