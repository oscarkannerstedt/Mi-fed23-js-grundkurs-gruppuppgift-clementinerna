import { quizQuestions } from './quizData';
import { hidePage } from './removePage';
import { shuffleArray } from './manipulateArray';
import { initializeProgressBar, updateProgressBar } from './progressBar';

let currentQuestionIndex = 0;
let correctCount = 0;

initializeProgressBar();

function displayQuestion(index: number): void {
  hidePage();
  const question = quizQuestions[index];
  const quizContainer = document.querySelector('#quiz-container');

  if (quizContainer !== null && question !== undefined) {
    // create an array with the answers
    const answers = [
      question.rightAnswer,
      question.wrongAnswerOne,
      question.wrongAnswerTwo,
    ];

    // shuffle the order of the answers
    const shuffledAnswers = shuffleArray(answers);

    // shuffle the order of radio buttons
    const shuffledIndices: number[] = shuffleArray([0, 1, 2]);

    const answerHTML = shuffledIndices
      .map(
        (i) =>
          `<input type="radio" name="answer" value="${i}"><label>${shuffledAnswers[i]}</label><br>`,
      )
      .join('');

    quizContainer.innerHTML = `
    <h4>${question.question}</h4>
      <form id="quizForm">
        ${answerHTML}
        <br>
        <span class="correct-count">Correct answer count: ${correctCount}/10</span>
        <br>
        <button type="button" id="submitBtn">Submit Answer</button>
      </form>
    `;
    // Shows next question
    const submitButton = document.getElementById('submitBtn');
    if (submitButton !== null) {
      submitButton.addEventListener('click', () => {
        const selectedAnswerIndex = (
          document.querySelector(
            'input[name="answer"]:checked',
          ) as HTMLInputElement
        )?.value as unknown as number;

        if (selectedAnswerIndex !== undefined) {
          const selectedAnswer =
            shuffledAnswers[shuffledIndices[selectedAnswerIndex]];
          checkAnswer(selectedAnswer, question.rightAnswer);

          if (currentQuestionIndex < 9) {
            currentQuestionIndex += 1;
            updateProgressBar(currentQuestionIndex);
            displayQuestion(currentQuestionIndex);
          } else {
            currentQuestionIndex += 1;
            updateProgressBar(currentQuestionIndex);
            showResult(correctCount);
          }
        }
      });
    }
  } else {
    showResult(correctCount);
  }
}

// function to check if answer is correct
function checkAnswer(selectedAnswer: string, rightAnswer: string): void {
  if (selectedAnswer === rightAnswer) {
    correctCount += 1;
  }
}

// I will change this later to a pop-up window when a timer is added
function showResult(correctCount: number): void {
  const quizContainer = document.querySelector('#quiz-container');
  if (quizContainer !== null) {
    quizContainer.innerHTML = `<h4>You answered ${correctCount} out of 10 questions correctly.</h4>`;
  }
}

export { displayQuestion };
