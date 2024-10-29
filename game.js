import {quizZilla} from './question.js' // Import des questions

// Récupérer les emplacements pour injecter la question et les options
const premiereQuestion = document.querySelector('.question')
const optionContainer = document.querySelector('.options')

// Récupérer la première question
const firstQuestion = quizZilla.questions[0];

// Injecter le texte de la question dans l'emplacement dédié
premiereQuestion.innerText = firstQuestion.text;

// Pour chaque option, créer un bouton et l'ajouter au conteneur

firstQuestion.options.forEach(option => {
  const optionButton = document.createElement('button'); // crée l'élément button html <button></button>
  optionButton.innerText = option; // on change le text de button <button> le text de option </button>
  //optionPremierQuestion.classList.add('__________'); // on ajoute une classe à un élément html
  // optionButton.classList.add("pinguoin"); 
  optionContainer.appendChild(optionButton); // on ajoute le button comme enfant de optionPremierQuestion
});