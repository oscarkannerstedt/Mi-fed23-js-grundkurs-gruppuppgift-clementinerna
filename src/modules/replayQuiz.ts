import { displayQuestion, currentQuestionIndex } from './displayQuestion';

function replay(element: HTMLElement):void {
  const replayBtn = document.createElement('button');
  replayBtn.innerText = 'Play Again';
  replayBtn.addEventListener('click', () => {
    displayQuestion(currentQuestionIndex);
  });
  element.appendChild(replayBtn);
}



export { replay };