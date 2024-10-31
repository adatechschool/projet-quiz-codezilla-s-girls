import { quizZilla } from './question.js'; // Import des questions

// Récupérer les emplacements pour injecter la question et les options
const questionsElement = document.querySelector('.question');
const optionsQuestionElement = document.querySelector('.options');

// Récupérer la liste des questions question 
let questionsList = quizZilla.questions;

let currentIndex = 0;

// Créer une fonction qui affciche dynamiquement les questions
const displayQuestions = (index) => {
  const question = questionsList[index];
  questionsElement.innerText = question.text;

  optionsQuestionElement.innerHTML = '';

  question.options.forEach( option => {
    const optionElement = document.createElement('button');
    optionElement.innerText = option;
    optionsQuestionElement.appendChild(optionElement);
  });
};

// Récupérer le bouton suivant & le button replay
const nextButton = document.getElementById('next-button');
const replayButton = document.getElementById('replay-button');

nextButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex < quizZilla.questions.length){
    displayQuestions(currentIndex)
  } else {
    questionsElement.innerText = "Plus de question";
    optionsQuestionElement.innerHTML = '';
    nextButton.style.display = 'none';
    replayButton.style.display = 'inline-block';
  }
});

replayButton.addEventListener('click', () => {
  replayButton.style.display = 'none';
  nextButton.style.display = 'inline-block';
  currentIndex = 0;
  displayQuestions(currentIndex)
})

displayQuestions(currentIndex);


// Vérifier si la bonne réponse est sélectionné
const checkAnswer = () => {
  
}