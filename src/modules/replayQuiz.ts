import { displayQuestion, currentQuestionIndex } from './displayQuestion';
import { initializeProgressBar } from './progressBar';
import { reset, start } from './timer';

let gamesPlayed = 0;

function replayOnClick():void {
  reset();
  start();
  displayQuestion(currentQuestionIndex);
  initializeProgressBar();
  gamesPlayed += 1;
}

function replay(element: HTMLElement):void {

  if (gamesPlayed < 1) {
    const replayBtn = document.createElement('button');
    replayBtn.innerText = 'Play Again';
    replayBtn.addEventListener('click', replayOnClick);
    element.appendChild(replayBtn);
  } 
}



export { replay };