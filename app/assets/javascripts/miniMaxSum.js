function miniMaxSum(arr) {
  let sortedArray = arr.sort()
  let minArray = sortedArray.slice(0, -1)
  let maxArray = sortedArray.slice(1)
  let add = (a, b) => a + b
  let maxSum = maxArray.reduce(add)
  let minSum = minArray.reduce(add)
  console.log(minSum + " " + maxSum)
}
