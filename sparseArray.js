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
There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. 
Return an array of the results.


 */

function matchingStrings(strings, queries) {
 // create an object to store the frequecy of each query key
const queryFrequency = {}
 // Calculate the frequency of strings array 
    for (let string of strings){
     //interate through the strings & check if its already in queryFrequency
        if (queryFrequency[string]){
         //if its already in the object, increase in frequency by 1
            queryFrequency[string]++
        }
     // if the object encounters the string for the first time, assign it a frequency value of 1
        else {
            queryFrequency[string] = 1
        }
}
 // Initialize an array to store frequecy values
const results = []
    for (let query of queries){
        if (queryFrequency[query]){
            results.push(queryFrequency[query])
        } else {
            results.push(0)
        }
    }
    
    
    return results

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const stringsCount = parseInt(readLine().trim(), 10);

    let strings = [];

    for (let i = 0; i < stringsCount; i++) {
        const stringsItem = readLine();
        strings.push(stringsItem);
    }

    const queriesCount = parseInt(readLine().trim(), 10);

    let queries = [];

    for (let i = 0; i < queriesCount; i++) {
        const queriesItem = readLine();
        queries.push(queriesItem);
    }

    const res = matchingStrings(strings, queries);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
