/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/

const gameNightFood = {
  "🍕 pizza": 3,
  "🌮 tacos": 10,
  "🥗 salads": 7,
  "🍝 pasta": 5,
};

function findTheWinner(obj) {
  let maxVotes = 0;
  let winner = "";

  // Iterate through the keys of the object
  for (let key in obj) {
    // Compare the current value with the maximum votes
    if (obj[key] > maxVotes) {
      maxVotes = obj[key];
      winner = key;
    }
  }

  return `The winner is ${winner} with ${maxVotes} votes`
}

console.log(findTheWinner(gameNightFood));
