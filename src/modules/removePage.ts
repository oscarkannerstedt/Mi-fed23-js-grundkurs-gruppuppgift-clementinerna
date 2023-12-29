function hidePage():void {
  const start = document.querySelector('#start-only');
  const startBtn = document.querySelector('#start-button');
  const quizContainer = document.getElementById('quiz-container');

  startBtn.addEventListener('click', function() {
    start.style.display = 'none';
    quizContainer.style.display = 'block';
  });  
}

export { hidePage };