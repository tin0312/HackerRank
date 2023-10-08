/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

*/

function panicFunction(sentence){
    // if sentence has more than one word
    if(sentence.includes(' ')){
        //split the sentence
        let splittedSentence = sentence.split(' ')
        //Initialize a sentence to store the new sentence 
        let newSentence
        //Map through the splitted sentence.
        newSentence = splittedSentence.map(word => word.toUpperCase() + '😱').join(' ') + '!'
        return newSentence
    } else {
        return sentence.toUpperCase() + '!'
    }
}
console.log(panicFunction("I'm almost out of coffee")); 
console.log(panicFunction("Hello"))
