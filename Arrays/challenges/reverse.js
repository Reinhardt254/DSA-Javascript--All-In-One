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

palindrome("abba")

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
