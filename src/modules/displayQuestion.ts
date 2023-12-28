import { quizQuestions } from './quizData';
import { quizQuestionsShuffle } from './manipulateArray';

function displayQuestion(index: number): void {
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
    const shuffledAnswers = quizQuestionsShuffle(answers);

    // shuffle the order of radio buttons
    const shuffledIndices: number[] = quizQuestionsShuffle([0, 1, 2]);

    const answerHTML = shuffledIndices
      .map(
        (i) =>
          `<input type="radio" name="answer" value="${i}"><label>${shuffledAnswers[i]}</label><br>`)
      .join('');

    quizContainer.innerHTML = `
    <h4>${question.question}</h4>
      <form id="quizForm">
        ${answerHTML}
        <br>
        <button type="button" id="submitBtn">Submit Answer</button>
      </form>
    `;

    const submitButton = document.getElementById('submitBtn');
    if (submitButton !== null) {
      submitButton.addEventListener('click', () => {
        // Here should the checkAnswer be to check if answer is correct.
        // call the function that check if answer is correct
      });
    }
  } else {
    // here should the function be that show result message when player answered 10 questions
  }
}

export { displayQuestion };
