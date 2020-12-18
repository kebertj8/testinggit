  function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

function multiplesOfThreeAndFive() {   

  sum = []
  total = 0;
  y = []
  x = [range(1,1000)];
  if (x[i]/3 == 0 ) {
      sum.push(i);
    } else if (x[i]/5 == 0) {
      sum.push(i)
    } else {
      y.push(i)
    }
    for (var i =0; i < sum.length; i++) {
      total += sum[i]
    }
    return total
  }


// function multiplesOfThreeAndFive() {   
  
//   var sum = []
//   y = []
//   x = [range(1,1000)];
//   if (x[i]/3 == 0 ) {
//       sum.push(i);
//     } else if (x[i]/5 == 0) {
//       sum.push(i)
//     } else {
//       y.push(i)
//     }
//     return sum
//   }
// range(1, 1000); 
// for (i of range(1, 5)) {
//     console.log(i);
// }
// /* Output
//  * 1 2 3 4 5 */

// [...range(1, 5)] // [1, 2, 3, 4, 5]
  // console.log(i);

// function that loops from 1-1000 that looks for 
// all instances that the multiples are of 3 or five , and counts the results. then print the results. 
