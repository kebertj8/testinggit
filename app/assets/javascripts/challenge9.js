// 1/17/20
function timeConversion(s){
  var time = readLine();
  var s = 12;
  var hour = time.replace("PM", ":*").replace("AM", ":/").split(":");
  if (hour[3] == '/') {
    if (hour[0] == "12") {
      hour[0] = '00';
    }
  } else {
    if (hour[0] == "12") {
      hour[0] = '12';
    } else {
      var s = s + parseInt(hour[0]);
      s.toString();
      hour[0] = s;
    }
  }
  console.log(hour[0] + ':' + hour[1] + ':' + hour[2])
}