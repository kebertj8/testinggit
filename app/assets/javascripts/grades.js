function gradingStudents(grades) {
  let finalGrade = []
  for (let i = 0; i <= grades.length; i++) {
    if (grades[i] <= 40) {
      finalGrade.push(grades[i])
    }
    if (grades[i] >= 40) {
      finalGrade.push(Math.ceil(grades[i] / 5) * 5)
    }
  }
  return finalGrade
}



function gradingStudents(grades){

  let finalGrade = []
  let roundedGrade = []
  
  for(let i = 0; i <= grades.length; i++){
    if(grades[i] < 40 && grades[i] < 38 ){
      finalGrade.push(grades[i])
    }
    else if (grades[i] >= 38) {
      roundedGrade.push(Math.ceil(grades[i]/5) * 5)
    }
    for (let y = 0; y <= roundedGrade.length; y++){
      let difference = roundedGrade[i] - grades[i]
      if (difference < 3){
        finalGrade.push(roundedGrade[i])
      } 
      else if (difference === 3){
        finalGrade.push(grades[i])
      }
    }
  }
  
  return finalGrade
  }