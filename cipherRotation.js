function rot13(str) {
    //Declare the alphabet 
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //Split and filter the array
    return str.split("").map(char => {
      //check if the current char is in alphabet
        if(alphabet.includes(char)){
          //find the index of current char rotated position in alphabet
            const rotatedIndex = (alphabet.indexOf(char) + 13) % 26
            return alphabet[rotatedIndex]
        } else {
          return char
        }
    }).join("")
  }
  //Test
console.log(rot13("SERR PBQR PNZC"))