/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Hint: Trying using slice() and .toUpperCase()
*/
// capitialize the first letter of each word
function capitalizeWord(word){
    let upperCaseWord = word[0].toUpperCase() + word.slice(1)
    return upperCaseWord
}

function toTitleCase(str){
    let splittedSentence = str.split(' ')
    let newArray = []
    for(let i = 0; i< splittedSentence.length; i++){
    newArray.push(capitalizeWord(splittedSentence[i]))
    }
    return newArray.join(' ')
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));