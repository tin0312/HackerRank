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
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s, d, m) {
    // Initializie number of ways lily can share a chocolatebar
    let wayToShare = 0;
    // Iterate through the array of segments that can be formed from m 
    for (let i = 0; i <= s.length - m; i++) {
        //Initialize Lily sharing segment sum is 0 which is the sum of the squares in the segment
        let segmentSum = 0;
        //Interating through each segment of the 
        for (let j = i; j < i + m; j++) {
            segmentSum += s[j]; // as iterating, segment sum is equal to 
        }
        // check if any segment sum is equal to d
        if (segmentSum === d) {
            // if there is , increase way to share by 1
            wayToShare++;
        }
    }

    return wayToShare;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const d = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const result = birthday(s, d, m);

    ws.write(result + '\n');

    ws.end();
}
