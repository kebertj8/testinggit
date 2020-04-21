function getTotalX(a, b) {
  let count = []
  for (var i = 0; i <= a.length; i++) {
    if (a[i] % a[i] == 0 && b[i] % a[i] == 0) {
      count.push(a[i])
    }
  }
  for (var i = 0; i <= b.length; i++) {
    debugger
    if (b[i] % b[i] == 0 && b[i] % a[i] == 0) {
      count.push(a[i])
    }
  }
  console.log(count.length)
}

