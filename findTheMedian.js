

function findTheMedian(arr){
        //Sort the array
        const sortedArray = arr.sort((a,b) => a-b)
        //Find the middle index
        const middleIndex = Math.floor(sortedArray.length/2)
        //Return the value at the middle index
        return sortedArray[middleIndex]
}