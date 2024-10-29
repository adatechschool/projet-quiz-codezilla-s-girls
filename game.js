import { quizZilla } from './question.js'; // Import des questions

// Récupérer les emplacements pour injecter la question et les options
const questions = document.querySelector('.question');
const optionsQuestion = document.querySelector('.options');

// Récupérer une question 
const questionIndex = quizZilla.questions[0].text;
// Récuperer les options d'une question
const optionFirstQuestion = quizZilla.questions[0].options;


// Créer une fonction qui affciche dynamiquement les questions
const displayQuestions = () => {
  questions.innerText = questionIndex;
}

displayQuestions()

const displayOptionQuestions = () => {
  optionFirstQuestion.forEach( option => {
    //console.log(option)
    const optionElement = document.createElement('button');
    optionElement.innerText = option;
    optionsQuestion.appendChild(optionElement);
});
};

displayOptionQuestions();

// Passer d'une question à une autre
let currentQuestionIndex = 0;

// Récupérer le bouton suivant
const nextButton = document.getElementById('next-button');

const loadQuestion = () => {
  // Afficher une question en fonction de l'index
  //questions.innerText = questionIndex;
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    console.log(currentQuestionIndex)

  })

}

loadQuestion()