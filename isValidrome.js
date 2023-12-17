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

/*

Use 2 pointers to check of there is a valid Validrome

function palindrome(str) {
  //remove punctuation, case and spacing
  const cleanString = str.replace(/[\W_]/g, "").toLowerCase();
  //use 2 pointers to check if the string is valid palindrome
  let i = 0
  let j = cleanString.length - 1
   while (i < j) {
    if (cleanString[i] !== cleanString[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}

palindrome("eye");



*/

