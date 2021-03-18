
let paused = false;
let started = false;

function startTimer()
{
    var time = document.getElementById('start-time').value;
    if(time.match(/^\d+$/))//если не число
    {
        time = parseInt(time);
        timers(time);
        document.getElementById('validate-timer').style.display = 'none';
    }
    else
    {
        document.getElementById('validate-timer').style.display = 'block';
    }
    

};

function restartTimer()
{
    clearInterval(timer);
    started = false;
    startTimer();
};
function pauseTimer()
{
    if(paused)
    {
        paused = false;
    }
    else
    {
        paused = true;
    }
};

function timers(time)
{
    
    if(started)
    {
        console.log('таймер уже запущен');

    }
    else
    {
        document.getElementById('hide-div-timer').style.display = 'block';
        paused =false;
        timer = setInterval(function (){
        

            let minutes = Math.floor(time/60);
            let seconds = time - (minutes*60);
            let hour = Math.floor(minutes/60);
            minutes = minutes - (hour*60);

            if(seconds ==0 && minutes ==0 && hour ==0)
            {
                started = false;
                document.getElementById('time').innerHTML = 'Время закончилось!';
                clearInterval(timer);
            }
            else if(paused)
            {
                console.log("пауза");
                ++time;
                let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
                document.getElementById('time').innerHTML = strTimer;
                document.getElementById('pause').innerHTML = 'Продолжить';
                
            }
            else
            {
                let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
                document.getElementById('time').innerHTML = strTimer;
                console.log(hour+ ':'+minutes + ':' + seconds);
                document.getElementById('pause').innerHTML = 'Пауза';
                started = true;
            }
            --time;

        }, 1000)
    }
};

    // 340

    

