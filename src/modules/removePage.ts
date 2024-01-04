function hidePage(): void {
  const start: HTMLElement | null = document.querySelector('#start-only');
  const startBtn: HTMLElement | null = document.querySelector('#start-button');
  const progressBarContainer: HTMLElement | null = document.querySelector('#progress-bar-container');
  const quizContainer: HTMLElement | null =
    document.getElementById('quiz-container');

  if (startBtn !== null && start !== null && quizContainer !== null && progressBarContainer !==  null) {
    startBtn.addEventListener('click', function () {
      start.style.display = 'none';
      quizContainer.style.display = 'block';
      progressBarContainer.style.display = 'block';
    });
  }
};

export { hidePage };
