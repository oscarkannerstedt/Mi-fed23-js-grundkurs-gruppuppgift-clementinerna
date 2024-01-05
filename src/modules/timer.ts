const display = document.querySelector('#display') as HTMLDivElement;
const resetBtn = document.querySelector('#resetBtn') as HTMLButtonElement;
const startButton = document.querySelector('#start-button') as HTMLButtonElement;

startButton.addEventListener('click', start);
resetBtn.addEventListener('click', reset);

let elapsedTime: number = 0;
let timerInterval: number = 0;

export function timeToString(time: number): string {
  const diffInHours = time / 3600000;
  const hours = Math.floor(diffInHours);

  const diffInMinutes = (diffInHours - hours) * 60;
  const minutes = Math.floor(diffInMinutes);

  const diffInSeconds = (diffInMinutes - minutes) * 60;
  const seconds = Math.floor(diffInSeconds);

  const diffInMseconds = (diffInSeconds - seconds) * 100;
  const mseconds = Math.floor(diffInMseconds);

  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');
  const formattedMseconds = mseconds.toString().padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}:${formattedMseconds}`;
};

export function printDisplay(txt: string): void {
  display.innerHTML = txt;
};

export function start(): void {
  const startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    printDisplay(timeToString(elapsedTime));
  }, 10);
};

export function stop(): void {
  clearInterval(timerInterval);
};

export function reset(): void {
  clearInterval(timerInterval);
  printDisplay('00:00:00');
  elapsedTime = 0;
};