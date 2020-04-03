function reversedInt(int) {
  return (
    parseFloat(
      int
      .toString()
      .split('')
      .reverse()
      .join('')
    ) * Math.sign(int)
  )
}
