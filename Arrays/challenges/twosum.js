//TWO SUM
//Imagine you have a list of numbers and a target number. Your job is to find two numbers in that list that add up to the target number. You also need to tell which positions (or indexes) those two numbers are at in the list.

//EXAMPLE
//If the list is [2,7,11,15] and the target is 9, then the answer would be [0,1] because 2 (at index 0) plus 7 (at index 1) equals 9.

function twoSum(numbers, target){
   for(let i = 0; i < numbers.length; i++){
      for(let j = i+1; j < numbers.length; j++){
         if(numbers[i] + numbers[j] === target){
            return [i, j];
         }
      }
   }

   return [];
}

const numbers =  [2,7,11,15]
const target = 9

console.log(twoSum(numbers, target))
