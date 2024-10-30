 export const quizZilla = {
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
      
      /*{text: "En plus de son travail d'astronome, dans quelle autre activité Fatoumata Kébé est-elle impliquée ?",
        options: [
          "Elle enseigne l'astrophotographie aux astronautes de la Station spatiale internationale.",
          "Elle milite pour l'éducation des jeunes filles en astronomie.",
          "Elle entraîne des robots pour des compétitions de quiz interstellaires.",
          "Elle développe des applications pour cultiver des potagers en apesanteur."
        ],
        correct_answer: "Elle milite pour l'éducation des jeunes filles en astronomie."
      },*/
      // Autres questions...
    ]
  };
 
  //const premiereQuestion = document.querySelector('.question')
  const optionPremierQuestion = document.querySelector('.options1')
  const buttonSuivant = document.querySelector('#next-button')
  const head = document.querySelector('head') 

  //premiereQuestion.innerHTML = ""
  //for(const question of quizZilla.questions) {
// premiereQuestion.innerHTML = ` ${question.text} `
    
    //optionPremierQuestion.innerHTML = ""
    //for (let i= 0; i < question.options.length; i++) {
    optionPremierQuestion.innerHTML += `<button> ${question.options[i]} </button>`
    //}
 // }
