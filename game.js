import { quizZilla } from './question.js'; // Import des questions

// Récupérer les emplacements pour injecter la question et les options
const questionsElement = document.querySelector('.question');
const optionsQuestionElement = document.querySelector('.options');

// Récupérer la liste des questions question 
let questionsList = quizZilla.questions;

// Récuperer les options d'une question
const optionQuestions = quizZilla.questions[0].options;
console.log("Les options de réponses sont :", optionQuestions);

optionQuestions.forEach( option => {
  //console.log(option)
  const optionElement = document.createElement('button');
  optionElement.innerText = option;
  optionsQuestionElement.appendChild(optionElement);
});

let currentIndex = 0;

// Créer une fonction qui affciche dynamiquement les questions
const displayQuestions = (index) => {
  optionsQuestionElement.innerHTML = ''

  const question = questionsList[index]
  //console.log("affiche moi les questions :", question.text)
  questionsElement.innerText = question.text;
  //console.log("in displayQuestion", questionsElement)

  optionQuestions.forEach( option => {
    //console.log(option)
    const optionElement = document.createElement('button');
    optionElement.innerText = option;
    optionsQuestionElement.appendChild(optionElement);
  });
};

//displayQuestions(currentIndex);

// Récupérer le bouton suivant
const nextButton = document.getElementById('next-button');

const loadQuestion = () => {
  // Afficher une question en fonction de l'index
  nextButton.addEventListener('click', () => {
    currentIndex++;
    console.log(currentIndex)
    if (currentIndex < quizZilla.questions.length){
      displayQuestions(currentIndex)
    } else {
      questionsElement.innerText = "Plus de question"
      optionQuestions.innerHTML = ''
    }
  })

}

loadQuestion()
displayQuestions(currentIndex)