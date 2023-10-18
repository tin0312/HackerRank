/*
   Let's create an emoji slot machine! Replace the hardcoded 
   data with random fruit emojis from an emojis API. 
   
   - Request emoji food data from the API resource below. Log it and look at it!
        - Write a function that takes in the data and returns a new array of only
        fruit emoji objects
        - Write a function to get 9 random fruits from your new array of fruit 
        
   - Load nine random fruits into the slot machine
*/ 
// slotMachine is an unorder list element
const slotMachine = document.querySelector('.emoji-slots-game'); 
// this url return an array of object which each represent an emoji
const food = 'https://apis.scrimba.com/emojihub/api/all/category/food-and-drink';

function makeFruitArray(arr){
   // filter the apit array to the one that has group of "food fruit"
   return arr.filter(emoji => emoji.group.includes("fruit"));
}

function getRandomFruits(arr){
    // initialize a new arr to hold 9 random fruits
    const randomFruits = [];
    // loop 9 times to gerate 9 fruits
    for(let i = 0; i < 9; i++){
        // for each iteration, generate a random number to get a random fruit then push to randomFruits array
        let randNum = Math.floor(Math.random() * arr.length);
        randomFruits.push(arr[randNum]);
    }
    return randomFruits
}

// write your fetch request here 
fetch(food)
    .then(response => response.json())
    .then(result => makeFruitArray(result))
    .then(fruits => getRandomFruits(fruits))
    .then(fruit => {
        fruit.forEach(fruit => {
            // dynamically render the fruit as a list element inside the unorder list html element
            slotMachine.innerHTML += `
                <li>
                    ${fruit.htmlCode}
                </li>
            `
        })
    })
    .catch(err => console.log(err))