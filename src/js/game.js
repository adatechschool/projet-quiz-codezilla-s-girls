const score = document.querySelector('#score');
// Système de points
let pointCount = 0

export function checkAnswer(optionChoisi, correct_answer) {
  if (optionChoisi === correct_answer) {
    pointCount++;
    console.log('Bonne réponse')
  } else {
    console.log('Mauvaise réponse')
  }
  return score.innerText = `Ton score est de ${pointCount}`
};
