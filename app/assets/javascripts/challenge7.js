// function miniMaxSum(arr) {
//   let arr = []
//   let arr2 = arr - arr.min
//   for (let i = 0; i < arr.length; i++) {
//     arr += arr.reduce[i]
//     arr2 += arr2.reduce[i]
    
//   }
//   return Math.abs(arr)
//   return Math.abs(arr2)
// }

function miniMaxSum(arr) {
  let sortedArray = arr.sort()
  let minArray = sortedArray.slice(0, -1)
  let maxArray = sortedArray.slice(1)
  let add = (a, b) => a + b
  let maxSum = maxArray.reduce(add)
  let minSum = minArray.reduce(add)
  console.log(minSum + " " + maxSum)
}
