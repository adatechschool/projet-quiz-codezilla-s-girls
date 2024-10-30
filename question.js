export const quizZilla = {
    questions: [
      {
        text: "À quoi sert une balise <h1> ?",
        options: [
          "Écrire un gros titre important",
          "Écrire un petit titre mignon",
          "Écrire un titre",
          "Écrire un titre pas trop gros"
        ],
        correct_answer: "Écrire un gros titre important"
      },
      
      {
        text: "Quel est le rôle de HTML ?",
        options: [
          "Dinosaure coloré.",
          "Un squellette de dinosaure.",
          "Dinausaure sans coloré.",
          "Dinosaure dynamique."
        ],
        correct_answer: "Un squellette de dinosaure."
      },
      {
        text: "À quoi sert la propriété text-align:center?",
        options: [
          "Dinosaure à gauche.",
          "Dinosaure à droite.",
          "Dinausaure au millieu.",
          "Dinosaure en bas à droite."
        ],
        correct_answer: "Dinosaure au millieu."
      },
    
    {
      text: "Comment changer le coleur de Dinosaure h1 en css en bleu?",
      options: [
        "h1{color:blue}",
        "h1{background-color:blue}",
        "div{color:blue}",
        "h2{color:blue}"
      ],
      correct_answer: "h1{color:blue}"
    },
    ]
  };
  //const premiereQuestion = document.getElementsByClassName('question')
  /*const premiereQuestion = document.querySelector('.question')
  const optionPremierQuestion = document.querySelector('.options1')
  const buttonSuivant = document.querySelector('#next-button')
  const head = document.querySelector('head') 

  //premiereQuestion.innerHTML = ""
  for(const question of quizZilla.questions) {
    premiereQuestion.innerHTML = ` ${question.text} `

    optionPremierQuestion.innerHTML = ""
    for (i= 0;i < question.options.length;i++) {
    optionPremierQuestion.innerHTML += `<button> ${question.options[i]} </button>`
    }
  }*/
