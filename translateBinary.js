/*

Given an input of binary string with space in between, translate this into English

*/

const translateBinary = (str) => {
    //split the string into an array
    let arr = str.split(' ');
    //loop over it to translate each individual number
    for (let i = 0; i < arr.length; i++){
        arr[i] = String.fromCharCode(parseInt(arr[i],2))
    }
    return arr.join('')
}

// Test 
console.log(translateBinary('01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100')) // Hello World