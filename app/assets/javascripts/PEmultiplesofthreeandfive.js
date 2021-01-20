  function multiplesOf3and5(number) {
  let total = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      total += i;
    }
  }
  return total;
}
    

//   function range(start, end) {
//     var ans = [];
//     for (let i = start; i <= end; i++) {
//         ans.push(i);
//     }
//     return ans; 
// }

// function multiplesOfThreeAndFive() {   
//   sum = []
//   x = [range(1,1000)];
//   if (x[i]/3 ==0 || x[i]/5 == 0 ) {
//       sum.push(i);
//     } else {
//       x = x 
//     }
//   }

// function count() {
//   total = 0;
//   x = [multiplesOfThreeAndFive]
// for (var i =0; i < x.length; i++) {
//       total += x[i]
//     }
//     return total
// }