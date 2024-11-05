import { quizZilla } from './question.js';

// Récupérer les emplacements pour injecter la question et les options
const questionContainer = document.querySelector('.question');
const optionContainer = document.querySelector('.options');
const dinoImage = document.querySelector('#dinoImage');

let currentQuestionIndex = 0;

const message = document.querySelector('#message');
const displayEnd = document.querySelector('.display-end');

// Test progress_bar
const progress_bar = document.querySelector('.progress');
progress_bar.style.display = 'block';
const updateProgressBar = () => {
  const progressPercentage = (currentQuestionIndex / quizZilla.questions.length) * 100;
  console.log(progressPercentage)
  progress_bar.style.width = `${progressPercentage}%`;
};

function loadQuestion(currentQuestionIndex){
  const currentQuestion = quizZilla.questions[currentQuestionIndex];
  questionContainer.innerText = currentQuestion.text;

  optionContainer.innerHTML = '';
  
  currentQuestion.options.forEach(option => {
    const optionButton = document.createElement('button');
    optionButton.classList.add('option-button')
    optionButton.innerText = option; 
    optionContainer.appendChild(optionButton);
    buttonSuivant.disabled = true;
    dinoImage.style.display = 'none';
    displayEnd.style.display = 'none'

    // ajouter l'écouteur de click à chaque option pour appeler checkAnswer
    optionButton.addEventListener("click", (event) => {
    const optionChoisi = event.target.innerText;
    checkAnswer(optionChoisi, currentQuestion.correct_answer);
    buttonSuivant.disabled = false;
    displayEnd.style.display = 'flex';
    
    // Désactivé les autres options lorsque une option est choisie
    const allOptions = optionContainer.querySelectorAll('button');
    allOptions.forEach(btn => {
      btn.disabled = true;
      //console.log('Options désactivée :', btn.innerText);

      // Ajouter une bordure à la bonne réponse 
      if (optionChoisi === currentQuestion.correct_answer){
        event.target.style.border = "5px solid green"
      } else {
        event.target.style.border = "5px solid red"
      }

      // option cliquable qu'une seule fois
      event.target.disabled = true;

      // bouton suivant qui s'active une fois qu'une option est choisie
      buttonSuivant.disabled = false;
    });
    });
  });
  updateProgressBar();
};

// Récupérer le bouton suivant & le bouton replay
const buttonSuivant = document.querySelector('#next-button');
const replayButton = document.querySelector('#replay-button');

buttonSuivant.addEventListener('click',() => {
  currentQuestionIndex++;

  // Vérifier s'il reste des questions
  if (currentQuestionIndex < quizZilla.questions.length) {
    loadQuestion(currentQuestionIndex)
    displayEnd.style.display = 'block';
    updateProgressBar();
    console.log('j affiche le score', displayEnd)
  } else {
    // Si plus de questions, indiquer la fin du quiz
    questionContainer.innerText = 'Fin du quiz';
    optionContainer.innerHTML = ''; 
    dinoImage.src = "images/dinoDingo.png" ;
    dinoImage.style.display = 'block'
    buttonSuivant.style.display = 'none'; 
    replayButton.style.display = "inline-block";
    progress_bar.style.width = '100%'
    score.innerHTML =`Tu as un score total de  :  ${pointCount}`
    if (pointCount === quizZilla.questions.length){
      message.innerText = "Bien joué !!!"
    } else if (pointCount >= 0.5*quizZilla.questions.length){
      message.innerText = "Pas mal !"
    } else {
      message.innerText = "Recommence"
    }
  }
});

// Fonction pour réinitialiser le quiz
replayButton.addEventListener('click', () => {
    currentQuestionIndex=0; 
    buttonSuivant.style.display='inline-block';
    replayButton.style.display ='none';
    loadQuestion(currentQuestionIndex);
    score.innerHTML="";
    pointCount = 0;
    message.innerHTML="";
    dinoImage.style.display = 'none';
    updateProgressBar();
});

loadQuestion(currentQuestionIndex);

// Affichage du score
const score = document.querySelector('#score');
// Système de points
let pointCount = 0

function checkAnswer(optionChoisi, correct_answer) {
  if (optionChoisi === correct_answer) {
    pointCount++;
    console.log('Bonne réponse');
  } else {
    console.log('Mauvaise réponse')
  }

  return score.innerText = `Votre score est de ${pointCount}`
}; 
