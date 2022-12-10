var min = 0
var sec = 0
var MiliSecond = 0
var Hour = 0
var displayMin = document.getElementById("displayMin")
var displaySec = document.getElementById("displaySec")
var displayMiliSecond = document.getElementById("displayMiliSecond")
var displayHour = document.getElementById("displayHour")

var interval;

function timer(){
    MiliSecond++;
    if(MiliSecond == 10){
        MiliSecond = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++
            if (min == 60) {
                min = 0;
                Hour++
            }
        }
    }
    displayMiliSecond.innerHTML = MiliSecond
    displayMin.innerHTML = min
    displaySec.innerHTML = sec
    displayHour.innerHTML = Hour

}

function startTimer(){
    interval = setInterval(function () {
    timer()},100)
}
function pauseTimer (){
    clearInterval(interval)
}
function resetTimer(){
    pauseTimer()
    min = 0
    sec = 0
    MiliSecond = 0
    Hour = 0
    displayMiliSecond.innerHTML = MiliSecond
    displaySec.innerHTML = sec
    displayMin.innerHTML = min
    displayHour.innerHTML = Hour
}