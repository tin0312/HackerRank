/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    // Initialize a variable to hold string through indexing process
    let alterUpperCase= ''
    for (let i = 0; i < str.length; i++){
        if(i % 2 === 0){
            alterUpperCase+= str[i].toUpperCase(0)
        } else {
            alterUpperCase+=str[i]
        }
    }
    return alterUpperCase
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));