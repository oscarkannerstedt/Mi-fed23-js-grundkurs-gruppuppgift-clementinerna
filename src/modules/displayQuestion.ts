import { quizQuestions } from './quizData';
import { hidePage } from './removePage';
import { shuffleArray } from './manipulateArray';
import { initializeProgressBar, updateProgressBar } from './progressBar';
import { removeObjFromArray } from './removeQuestion';
import { stop, timeToString } from './timer';
import { replay } from './replayQuiz';

let currentQuestionIndex = 0;
let correctCount = 0;

initializeProgressBar();
shuffleArray(quizQuestions);

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
      .map((i) => {
        const radioId = `answer${i}`;
        return `
          <label id="label_${radioId}" for="${radioId}">
           <input type="radio" name="answer" id="${radioId}" value="${i}" aria-labelledby="label_${radioId}">
           ${shuffledAnswers[i]}
          </label><br>
          `;
      })
      .join('');

    quizContainer.innerHTML = `
    <h4>${currentQuestionIndex + 1}. ${question.question}</h4>
      <form id="quizForm">
        ${answerHTML}
        <br>
        <span class="correct-count">Correct answer count: ${correctCount}/10</span>
        <br>
        <button type="button" class="submitBtn" id="submitBtn">Submit Answer</button>
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
        )?.value;

        if (selectedAnswerIndex !== undefined) {
          const selectedAnswer = shuffledAnswers[parseInt(selectedAnswerIndex)];
          checkAnswer(selectedAnswer, question.rightAnswer);

          if (currentQuestionIndex < 9) {
            removeObjFromArray(question);
            currentQuestionIndex += 1;
            updateProgressBar(currentQuestionIndex);
            displayQuestion(currentQuestionIndex);
          } else {
            removeObjFromArray(question);
            currentQuestionIndex += 1;
            updateProgressBar(currentQuestionIndex);
            stop();
            showResult(correctCount);
            currentQuestionIndex = 0;
            correctCount = 0;
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

// function to display pop up window with results
function showResult(correctCount: number): void {
  const elapsedTime = stop();
  const quizContainer: HTMLElement | null = document.querySelector('#quiz-container');

  if (quizContainer !== null) {
    quizContainer.innerHTML = `<h4 class="sista">You answered ${correctCount} out of 10 questions correctly.</h4>`;
    const resultMessage = document.createElement('div');
    resultMessage.className = 'modal';
    resultMessage.innerHTML = `
      <h4>You answered ${correctCount} out of 10 questions correctly.</h4>
      <p>Time taken: ${timeToString(elapsedTime)}</p>
      <button id="closeResult">Close</button>
    `;

    const closeButton = resultMessage.querySelector('#closeResult');
    if (closeButton !== null) {
      closeButton.addEventListener('click', () => {
        quizContainer.removeChild(resultMessage);
      });
    }

    quizContainer.innerHTML = '';
    quizContainer.appendChild(resultMessage);

    replay(quizContainer);
  }
}

export { displayQuestion, currentQuestionIndex };
