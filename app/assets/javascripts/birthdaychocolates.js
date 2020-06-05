function birthday(s, d, m) {
      let reducer = (a, c) => a + c;
      let count = 0;
      for (let i = 0; i < s.length; i++) {
        let temp = s.slice(i, m + i);
        if (temp.reduce(reducer) == d) {
          count++;
        }
      }
      return count;
}