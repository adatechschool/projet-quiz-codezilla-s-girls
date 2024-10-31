<<<<<<< HEAD
import {quizZilla} from './question.js' // Import des questions
// Récupérer les emplacements pour injecter la question et les options
const questionContainer = document.querySelector('.question')
const optionContainer = document.querySelector('.options')
// Récupérer la première question
const firstQuestion = quizZilla.questions[0];
// Injecter le texte de la question dans l'emplacement dédit questionContainer.innerText = firstQuestion.text;
questionContainer.innerText = firstQuestion.text
// Pour chaque option, créer un bouton et l'ajouter au conteneur
firstQuestion.options.forEach(option => {
  const optionButton = document.createElement('button'); // crée l'élément button html <button></button>
  optionButton.innerText = option; // on change le text de button <button> le text de option </button>
  //optionPremierQuestion.classList.add('__________'); // on ajoute une classe à un élément html
  // optionButton.classList.add("pinguoin");
  optionContainer.appendChild(optionButton); // on ajoute le button comme enfant de optionContainer
});
// Variables pour suivre l'état du quiz
let currentQuestionIndex = 0; // Commence à la première question
// Sélection des éléments HTML
const buttonSuivant = document.querySelector('#next-button');
//const __________ = document.getElementById('__________');
//const __________ = document.getElementById('__________');
// Fonction pour afficher une question basée sur l'index actuel
//function loadQuestion() {
function loadQuestion(currentQuestionIndex){
  // Vider le conteneur des options
  optionContainer.innerHTML = '';
  // Récupérer la question actuelle
  const currentQuestion = quizZilla.questions[currentQuestionIndex];
  // Injecter la question dans le HTML
  questionContainer.innerText = currentQuestion.text;
  // Injecter les options dans le HTML
  currentQuestion.options.forEach(option => {
    const optionButton = document.createElement('button');
    optionButton.innerText = option;
  
    optionContainer.appendChild(optionButton);
  });
  }
  //function loadQuestion() {
// Ajouter un écouteur d'événements pour le bouton "Suivant"
buttonSuivant.addEventListener('click',() => {
  // Incrémenter l'index de la question
  currentQuestionIndex++;
  // Vérifier s'il reste des questions
  if (currentQuestionIndex < quizZilla.questions.length) {
    // Afficher la question suivante
    loadQuestion(currentQuestionIndex)
    //currentQuestionIndex++
  } else {
    // Si plus de questions, indiquer la fin du quiz
    questionContainer.innerText = 'Fin du quiz';
    optionContainer.innerHTML = ''; // Effacer les options
    buttonSuivant.style.display = 'none'; // Cacher le bouton Suivant
    replayButton.style.display="inline-block"
=======
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
>>>>>>> main
  }
});

replayButton.addEventListener('click', () => {
<<<<<<< HEAD
  // TODO Réinitialiser l'index
    currentQuestionIndex=0
    buttonSuivant.style.display='inline-block'
    replayButton.style.display ='none'
  // TODO Cacher le bouton Rejouer et afficher le bouton Suivant
  // TODO Recharger la première question 
  loadQuestion(currentQuestionIndex)
});


function checkAnswer(selectedOption) {
   
    console.log(selectedOption);
 
  }
checkAnswer()



=======
  replayButton.style.display = 'none';
  nextButton.style.display = 'inline-block';
  currentIndex = 0;
  displayQuestions(currentIndex)
})

displayQuestions(currentIndex);


// Vérifier si la bonne réponse est sélectionné
const checkAnswer = () => {
  
}
>>>>>>> main
