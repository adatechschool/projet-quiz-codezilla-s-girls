import { quizZilla } from './question.js'; // Import des questions

// Récupérer les emplacements pour injecter la question et les options
const questionsElement = document.querySelector('.question');
const optionsQuestionElement = document.querySelector('.options');

// Récupérer la liste des questions question 
let questionsList = quizZilla.questions;

let currentIndex = 0;

// Créer une fonction qui affciche dynamiquement les questions
const displayQuestions = (index) => {
  const question = questionsList[index]
  questionsElement.innerText = question.text;

  optionsQuestionElement.innerHTML = ''

  question.options.forEach( option => {
    const optionElement = document.createElement('button');
    optionElement.innerText = option;
    optionsQuestionElement.appendChild(optionElement);
  });
};

// Récupérer le bouton suivant
const nextButton = document.getElementById('next-button');

nextButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex < quizZilla.questions.length){
    displayQuestions(currentIndex)
  } else {
    questionsElement.innerText = "Plus de question";
    optionsQuestionElement.innerHTML = '';
    nextButton.style.display = 'none';
  }
})

displayQuestions(currentIndex);