class MyArray{
   constructor(){
      this.length = 0;
      this.data = {};
   }

   // Custom Push method
   push(item){
      this.data[this.length] = item;
      this.length++;
      return this.length;
   }

   // custom Get method
   get(index){
      return this.data[index]
   }

   // custom Pop method
   pop(){
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
   }

   // custom Shift method
   shift(){
      const firstItem = this.data[0];

      for (let i = 0; i < this.length; i++){
         this.data[i] = this.data[i + 1]
      }

      delete this.data[this.length - 1];
      this.length--;
      return firstItem;
   }

   //Custom Delete by index
   delete(index){
      const item = this.data[index];

      for (let i = index; i < this.length -1; i++){
         this.data[i] = this.data[i + 1];
      }

      delete this.data[this.length - 1];
      this.length--;
      return item;
   }
}

const myNewArray = new MyArray();

myNewArray.push("apple")
myNewArray.push("orange")
myNewArray.push("mango")

// console.log(myNewArray);
console.log(myNewArray.delete(1));

// =========================CHALLENGES================================//
//Reverse string

function reverseString(name){
   const items = name.split("").reverse().join("")
   console.log(items)
}

reverseString("mufasa")

//Palindrome
function palindrome(name){
   const data = name.split("").reverse().join("");
   console.log(data === name);
}

palindrome("abb")

// INT Reversal

function intReversal(items){
   const item = items.toString().split("").reverse().join("")
   const data = parseInt(item) * Math.sign(items)
   console.log(data) 
}

intReversal(-123456)

//Sentence capitalization

function capitalize(item){
   return item.toLowerCase().split(" ").map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalize("milk produce"))

//  FizzBuzz
//  Print numbers from 1 to n
//  If number is divisible by 3, print "Fizz"
//  If number is divisible by 5, print "Buzz"
//  If number is divisible by 3 and 5, print "FizzBuzz"
//  Else, print the number

function fizzBuzz(n){
   for(let i = 1; i <= n; i++){
      if(i % 3 === 0 && i % 5 === 0){
         console.log("FizzBuzz")
      }else if(i % 3 === 0){
         console.log("Fizz")
      }else if(i % 5 === 0){
         console.log("Buzz")
      }else{
         console.log(i)
      }
   }
}

// fizzBuzz(30)

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
