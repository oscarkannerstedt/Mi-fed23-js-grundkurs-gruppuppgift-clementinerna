import { displayQuestion } from './displayQuestion';

function replay(element: HTMLElement):void {
  const replayBtn = document.createElement('button');
  replayBtn.innerText = 'Play Again';
  replayBtn.addEventListener('click', () => {
    displayQuestion(0);
  });
  element.appendChild(replayBtn);
}



export { replay };