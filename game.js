import { quizZilla } from './question.js'; // Import des questions

// Récupérer les emplacements pour injecter la question et les options
const questionsElement = document.querySelector('.question');
const optionsQuestionElement = document.querySelector('.options');

let currentQuestionIndex = 0; // Commence à la première question
let isSelectedOptionValid = false

// Sélection des éléments HTML
const buttonSuivant = document.querySelector('#next-button');
//const currentQuestion = quizZilla.questions[currentQuestionIndex]
const score = document.querySelector('#score')
let pointCount = 0
const message = document.querySelector('#message')
//score.innerHTML = `Score: ${pointCount}`
function loadQuestion(currentQuestionIndex){
  // Vider le conteneur des options
  optionContainer.innerHTML = '';
  isSelectedOptionValid = false
  // Récupérer la question actuelle
  const currentQuestion = quizZilla.questions[currentQuestionIndex];
  // Injecter la question dans le HTML
  questionContainer.innerText = currentQuestion.text;
  // Injecter les options dans le HTML 
  
  currentQuestion.options.forEach(option => {
    const optionButton = document.createElement('button');
    optionButton.innerText = option; 
    // optionContainer.classList.add('option-button');
    optionContainer.appendChild(optionButton);

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
  currentQuestionIndex++;
  // Vérifier s'il reste des questions
  if (currentQuestionIndex < quizZilla.questions.length) {
    // Afficher la question suivante 
    loadQuestion(currentQuestionIndex)
  } else {
    // Si plus de questions, indiquer la fin du quiz
    questionContainer.innerText = 'Fin du quiz';
    optionContainer.innerHTML = ''; // Effacer les options
    buttonSuivant.style.display = 'none'; // Cacher le bouton Suivant
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
// Sélection des éléments HTML
const replayButton = document.querySelector('#replay-button')
//TODO Ajouter le bouton rejouer à votre liste d‘élements
// Fonction pour réinitialiser le quiz
replayButton.addEventListener('click', () => {
  // TODO Réinitialiser l'index 
    currentQuestionIndex=0 
    buttonSuivant.style.display='inline-block'
    replayButton.style.display ='none'
    loadQuestion(currentQuestionIndex)
    score.innerHTML=""
    pointCount = 0 
    message.innerHTML=""
})

