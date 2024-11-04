import { quizZilla } from './question.js'; // Import des questions

// Récupérer les emplacements pour injecter la question et les options
const questionsElement = document.querySelector('.question');
const optionsQuestionElement = document.querySelector('.options');

// Récupérer la liste des questions question 
let questionsList = quizZilla.questions;
let currentIndex = 0;
//let question = questionsList[currentIndex];
/*
// Test progress_bar
const progress_bar = document.querySelector('.progress');
progress_bar.style.display = 'none';
const updateProgressBar = () => {
  const progressPercentage = (currentIndex / questionsList.length) * 100;
  console.log(progressPercentage)
  progress_bar.style.width = `${progressPercentage}%`;
};
*/


// Créer une fonction qui affciche dynamiquement les questions
const displayQuestions = (index) => {
  const question = questionsList[index];
  questionsElement.innerText = question.text;

  optionsQuestionElement.innerHTML = '';

  question.options.forEach( option => {
    const optionElement = document.createElement('button');
    optionElement.innerText = option;
    optionsQuestionElement.appendChild(optionElement);
    nextButton.disabled = true

    // ajouter l'écouteur de click à chaque option pour appeler checkAnswer
    optionElement.addEventListener('click', (e) => {
      checkAnswer(option, question.correct_answer);
      nextButton.disabled = false
    }); 

});
//updateProgressBar();
};
// Récupérer le bouton suivant & le button replay
const nextButton = document.getElementById('next-button');
const replayButton = document.getElementById('replay-button');

nextButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex < quizZilla.questions.length){
    displayQuestions(currentIndex)
    updateProgressBar();
  } else {
    questionsElement.innerText = "Plus de question";
    optionsQuestionElement.innerHTML = '';
    nextButton.style.display = 'none';
    replayButton.style.display = 'inline-block';
    //progress_bar.style.width = '100%';
  }
});

replayButton.addEventListener('click', () => {
  replayButton.style.display = 'none';
  nextButton.style.display = 'inline-block';
  currentIndex = 0;
  score = 0
  displayQuestions(currentIndex)
  //updateProgressBar()
})

displayQuestions(currentIndex);

// Affichage du score 
const checkedScore = document.getElementById('score');
// ajouter un systeme de points
let score =0;

// Modifier checkAnswer pour accepter les paramètres
const checkAnswer = (selectedOption, correct_answer) => {
  if(selectedOption === correct_answer){
    score++
    console.log('vrai') 
  } else {
    //nextButton.disabled = true
    console.log('faux')
  }
  checkedScore.innerText = `Votre score est de ${score} !`
};