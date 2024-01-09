import { displayQuestion, currentQuestionIndex } from './displayQuestion';
import { initializeProgressBar } from './progressBar';
import { reset, start } from './timer';

function replay(element: HTMLElement):void {
  const replayBtn = document.createElement('button');
  replayBtn.innerText = 'Play Again';
  replayBtn.addEventListener('click', () => {
    reset();
    start();
    displayQuestion(currentQuestionIndex);
    initializeProgressBar();
  });
  element.appendChild(replayBtn);
}



export { replay };