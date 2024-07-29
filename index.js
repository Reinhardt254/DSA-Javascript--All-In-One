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
