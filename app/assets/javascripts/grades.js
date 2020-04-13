function gradingStudents(grades) {
  let finalGrade = []

  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38 || grades[i] % 5 < 3) {
      finalGrade.push(grades[i])
    }
    else {
      finalGrade.push(Math.ceil(grades[i] / 5) * 5)
    }
  }

  return finalGrade
}