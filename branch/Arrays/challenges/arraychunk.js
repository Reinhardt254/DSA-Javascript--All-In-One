// ARRAY CHUNK
//Write a function that takes an array and a chunk size as input.
//The function should return a new array where the original array is split into chunks of the specified size.

// chunk([1,2,3,4,5,6,7,8], 3)     [[1,2,3],[4,5,6],[7,8]] 
// chunkArray([1,2,3,4,5], 2)      //Output: [[1,2],[3,4]]

function arrayChunk(items, size){
   const chunked = []
   let index = 0;

   while(index < items.length){
      const chunk = items.slice(index, index + size);
      console.log("-----------", chunk);
      chunked.push(chunk);
      index += size;
   }

   return chunked
}

const array1 = [1,2,3,4,5,6,7,8]
const array2 = [1,2,3,4,5]

console.log(arrayChunk(array2, 2))
