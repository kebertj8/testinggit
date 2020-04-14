function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let appleCounter = 0
   let orangeCounter = 0
   
   let appleDistanceArray = []
   let orangeDistanceArray = []
 
   for (let i = apples.length - 1; i >= 0; i--) {
     let sum = apples[i] + a
     appleDistanceArray.push(sum)
 
   }
   for (let i = oranges.length - 1; i >= 0; i--) {
     let sum1 = oranges[i] + a
     orangeDistanceArray.push(sum1)
   }
 
   for (let i = 0; i < appleDistanceArray.length; i++){
     if (appleDistanceArray[i] >= s && appleDistanceArray[i] <= t){
         appleCounter++
         }
   } 
 
   for (let i = 0; i < orangeDistanceArray.length; i++) {
     if (orangeDistanceArray[i] >= s && orangeDistanceArray[i] <= t){
       orangeCounter++
       }
   }
   
     console.log(appleCounter)
     console.log(orangeCounter)
 }



 console.log(apples.filter((value) => value + a >= s && value <= t).length)

 console.log(oranges.filter((value) => value + a >= s && value <= t).length)

 






// s - starting point
// t - ending point
// a - location of apple tree
// b - location of orange tree
// apples (array) - distance apple falls from tree
// oranges (array) - distance orange falls from tree

// Example: 

// s = 7
// t = 10
// a = 4
// b = 12
// apples = [2, 3, -4]
// oranges = [3, -2, -4]


//Add each apple distance to the position of the tree they land at,
// apple tree is at position 4 => [4 + 2, 4 + 3, 4 + -4] => [6, 7, 0]
// if added number is greater than s and less than t it lands on Sam's house
// if added number is less than s and greater than t it doesn't land on Sam's house
