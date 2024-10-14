//O(n)
const studentsDatabase = ["Juma", "Kilonzo", "Joshua", "Kimanzi", "Situma"]

const findStudent = (allStudents, studentName) => {
   for(let i = 0; i < allStudents.length; i++){
      if(allStudents[i] === studentName){
         console.log(`Found ${studentName}`)
      }else{
         console.log("Result not found")
      }
   }
}

findStudent(studentsDatabase, "Kilonzo")

// O(1)
const numbers = [1, 2, 3, 4, 5];
const getElement = (arr, index) => arr[index];
console.log(getElement(numbers, 0));

// O(n^2)
function findPairs(arr){
   for(let i = 0; i < arr.length; i++){
      for(let j = i+1; j < arr.length; j++){
         console.log(`pair ${arr[i]}, ${arr[j]}`);        
      }
   }
}

const numbersArray = [1, 2, 3, 4, 5];
findPairs(numbersArray);
