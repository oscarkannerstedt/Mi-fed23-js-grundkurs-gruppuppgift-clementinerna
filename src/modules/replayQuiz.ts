import { displayQuestion, currentQuestionIndex } from './displayQuestion';
import { initializeProgressBar } from './progressBar';

function replay(element: HTMLElement):void {
  const replayBtn = document.createElement('button');
  replayBtn.innerText = 'Play Again';
  replayBtn.addEventListener('click', () => {
    displayQuestion(currentQuestionIndex);
    initializeProgressBar();
  });
  element.appendChild(replayBtn);
}



export { replay };