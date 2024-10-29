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
      }
    ]
  };

 const premiereQuestion = document.getElementById('questions')
 const options = document.querySelector('.options')
 options.innerHTML = ''

  for (const item of quizZilla.questions) {
  premiereQuestion.innerHTML = item.text

  
  for (let i = 0; i < item.options.length; i++){
  options.innerHTML += `<button>${item.options[i]}</button>`
  
  console.log(options)
}
  }