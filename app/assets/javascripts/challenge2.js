// Complete the compareTriplets function below.
function compareTriplets(a, b) {
  let counterA = 0
  let counterB = 0
  // loop through the a array
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      counterA++
    } else if (a[i] < b[i]) {
      counterB++
    }
  }
  return [counterA, counterB]
}