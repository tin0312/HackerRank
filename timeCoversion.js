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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let [time, format] = s.match(/(\d+:\d+:\d+)([APM]+)/).slice(1);
    let [hours, minutes, seconds] = time.split(':');
    hours = parseInt(hours)
    minutes = parseInt(minutes)
    seconds = parseInt(seconds)
    if (format == "PM" && hours !== 12){
        hours+= 12 
    } else if (format == "AM" && hours == 12) {
        hours = 0
    }
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    
} 

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
