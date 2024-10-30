import { quizZilla } from './question.js'; // Import des questions

// Récupérer les emplacements pour injecter la question et les options
const premiereQuestion = document.querySelector('.question')
const __________ = document.getElementById('__________');
premiereQuestion.innerHTML = ""

// Récupérer la première question
const firstQuestion = quizZilla.questions[0];

// Injecter le texte de la question dans l'emplacement dédié
firstQuestion.innerText = ;
console.log(firstQuestion);

// Pour chaque option, créer un bouton et l'ajouter au conteneur
firstQuestion.__________.forEach(__________ => {
  const __________ = document.createElement('button');
  __________.innerText = __________;
  __________.classList.add('__________');
  __________.appendChild(__________);
});
