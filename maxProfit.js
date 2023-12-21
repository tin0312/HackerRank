/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
    /*
- an array of prices of each day
- pick a day to buy one stock
- pick a day in the future to sell that stock
- the benefit = day of selling price - day of buying value
- Find the max benefit 
- If there is no benefit, return 0
*/
if (prices.length < 2){
    return 0
}
let profit = 0 
let stockIn = prices[0]
for (let i = 0; i < prices.length; i++){
        stockIn = Math.min(stockIn, prices[i])
        profit = Math.max(profit, prices[i] - stockIn)
}
    return profit
};
//Test
console.log(maxProfit([7,1,5,3,6,4])) //5