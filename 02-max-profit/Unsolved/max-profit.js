// Write a function that takes an array of integers representing the price of a stock on different days. Return the maximum profit that can be made from buying and selling a single stock

var prices = [7, 1, 5, 3, 6, 4];
// var prices = [9, 7, 4, 1];

var maxProfit = function (prices) {
  var profit = 0;
  for (i = 0; i < prices.length; i++) {
    for (j = prices.length - 1; j > i; j--) {
      console.log(prices[j], prices[i], prices[j] - prices[i]);
      if (prices[j] - prices[i] > profit) {
        profit = prices[j] - prices[i];
      }
    }
  }
  if (profit <= 0) {
    console.log(profit);
    return 0;
  }
  console.log(profit);
  return profit;
};
maxProfit(prices);
