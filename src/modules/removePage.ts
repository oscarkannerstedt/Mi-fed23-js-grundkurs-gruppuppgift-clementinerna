function hidePage(): void {
  const start: HTMLElement | null = document.querySelector('#start-only');
  const startBtn: HTMLElement | null = document.querySelector('#start-button');
  const quizContainer: HTMLElement | null =
    document.getElementById('quiz-container');

  if (startBtn !== null && start !== null && quizContainer !== null) {
    startBtn.addEventListener('click', function () {
      start.style.display = 'none';
      quizContainer.style.display = 'block';
    });
  }
};

export { hidePage };
