const start: HTMLElement | null = document.querySelector('#start-only');
const startBtn: HTMLElement | null = document.querySelector('#start-button');
const progressBarContainer: HTMLElement | null = document.querySelector('#progress-bar-container');
const quizContainer: HTMLElement | null = document.getElementById('quiz-container');

function hidePage(): void {
  

  if (startBtn !== null && start !== null && quizContainer !== null && progressBarContainer !==  null) {
    startBtn.addEventListener('click', showQuizContainer);
 
  }
  
};
function showQuizContainer (): void {
  if (start !== null) {
    start.classList.add('hidden');
  }
  if (quizContainer !== null) {
    quizContainer.classList.add('block');
   
  }
  if (progressBarContainer !== null) {
    progressBarContainer.classList.add('block');  
    
  }
};

export { hidePage };
