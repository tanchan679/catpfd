const zeroPad = (num, places) => String(num).padStart(places, '0')
function countdownToTheDesiredTime(year,month,days, hour, minute,second){
    var countDownDate = new Date(year,month-1,days,hour,minute,second).getTime();
    setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("days").innerHTML = zeroPad(days,2);
        document.getElementById("hrs").innerHTML = zeroPad(hours,2);
        document.getElementById("mins").innerHTML = zeroPad(minutes,2);
        document.getElementById("sec").innerHTML = zeroPad(seconds,2);
        if (distance < 0) {
            clearInterval(x);
        }
    }, 1000);
}
