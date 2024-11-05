import { quizZilla } from './question.js';

// Récupérer les emplacements pour injecter la question et les options
const questionContainer = document.querySelector('.question');
const optionContainer = document.querySelector('.options');
const message = document.querySelector('#message')
let currentQuestionIndex = 0;

function loadQuestion(currentQuestionIndex){
  const currentQuestion = quizZilla.questions[currentQuestionIndex];
  questionContainer.innerText = currentQuestion.text;

  optionContainer.innerHTML = '';
  
  currentQuestion.options.forEach(option => {
    const optionButton = document.createElement('button');
    optionButton.classList.add('option-button')
    //optionButton.innerText = option; 
    optionButton.innerHTML = `<img src = ${option.image} class='dyno'/><p></p>`
    optionContainer.appendChild(optionButton);
    buttonSuivant.disabled = true;
    const label = optionButton.querySelector('p');
    label.innerText = option.text
    //const imageView = optionButton.querySelector('img');
    //imageView.innerHTML = `<img src = '${option.image}' class='dyno'/><p></p>`;
    // ajouter l'écouteur de click à chaque option pour appeler checkAnswer
    optionButton.addEventListener("click", (event) => {
    const optionChoisi = event.target.querySelector('p').innerText;
    checkAnswer(optionChoisi, currentQuestion.correct_answer);
    buttonSuivant.disabled = false;
    // Désactivé les autres options lorsque une option est choisie
    disableAllOptions();
    });
  });
};
// Récupérer le bouton suivant & le bouton replay
const buttonSuivant = document.querySelector('#next-button');
const replayButton = document.querySelector('#replay-button');

buttonSuivant.addEventListener('click',() => {
  currentQuestionIndex++;
  // Vérifier s'il reste des questions
  if (currentQuestionIndex < quizZilla.questions.length) {
    loadQuestion(currentQuestionIndex)
  } else {
    // Si plus de questions, indiquer la fin du quiz
    questionContainer.innerText = 'Fin du quiz';
    optionContainer.innerHTML = ''; 
    buttonSuivant.style.display = 'none'; 
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
  if (optionChoisi === correct_answer) {
    pointCount++;
    console.log('Bonne réponse')
  }else{
    console.log('Mauvaise réponse')
  }

  return score.innerText = `Votre score est de ${pointCount}`
}; 
function disableAllOptions (){
  const allOptions = document.querySelectorAll('.option-button');
    allOptions.forEach(btn => {
      btn.disabled = true;
      console.log('Options désactivée :', btn.innerText);
    });
}