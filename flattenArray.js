/*

- Given an arrays with different nested levels
- Return an array with all items flattened

*/

const flattenArray = (arr) => {
    return arr.reduce((acc, subArray) => {
        //use recursive call to flatten the array
        return acc.concat(Array.isArray(subArray) ? flattenArray(subArray) : subArray)
    }, [])
}

// test

console.log(flattenArray([1, [2,3, [4,5,6,7, [9, 10]]]]))