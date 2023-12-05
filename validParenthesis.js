/*
Given a string containing all kinds of brackets, determine
if the string is valid 
*/

const isWellForm = (string) => {
    // use an empty array as stack to keep track of open brackets
    const stack  = []
    // use an object to store the mapping open & close bracket
    const bracketPairs = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    // loop through each character in the string
    for (let i =0; i < string.length; i++){
        // if the character is an open bracket, push it into the stack
        if (string[i] === '(' || string[i] === '[' || string[i] === '{'){
            stack.push(string[i])
        } else {
            // if the character is a close bracket, pop the last open bracket from the stack
            let last = stack.pop()
            // if the close bracket does not match the open bracket, return false
            if (string[i] !== bracketPairs[last]) return false
        }
    }
    return stack.length === 0
}

console.log(isWellForm("{}[]"))

/*

const stack = ["{"]

*/