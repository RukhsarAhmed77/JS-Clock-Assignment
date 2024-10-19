var date = new Date;

var hour = date.getHours()
var minutes = date.getMinutes()
var seconds = date.getSeconds()
var milliseconds = date.getMilliseconds()

var hourin12Format = hour % 12
if (hourin12Format === 0){
    hourin12Format = 12
}

var period;

if (hourin12Format < 12) {
    period = "AM"
}else{
    period = "PM"
}

if (seconds < 10) {
    seconds = "0" + seconds
}

if (milliseconds < 10) {
    milliseconds = "00" + milliseconds
}else if (milliseconds < 100) {
    milliseconds = "0" + milliseconds
}

document.write("<h1>" + hourin12Format + ":" + minutes + ":" + seconds + " : " + milliseconds + " " + period)