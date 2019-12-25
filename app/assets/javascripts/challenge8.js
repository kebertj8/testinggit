function birthdayCakeCandles(ar) {
  const max = Math.max(...ar)
  return ar.filter(x => x === max).length
}
