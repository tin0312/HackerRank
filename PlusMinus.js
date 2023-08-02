/*Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.
*/


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let numOfPositive = 0 
    let numOfNegative = 0
    let numOfZero = 0  
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > 0){ // getting number of positive numbers
            numOfPositive++
        } else if (arr[i] < 0) {// getting number of negative numbers 
           numOfNegative++
        } else {
            numOfZero++
        }
            
    }
    let positiveRatio = numOfPositive / arr.length
    let negativeRatio = numOfNegative / arr.length
    let zeroRatio = numOfZero / arr.length
    
    console.log(positiveRatio.toFixed(6))
    console.log(negativeRatio.toFixed(6))
    console.log(zeroRatio.toFixed(6))

}


function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
