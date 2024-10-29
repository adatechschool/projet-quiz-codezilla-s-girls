import { quizZilla } from './question.js'; // Import des questions

// Récupérer les emplacements pour injecter la question et les options
const premiereQuestion = document.querySelector('.question');
const optionPremierQuestion = document.querySelector('.options1');

// Créer une fonction qui affciche dynamiquement les questions
const displayQuestions = () => {
  const firstQuestion = quizZilla.questions[0].text;
  //console.log(optionFirstQuestion)
  premiereQuestion.innerText = firstQuestion;
}

displayQuestions()

const displayOptionQuestions = () => {
  const optionFirstQuestion = quizZilla.questions[0].options
  // Pour chaque option, créer un bouton et l'ajouter au conteneur
  optionFirstQuestion.forEach( option => {
    //console.log(option)
    const optionElement = document.createElement('button');
    optionElement.innerText = option;
    optionPremierQuestion.appendChild(optionElement);
});
};

displayOptionQuestions()