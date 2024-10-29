import { quiz_fatoumata_kebe } from './question.js'; // Import des questions

// Récupérer les emplacements pour injecter la question et les options
const premiereQuestion = document.querySelector('.question')
const optionPremierQuestion = document.querySelector('.options1')

// Récupérer la première question
const firstQuestion = __________.questions[0];

// Injecter le texte de la question dans l'emplacement dédié
__________.innerText = __________;

// Pour chaque option, créer un bouton et l'ajouter au conteneur
firstQuestion.__________.forEach(__________ => {
  const __________ = document.createElement('button');
  __________.innerText = __________;
  __________.classList.add('__________');
  __________.appendChild(__________);
});
