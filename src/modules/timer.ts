

let display: Element | null = document.querySelector('#display');
let startBtn: Element | null = document.querySelector('#startBtn');
let stopBtn: Element | null = document.querySelector('#stopBtn');
let resetBtn: Element | null = document.querySelector('#resetBtn');

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);

let elapsedTime: number = 0;
let timerInterval: number = 0;

function timeToString(time: number): string {
  let diffInHours = time / 3600000;
  let hours = Math.floor(diffInHours);

  let diffInMinutes = (diffInHours - hours) * 60;
  let minutes = Math.floor(diffInMinutes);

  let diffInSeconds = (diffInMinutes - minutes) * 60;
  let seconds = Math.floor(diffInSeconds);

  let diffInMseconds = (diffInSeconds - seconds) * 100;
  let mseconds = Math.floor(diffInMseconds);

  let formattedMinutes = minutes.toString().padStart(2, "0");
  let formattedSeconds = seconds.toString().padStart(2, "0");
  let formattedMseconds = mseconds.toString().padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}:${formattedMseconds}`;
};

function printDisplay(txt: string): void {
  display.innerHTML = txt;
};

function start(): void {
  let startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    printDisplay(timeToString(elapsedTime));
  }, 10);
};

function stop(): void {
  clearInterval(timerInterval);
};

function reset(): void {
  clearInterval(timerInterval);
  printDisplay('00:00:00');
  elapsedTime = 0;
};