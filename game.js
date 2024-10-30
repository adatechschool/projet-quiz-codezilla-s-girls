import {quizZilla} from './question.js' // Import des questions

// Récupérer les emplacements pour injecter la question et les options
const questionContainer = document.querySelector('.question')
const optionContainer = document.querySelector('.options')


// Récupérer la première question
const firstQuestion = quizZilla.questions[0];

// Injecter le texte de la question dans l'emplacement dédit questionContainer.innerText = firstQuestion.text;

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
   // __________.classList.add('__________');
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
  }
});
//}
// Charger la première question au chargement de la page

loadQuestion();


//loadQuestion();
// Sélection des éléments HTML
const replayButton = document.querySelector('#replay-button')
//TODO Ajouter le bouton rejouer à votre liste d‘élements
// Fonction pour réinitialiser le quiz
replayButton.addEventListener('click', () => {
  // TODO Réinitialiser l'index 
  
    currentQuestionIndex=0 
    buttonSuivant.style.display='none'
    replayButton.style.display =''
  
  // TODO Cacher le bouton Rejouer et afficher le bouton Suivant
  
  // TODO Recharger la première question
  
});

