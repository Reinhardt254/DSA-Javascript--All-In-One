//MAX PROFIT
//Imagine you are buying and selling stocks throughout the year. Your job is to find the biggest profit you could make by buying low and selling high once.
//Here is what you are given: A list of stock prices for each day [7, 1, 5, 3, 6, 4].
//Here is what you need to find; The difference between the cheapest price you could have bought the stock and the most expensive price you could have sold it later on.

function maxProfit(prices){
   let minPrice = prices[0]; //Assume the first day is the cheapest to buy
   let maxProfit = 0;

   for (let i = 1; i < prices.length; i++){
      const currentPrice = prices[i];
      
      //Update the minimum price if the lower price is found
      minPrice = Math.min(minPrice, currentPrice);
      
      const potentialProfit = currentPrice - minPrice;
     
      maxProfit = Math.max(maxProfit, potentialProfit);
      
      console.log(maxProfit)
   }

   return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];
const profit = maxProfit(prices);
console.log(`Maximum profit: ${profit}`);