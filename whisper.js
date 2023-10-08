/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

*/
function whisper(sentence) {
    // Convert the sentence to lowercase
    let lowerCaseSentence = sentence.toLowerCase();

    // Check if the sentence ends with '!'
    if (lowerCaseSentence.endsWith('!')) {
        // Remove the '!' from the end
        lowerCaseSentence = lowerCaseSentence.slice(0, -1);
    }

    // Add 'shh...' at the beginning and return the modified sentence
    return 'shh... ' + lowerCaseSentence;
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));