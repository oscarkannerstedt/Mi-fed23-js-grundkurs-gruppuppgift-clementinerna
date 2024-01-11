import { displayQuestion, currentQuestionIndex } from './displayQuestion';
import { initializeProgressBar } from './progressBar';

function replay(element: HTMLElement):void {
  const replayBtn = document.createElement('button');
  replayBtn.innerText = 'Play Again';
  replayBtn.classList.add('replayBtn');
  replayBtn.addEventListener('click', () => {
    displayQuestion(currentQuestionIndex);
    initializeProgressBar();
  });
  element.appendChild(replayBtn);
}



export { replay };