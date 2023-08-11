'use strict';

const fs = require('fs');

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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Initialize frequency of matching colors pair of socks
    const matchingFrequency = {}
    //Iterate through the sock piles
    for (let i of ar){
        // if it is present in the matching frequency already
        if (matchingFrequency[i] ){
            matchingFrequency[i]+=1
        } else {
            // if not 
            matchingFrequency[i] = 1
        }
        
    }
    // Initialize total matching pairs of socks
    let matchingPairs = 0
    for (let j in matchingFrequency){
            matchingPairs += Math.floor(matchingFrequency[j] / 2);
    }
    return matchingPairs

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
