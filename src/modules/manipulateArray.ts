import { quizQuestions } from './quizData.ts';

function quizQuestionsShuffle(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
        const j: number = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    
    return array;
};

export { quizQuestionsShuffle };