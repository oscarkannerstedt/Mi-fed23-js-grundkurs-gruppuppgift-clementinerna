import { displayQuestion, currentQuestionIndex } from './displayQuestion';
import { initializeProgressBar } from './progressBar';

let gamesPlayed = 0;

function replay(element: HTMLElement):void {
  if (gamesPlayed < 1) {
    const replayBtn = document.createElement('button');
    replayBtn.innerText = 'Play Again';
    replayBtn.addEventListener('click', () => {
      displayQuestion(currentQuestionIndex);
      initializeProgressBar();
      gamesPlayed += 1;
    });
    element.appendChild(replayBtn);
  } 
}



export { replay };