// // 1/17/20
// function timeConversion(s){
//   var time = readLine();
//   var s = 12;
//   var hour = time.replace("PM", ":*").replace("AM", ":/").split(":");
//   if (hour[3] == '/') {
//     if (hour[0] == "12") {
//       hour[0] = '00';
//     }
//   } else {
//     if (hour[0] == "12") {
//       hour[0] = '12';
//     } else {
//       var s = s + parseInt(hour[0]);
//       s.toString();2
//       hour[0] = s;
//     }
//   }
//   console.log(hour[0] + ':' + hour[1] + ':' + hour[2])
// }

// // 2/7/20
// function timeConversion(s) {
//   var time = readLine();
//   var s = 12;
//   if (time === /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/) {
//     return time
//   } else {
//     console.log("test")
//   }
// }


// 4/1/20
// function main (){
// var time = readLine();

// let hours = time.substring(0, 2);
// let mins = time.substring(3, 2);
// let secs = time.substring(6, 2);
// let pmOrAm = time.substring(-2, 2);

// if (hours == '12' & pmOrAm == 'AM') {
//   console.log(`00:${mins}:${secs}`)
// } else if (hours !== '12' & pmOrAm == 'PM') {
//   console.log(`${parseInt(hours) + 12}:${mins}:${secs}`)
// } else {
//   console.log(`${hours}:${mins}:${secs}`)} 
// } 

// Winner!!!

function timeConversion(s) {
  const arr = s.slice(0, 8).split(':');
  arr[0] = (s.indexOf('PM') > -1) ?
    (arr[0] == 12 ? '12' : Number(arr[0]) + 12) :
    (arr[0] == 12 ? '00' : arr[0]);
  return arr.join(':');
}