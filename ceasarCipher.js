/*Julius Caesar protected his confidential information by encrypting it using a cipher. 
Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, 
just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.*/

function caesarCipher(s, k) {
    // Initialize new letter array
    let newLetterArr = [];
    // Initialize alphabet
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    // Split the alphabet 
    let splittedLetters = alphabet.split("");
    // Split the string
    let splittedString = s.split("");

    // Loop through the splitted string
    for (let i = 0; i < splittedString.length; i++) {
        // Check if the character is a letter
        if (/^[a-zA-Z]$/.test(splittedString[i])) {
            // Find the index of the letter in the alphabet
            let index = (splittedLetters.indexOf(splittedString[i].toLowerCase()) + k) % 26;
            // Add the new letter to the array
            newLetterArr.push(splittedString[i].toLowerCase() === splittedString[i] ? splittedLetters[index] : splittedLetters[index].toUpperCase());
        } else {
            // If the character is not a letter, keep it unchanged
            newLetterArr.push(splittedString[i]);
        }
    }

    return newLetterArr.join("");
}
console.log(caesarCipher("Hello", 2))