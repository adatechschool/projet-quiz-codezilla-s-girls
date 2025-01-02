import { quizZilla } from "./question.js";
import { currentQuestionIndex } from "./dom.js";

export const progress_bar = document.querySelector('.progress');
progress_bar.style.display = 'block';
export const updateProgressBar = () => {
  const progressPercentage = (currentQuestionIndex / quizZilla.questions.length) * 100;
  progress_bar.style.width = `${progressPercentage}%`;
};
