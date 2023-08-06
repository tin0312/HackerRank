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
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */
 
 
function lonelyinteger(a) {
    // create an object to store the frequecy of each query key
const elementFrequency = {}
    // Calculate the frequency of strings array
    for (let element of a){
        //interate through the strings & check if its already in queryFrequency
            if (elementFrequency[element]){
            //if its already in the object, increase in frequency by 1
                elementFrequency[element]++
            }
        // if the object encounters the string for the first time, assign it a frequency value of 1
            else {
                elementFrequency[element] = 1
            }
    }
    for ( let key in elementFrequency) {
        // finding unique number with frequency value of 1
        if(elementFrequency[key] === 1){
            return parseInt(key) // convert the key value back to integer
        }
    }
    return null  // return null when no unique integer found
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}
