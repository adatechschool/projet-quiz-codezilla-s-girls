const quizZilla = {
    questions: [
      {
        text: "À quoi sert une balise &lt;h1&gt; ?",
        options: [
          "Écrire un gros titre important",
          "Écrire un petit titre mignon",
          "Écrire un titre",
          "Écrire un titre pas trop gros"
        ],
        correct_answer: "Écrire un gros titre important"
      },
    ]
  };

  // Afficher la question sur la page HTML
  const display = document.getElementById('questions');
  const displayButton1 = document.getElementById('button-1');
  const displayButton2 = document.getElementById('button-2');
  const displayButton3 = document.getElementById('button-3');
  const displayButton4 = document.getElementById('button-4');

  for (questions of quizZilla.questions){
    display.innerHTML = questions.text;
    //console.log(questions.text)
  };

  /*
  // Afficher les réponse sur la page HTML
const displayButtons = () => {
  displayButton1.innerHTML = questions.options[0]
  displayButton2.innerHTML = questions.options[1]
  displayButton3.innerHTML = questions.options[2]
  displayButton4.innerHTML = questions.options[3]
}
displayButtons();
*/
