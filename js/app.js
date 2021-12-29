var timer = document.getElementById("time_count");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var option5 = document.getElementById("option5");
var timerRead = 25;

function countdown() {
    start.style.display = "none";
    stop.style.display = "block";
    const startTime = Date.now();
    const endTime = startTime + (timerRead * 60 * 1000);

     myInterval = setInterval(() => {
        var diff = endTime - Date.now();
        var min = Math.floor(diff/(1000*60));
        var sec = Math.round((diff/(1000))%60);
        
        var mins, secs;
        if(min<10){
            mins = '0'+ min.toString();
        }else{
            mins = min.toString();
        }

        if(sec<10){
            secs= '0' + sec.toString();
        }else{
            secs=sec.toString();
        }
        timer.innerHTML = mins + ":" + secs;
        if(diff < 1000){
            endCountdown();
        }
     }, 1000);
    
}

function stopCountdown(){
    clearInterval(myInterval);
    start.style.display = "block";
    stop.style.display = "none";
    timer.innerHTML = timerRead.toString() +":00";
}
function endCountdown() {
    const alarm = new Audio("audio/alarm.wav");
    alarm.play();
    stopCountdown();
}

function setTimerRead(minutes) {
    if (minutes<10){
        timer.innerHTML = "0"+ minutes.toString() + ":00";
    }else{
        timer.innerHTML = minutes.toString() + ":00";
    }
    timerRead = minutes;

    switch (minutes) {
        case 5:
            option1.style.color = 'goldenrod'; 
            option2.style.color = 'white'; 
            option3.style.color = 'white'; 
            option4.style.color = 'white'; 
            option5.style.color = 'white'; 
            break;
        case 10:
            option1.style.color = 'white'; 
            option2.style.color = 'goldenrod'; 
            option3.style.color = 'white'; 
            option4.style.color = 'white'; 
            option5.style.color = 'white';
            break;
        case 60:
            option1.style.color = 'white'; 
            option2.style.color = 'white'; 
            option3.style.color = 'white'; 
            option4.style.color = 'goldenrod'; 
            option5.style.color = 'white';
            break;
        case 120:
            option1.style.color = 'white'; 
            option2.style.color = 'white'; 
            option3.style.color = 'white'; 
            option4.style.color = 'white'; 
            option5.style.color = 'goldenrod';
            break;
        default:
            option1.style.color = 'white'; 
            option2.style.color = 'white'; 
            option3.style.color = 'goldenrod'; 
            option4.style.color = 'white'; 
            option5.style.color = 'white';
            break;
    }
}
//background sound??loca