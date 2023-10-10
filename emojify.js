/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
    "smile": "😊",
    "angry": "😠",
    "party": "🎉",
    "heart": "💜",
    "cat":   "🐱",
    "dog":   "🐕"
}


function emojifyWord(word){
    if(word.startsWith(":") && word.endsWith(":")){
        // remove the colons
        let emojiWord = word.toLowerCase().slice(1, -1);
        // look up the word in emoji object
        return emojis[emojiWord] || emojiWord;
    } else {
        return word;
    }
}

function emojifyPhrase(phrase) {
    return phrase.split(' ').map(emojifyWord).join(' ');
}




console.log(emojifyWord(":heart:"));
console.log(emojifyWord(":flower:"));
console.log(emojifyWord("elephant"));

console.log(emojifyPhrase("I :heart: my :cat:"));
console.log(emojifyPhrase("I :heart: my :elephant:"));
