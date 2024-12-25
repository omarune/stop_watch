
function pad(unit) {
    return unit < 10 ? '0' + unit : unit;
}

let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startStopBtn.textContent = 'Start';
        var r = document.querySelector('.stopwatch');
        r.style.backgroundColor = 'red'; 
    } else {
        timer = setInterval(updateTime, 1000);
        startStopBtn.textContent = 'Stop';

        var g = document.querySelector('.stopwatch');
        g.style.backgroundColor = 'green'; 
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    var y = document.querySelector('.stopwatch');
    y.style.backgroundColor = 'white'; 
    isRunning = false;
});

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(unit) {
    return unit < 10 ? '0' + unit : unit;
}