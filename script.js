let timer;
let startTime;
let elapsedTime = 0;
let running = false;

const timeDisplay = document.getElementById('time');
const lapContainer = document.getElementById('laps');

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', recordLap);

function startTimer() {
    if (running) return;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTime, 100);
    running = true;
}

function stopTimer() {
    clearInterval(timer);
    running = false;
}

function resetTimer() {
    clearInterval(timer);
    elapsedTime = 0;
    running = false;
    timeDisplay.textContent = "00:00:00";
    lapContainer.innerHTML = '';
}

function updateTime() {
    elapsedTime = Date.now() - startTime;
    const time = new Date(elapsedTime);
    const hours = String(time.getUTCHours()).padStart(2, '0');
    const minutes = String(time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(time.getUTCSeconds()).padStart(2, '0');
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

}

function recordLap() {
    if (!running) return;
    const lapTime = new Date(elapsedTime);
    const lapHours = String(lapTime.getUTCHours()).padStart(2, '0');
    const lapMinutes = String(lapTime.getUTCMinutes()).padStart(2, '0');
    const lapSeconds = String(lapTime.getUTCSeconds()).padStart(2, '0');
    const lapItem = document.createElement('div');
    lapItem.textContent = `Lap: ${lapHours}:${lapMinutes}:${lapSeconds}`;
    lapContainer.appendChild(lapItem);
}
