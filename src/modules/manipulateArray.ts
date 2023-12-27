import { quizQuestions } from './quizData.ts';

function quizQuestionsShuffle(quizQuestions: any) {
    for (let i = quizQuestions.length - 1; i > 0; i--) {
        const j: number = Math.floor(Math.random() * (i + 1));
        [quizQuestions[i], quizQuestions[j]] = [quizQuestions[j], quizQuestions[i]];
    }
};

quizQuestionsShuffle(quizQuestions);

export { quizQuestionsShuffle };