import { quizZilla } from './question.js'; // Import des questions

// Récupérer les emplacements pour injecter la question et les options
const premiereQuestion = document.querySelector('.question');
const optionPremierQuestion = document.querySelector('.options1');

// Récupérer la première question
const firstQuestion = quizZilla.questions[0].text;

// Récupérer les options de la première question 
const optionFirstQuestion = quizZilla.questions[0].options
//console.log(optionFirstQuestion)

// Injecter le texte de la question dans l'emplacement dédié
premiereQuestion.innerText = firstQuestion;

// Pour chaque option, créer un bouton et l'ajouter au conteneur
optionFirstQuestion.forEach( option => {
  //console.log(option)
  const optionElement = document.createElement('button');
  optionElement.innerText = option;
  optionPremierQuestion.appendChild(optionElement);
});
