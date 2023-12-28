import { quizQuestions } from './quizData';
import { hidePage } from './removePage';

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

    // Shuffle the order of the answers, shuffleArray should be the function that Jessika is made
    // shuffleArray(answers);

    // Create radio buttons for each answer
    const answerHTML = answers
      .map(
        (answer, i) =>
          `<input type="radio" name="answer" value="${i}"><label>${answer}</label><br>`)
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
      });
    }
  } else {
    // here should the function be that show result message when player answered 10 questions
  }
}

export { displayQuestion };
