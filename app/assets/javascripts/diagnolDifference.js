function diagonalDifference(arr) {
  let diagonal1 = 0
  let diagonal2 = 0
  for (let i = 0; i < arr.length; i++) {
    diagonal1 += arr[i][i]
    diagonal2 += arr[arr.length - 1 - i][i]
  }
  return Math.abs(diagonal1 - diagonal2)
}
// diagonalDifference of a matrix 