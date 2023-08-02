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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    //Initializing the min ,max and the totalSum values
    let minValue = arr[0]
    let maxValue = arr[0]
    let totalSum = arr[0]
    // select the 4 smallest numbers
    for (let i = 1 ; i < arr.length ; i++){
        totalSum  += arr[i] // finf the total sum of all numbers in the array
        if (arr[i] < minValue ){
            minValue = arr[i] // find the min value
        } else if (arr[i] > maxValue) {
            maxValue = arr[i] // find the max value
        }
    }
    let minSum = totalSum - maxValue // find the max Sum
    let maxSum = totalSum - minValue // find the min Sum
        console.log(minSum, maxSum)
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
