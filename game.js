import { quizZilla } from './question.js';

// Récupérer les emplacements pour injecter la question et les options
const questionContainer = document.querySelector('.question');
const optionContainer = document.querySelector('.options');

<<<<<<< HEAD
let currentQuestionIndex = 0; // Commence à la première question
let isSelectedOptionValid = false

// Sélection des éléments HTML
const buttonSuivant = document.querySelector('#next-button');
//const currentQuestion = quizZilla.questions[currentQuestionIndex]
const score = document.querySelector('#score')
let pointCount = 0
const message = document.querySelector('#message')
//score.innerHTML = `Score: ${pointCount}`
=======
let currentQuestionIndex = 0; 

let currentQuestion = quizZilla.questions[currentQuestionIndex];

let isSelectedOptionValid = false

const message = document.querySelector('#message')

>>>>>>> branche_stella
function loadQuestion(currentQuestionIndex){
  const currentQuestion = quizZilla.questions[currentQuestionIndex];
  questionContainer.innerText = currentQuestion.text;

  optionContainer.innerHTML = '';
<<<<<<< HEAD
  isSelectedOptionValid = false
  // Récupérer la question actuelle
  const currentQuestion = quizZilla.questions[currentQuestionIndex];
  // Injecter la question dans le HTML
  questionContainer.innerText = currentQuestion.text;
  // Injecter les options dans le HTML 
=======

  isSelectedOptionValid = false;
>>>>>>> branche_stella
  
  currentQuestion.options.forEach(option => {
    const optionButton = document.createElement('button');
    optionButton.classList.add('option-button')
    optionButton.innerText = option; 
    optionContainer.appendChild(optionButton);
    buttonSuivant.disabled = true;

    // ajouter l'écouteur de click à chaque option pour appeler checkAnswer
    optionButton.addEventListener("click", (event) => {
    const optionChoisi = event.target.innerText;
    checkAnswer(optionChoisi, currentQuestion.correct_answer);
    buttonSuivant.disabled = false;
    
    // Désactivé les autres options lorsque une option est choisie
    const allOptions = optionButton.querySelectorAll('button');
    allOptions.forEach(btn => {
      btn.disabled = true;
      console.log('Options désactivée :', btn.innerText);
    });
    });
  });
};

// Récupérer le bouton suivant & le bouton replay
const buttonSuivant = document.querySelector('#next-button');
const replayButton = document.querySelector('#replay-button');

<<<<<<< HEAD
    function checkAnswer(optionChoisi) {
      isSelectedOptionValid = optionChoisi === currentQuestion.correct_answer
      if (optionChoisi === currentQuestion.correct_answer) {
        alert("correct"); 
      } else {
        alert("incorrect"); 
      }
    }
  buttonSuivant.disabled = true
  optionButton.addEventListener("click",(event)=>
    {
    const optionChoisi = event.target.innerText
    console.log(optionChoisi)
    checkAnswer(optionChoisi)
    buttonSuivant.disabled = false
    })
  })
}
loadQuestion(currentQuestionIndex)
// Ajouter un écouteur d'événements pour le bouton "Suivant"
buttonSuivant.addEventListener('click',() => {
  if (isSelectedOptionValid) {
        pointCount++
        score.innerHTML =`Score total: ${pointCount}` 
  }
  // Incrémenter l'index de la question
=======
buttonSuivant.addEventListener('click',() => {
>>>>>>> branche_stella
  currentQuestionIndex++;
  /*
  if (isSelectedOptionValid) {
        pointCount++
        score.innerHTML =`Score total: ${pointCount}` 
  };*/

  // Vérifier s'il reste des questions
  if (currentQuestionIndex < quizZilla.questions.length) {
    loadQuestion(currentQuestionIndex)
  } else {
    // Si plus de questions, indiquer la fin du quiz
    questionContainer.innerText = 'Fin du quiz';
<<<<<<< HEAD
    optionContainer.innerHTML = ''; // Effacer les options
    buttonSuivant.style.display = 'none'; // Cacher le bouton Suivant
=======
    optionContainer.innerHTML = ''; 
    buttonSuivant.style.display = 'none'; 
>>>>>>> branche_stella
    replayButton.style.display = "inline-block"
    score.innerHTML =`Score total: ${pointCount}`
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
<<<<<<< HEAD
  // TODO Réinitialiser l'index 
    currentQuestionIndex=0 
    buttonSuivant.style.display='inline-block'
    replayButton.style.display ='none'
    loadQuestion(currentQuestionIndex)
    score.innerHTML=""
    pointCount = 0 
    message.innerHTML=""
})

=======
    currentQuestionIndex=0; 
    buttonSuivant.style.display='inline-block';
    replayButton.style.display ='none';
    loadQuestion(currentQuestionIndex);
    score.innerHTML="";
    pointCount = 0;
    message.innerHTML="";
});

loadQuestion(currentQuestionIndex);

// Affichage du score
const score = document.querySelector('#score');
// Système de points
let pointCount = 0

function checkAnswer(optionChoisi, correct_answer) {
  isSelectedOptionValid = optionChoisi === currentQuestion.correct_answer
  if (optionChoisi === correct_answer) {
    pointCount++;
    console.log('Bonne réponse')
    //alert("correct"); 
  } else {
    //alert("incorrect"); 
    console.log('Mauvaise réponse')
  }

  return score.innerText = `Votre score est de ${pointCount}`
}; 
>>>>>>> branche_stella
