/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/ 

function isAnagram(str1, str2) {
    let inOrderstr1 = str1.split('').sort().join('');
    let inOrderstr2 = str2.split('').sort().join('');
    
    return inOrderstr1 === inOrderstr2; 
}

console.log(isAnagram("allergy", "gallery")); // Should return true
console.log(isAnagram("treasure", "measure")); // Should return true




