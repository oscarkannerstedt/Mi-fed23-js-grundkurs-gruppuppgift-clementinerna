import './scss/style.scss'; // Importera huvud-SCSS-filen
import { shuffleArray } from './modules/manipulateArray';
import { quizQuestions } from './modules/quizData';
import { displayQuestion } from './modules/displayQuestion';

console.log(shuffleArray(quizQuestions));

displayQuestion(0);