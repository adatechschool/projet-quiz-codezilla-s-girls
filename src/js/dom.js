import { quizZilla } from '../js/question.js';
import { updateProgressBar, progress_bar } from '../js/progressBar.js';
import { checkAnswer } from '../js/game.js';

let pointCount = 0;

// Récupérer les emplacements pour injecter la question et les options
const questionContainer = document.querySelector('.question');
const optionContainer = document.querySelector('.options');
const dinoImage = document.querySelector('#dinoImage');

export let currentQuestionIndex = 0;

const message = document.querySelector('#message');
const displayEnd = document.querySelector('.display-end');
displayEnd.classList.add('animate__animated', 'animate__fadeInDown');


function loadQuestion(currentQuestionIndex) {
  const currentQuestion = quizZilla.questions[currentQuestionIndex];
  questionContainer.innerText = currentQuestion.text;
  optionContainer.innerHTML = '';

  currentQuestion.options.forEach(option => {
    const optionButton = document.createElement('button');
    //optionButton.innerText = option; 
    optionButton.innerHTML = `<img src = ${option.image} class='dyno'/><p>${option.text}</p>`
    optionContainer.appendChild(optionButton);
    optionButton.classList.add('option-button', 'animate__animated', 'animate__fadeInLeft')
    buttonSuivant.disabled = true;
    dinoImage.style.display = 'none';
    displayEnd.style.display = 'none'
    // ajouter l'écouteur de click à chaque option pour appeler checkAnswer
    optionButton.onclick = function() {
    const optionChoisi = optionButton.querySelector('p').innerText;

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
        optionButton.style.border = "5px solid green"
      } else {
        optionButton.style.border = "5px solid red"
      }
      // option cliquable qu'une seule fois
      optionButton.disabled = true
      // bouton suivant qui s'active une fois qu'une option est choisie
      buttonSuivant.disabled = false;
    });
    };
  })};
  updateProgressBar();
;

const buttonSuivant = document.querySelector('#next-button');
const replayButton = document.querySelector('#replay-button');

buttonSuivant.addEventListener('click', () => {
  currentQuestionIndex++;
  // Vérifier s'il reste des questions
  if (currentQuestionIndex < quizZilla.questions.length) {
    loadQuestion(currentQuestionIndex)
    displayEnd.style.display = 'block';
    updateProgressBar();
    //console.log('j affiche le score', displayEnd)
  } else {
    // Si plus de questions, indiquer la fin du quiz
    questionContainer.innerText = 'Fin du quiz';
    optionContainer.innerHTML = '';
    dinoImage.src = "images/dinoDingo.png";
    dinoImage.style.display = 'block'
    buttonSuivant.style.display = 'none';
    replayButton.style.display = "inline-block";
  
    progress_bar.style.width = '100%'
    score.innerHTML = `Tu as un score total de  :  ${pointCount}`
    if (pointCount === quizZilla.questions.length) {
      message.innerText = "Bien joué !!!"
      var defaults = {
        spread: 360,
        ticks: 50,
        gravity: 0,
        decay: 0.94,
        startVelocity: 30,
        colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
      };
      function shoot() {
        confetti({
          ...defaults,
          particleCount: 40,
          scalar: 1.2,
          shapes: ['star']
        });
        confetti({
          ...defaults,
          particleCount: 10,
          scalar: 0.75,
          shapes: ['circle']
        });
      }
      setTimeout(shoot, 0);
      setTimeout(shoot, 100);
      setTimeout(shoot, 200);
    } else if (pointCount >= 0.5 * quizZilla.questions.length) {
      message.innerText = "Pas mal !"
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      message.innerText = "Recommence"
    }
  } 
});
// Fonction pour réinitialiser le quiz
replayButton.addEventListener('click', () => {
  currentQuestionIndex = 0;
  pointCount = 0;
  score.innerHTML = "";
  message.innerHTML = "";
  buttonSuivant.style.display = 'inline-block';
  replayButton.style.display = 'none';
  dinoImage.style.display = 'none';
  loadQuestion(currentQuestionIndex);
  updateProgressBar();
});
loadQuestion(currentQuestionIndex);