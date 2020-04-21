// function getTotalX(a, b) {
//   let count = []
//   for (var i = 0; i <= a.length; i++) {
//     if (a[i] % a[i] == 0 && b[i] % a[i] == 0) {
//       count.push(a[i])
//     }
//   }

//   for (var j = 0; j <= b.length; j++) {
//     if (b[j] % b[j] == 0 && a[i] % b[j] == 0) {
//       count.push(b[j])
//     }
//   }

//   return count.length
// }

// Passed 3/9

function getTotalX(a, b) {

  let count = 0
  
  for(let i = 1; i <= 100; i++){
    if(a.every(int => (i % int == 0))) {
      if (b.every(int => (int % i == 0)))
        count++
    }
  }
  
  return count
}