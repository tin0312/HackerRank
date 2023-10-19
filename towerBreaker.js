/*Two players are playing a game of Tower Breakers! Player 1 always moves first, and both players always play optimally.The rules of the game are as follows:

Initially there are n towers.
Each tower is m of height .
The players move in alternating turns.
In each turn, a player can choose a tower of x height  and reduce its height to y, where y evenly divides x where x > y >=1.
If the current player is unable to make a move, they lose the game.
Given the values of  n and m, determine which player will win. If the first player wins, return 1. */

function towerBreakers(n, m) {
    // Check if the number of towers or the height of the towers is even
    // If either is even, Player 2 will win; otherwise, Player 1 will win
    return (n % 2 === 0) || (m === 1) ? 2 : 1;
}

const result = towerBreakers(2, 3);
console.log(result);  

/*

there are 2 towers, each tower is 3 unit tall

-The first player picks the first tower then reduce it to 2 

-Now, the second player picks the second tower and recduce it to 2

-The first player reduces the first tower to 1

- The second player reduces the second tower to 1

- All the towers now are 1 unit tall and cannot be reduced then player 1 loses


*/ 
