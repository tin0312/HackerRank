/*
Function Description

Complete the dynamicArray function below.

dynamicArray has the following parameters:
- int n: the number of empty arrays to initialize in 
- string queries[q]: query strings that contain 3 space-separated integers

Returns

int[]: the results of each type 2 query in the order they are presented

Declare an interger called last answer with the initialized value of 0

There are 2 types of queries:

- Query: 1 x y

+ let idx = ((x ^ last answer) % n)
+ append integer y to arr[idx]

- Query: 2 x y

+ let idx = ((x ^ last answer) % n)
+ assign the value arr[idx]y%size(arr[idx]) to last answer.
+ store the new value of last answer to an answer array.
*/

function dynamicArray(n, queries) {
    let lastAnswer = 0;
    let resultArray = [];
    // Initialize an array of empty arrays
    let arr = new Array(n).fill().map(() => []);

    for (let i = 0; i < queries.length; i++) {
        // Parse the query
        let [queryType, x, y] = queries[i];

        if (queryType === 1) {
            // Query type 1
            let idx = (x ^ lastAnswer) % n;
            arr[idx].push(y);
        } else if (queryType === 2) {
            // Query type 2
            let idx = (x ^ lastAnswer) % n;
            lastAnswer = arr[idx][y % arr[idx].length];
            resultArray.push(lastAnswer);
        }
    }

    return resultArray;
}

