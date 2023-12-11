const quiz = [
  {
    question:
      "Which dessert is known for its layers of sponge cake, custard, and whipped cream?",
    answers: ["True", "False"],
    correctAnswer: "True",
    type: "trueFalse",
  },
  {
    question: "What dessert is made from frozen fruit and sugar?",
    answers: ["True", "False"],
    correctAnswer: "False",
    type: "trueFalse",
  },
  {
    question: "What French dessert is known for its caramelized sugar topping?",
    answers: ["True", "False"],
    correctAnswer: "True",
    type: "trueFalse",
  },
  {
    question:
      "Which dessert is often associated with New York and consists of a creamy cheese filling on a crust?",
    answers: ["True", "False"],
    correctAnswer: "True",
    type: "trueFalse",
  },
  {
    question: "What Italian dessert translates to 'pick me up'?",
    answers: ["True", "False"],
    correctAnswer: "False",
    type: "trueFalse",
  },
  {
    question:
      "What pastry is filled with almond paste and sometimes topped with icing and sliced almonds?",
    answers: ["True", "False"],
    correctAnswer: "False",
    type: "trueFalse",
  },
  {
    question:
      "Which dessert is a traditional British steamed pudding made with dried fruit?",
    answers: [
      "Sticky toffee pudding",
      "Spotted dick",
      "Bread pudding",
      "Muscot",
    ],
    correctAnswer: "Spotted dick",
    type: "radio",
  },
  {
    question:
      "What dessert is made from layers of crispy pastry filled with sweetened whipped cream?",
    answers: ["Cannoli", "Macaron", "Napoleon", "Montreal"],
    correctAnswer: "Napoleon",
    type: "radio",
  },
  {
    question:
      "Which dessert is a small, round pastry filled with cream or fruit?",
    answers: ["Baklava", "Cannoli", "Macaron", "Belini"],
    correctAnswer: "Macaron",
    type: "radio",
  },
  {
    question:
      "What dessert is a Middle Eastern pastry made of thin layers of phyllo dough filled with nuts and honey?",
    answers: ["Baklava", "Eclair", "Pavlova", "Vladimir"],
    correctAnswer: "Baklava",
    type: "radio",
  },
  {
    question:
      "Which dessert is a Russian cake consisting of layers of sponge cake and buttercream?",
    answers: ["Pavlova", "Opera cake", "Napoleon", "Mustig"],
    correctAnswer: ["Opera cake", "Mustig"],
    type: "checkbox",
  },
  {
    question: "What dessert is made from meringue, whipped cream, and fruit?",
    answers: ["Eton mess", "Pavlova", "Opera cake", "Bingus"],
    correctAnswer: ["Pavlova", "Bingus"],
    type: "checkbox",
  },
];

//Basics

//Knapp för darkmode
let darkButton = document.querySelector("#darkMode");
let body = document.body;

//Funktion för darkmode
darkButton.addEventListener("click", () => {
  body.classList.toggle("darkMode");
});

//Knapp för Intro/Start
let startButton = document.querySelector("#startButton");
let introCard = document.querySelector(".introCard");

//Knapp för intro/start + Funktion att gömma
startButton.addEventListener("click", displayQuestion);

// function startQuiz() {
//   if (answeredQuestions < 12) {
//     displayQuestion();
//   } else {
//     alert("BAOM");
//   }
// }
//Medel
//Hämtar alla card element
let cards = document.querySelectorAll(".card");
//Test
quiz.forEach((question, index) => {
  console.log(question, index);
});

//Globala variablar
let score = 0;
let answeredQuestions = 0;
let scoreDisplay = document.querySelector("#scoreDisplay");

function displayQuestion() {
  cards.forEach((card, index) => {
    console.log(card, index);
    let question = quiz[index].question;
    let answers = quiz[index].answers;
    card.textContent = question;
    console.log(quiz[index]);

    // TrueFalse knappar  TrueFalse knappar TrueFalse knappar  TrueFalse knappar  TrueFalse knappar TrueFalse knappar
    if (quiz[index].type === "trueFalse") {
      //true
      let trueButton = document.createElement("button");
      trueButton.textContent = "True";

      //false
      let falseButton = document.createElement("button");
      falseButton.textContent = "False";

      //event listener !!!
      trueButton.addEventListener("click", () => {
        trueButton.style.display = "none";
        falseButton.style.display = "none";
        if (quiz[index].correctAnswer === "True") {
          score++;
          answeredQuestions++;
          scoreDisplay.textContent = `${score}`;
          card.style.backgroundColor = "lightgreen";
        } else {
          card.style.backgroundColor = "salmon";
          answeredQuestions++;
        }
        if (answeredQuestions >= 12) {
          displayResults();
        }
      });
      falseButton.addEventListener("click", () => {
        trueButton.style.display = "none";
        falseButton.style.display = "none";
        if (quiz[index].correctAnswer === "False") {
          card.style.backgroundColor = "lightgreen";
          score++;
          answeredQuestions++;
          scoreDisplay.textContent = `${score}`;
        } else {
          card.style.backgroundColor = "salmon";
          answeredQuestions++;
        }
        console.log(answeredQuestions, score);
        if (answeredQuestions >= 12) {
          displayResults();
        }
      });

      //Append knappar
      card.appendChild(trueButton);
      card.appendChild(falseButton);

      // RADIO BUTTONS RADIO BUTTONS RADIO BUTTONS RADIO BUTTONS  RADIO BUTTONS RADIO BUTTONS RADIO BUTTONS RADIO BUTTONS
    } else if (quiz[index].type === "radio") {
      let allRadioButtons = []; //Skapar två tomma arrayer för att ta bort dem från korten när de är trycka
      let labels = [];
      answers.forEach((answer) => {
        let radioButtons = document.createElement("input");
        radioButtons.type = "radio";
        radioButtons.name = `question_${index}`;
        radioButtons.value = answer;

        let label = document.createElement("label");
        label.textContent = answer;

        card.appendChild(radioButtons);
        card.appendChild(label);

        allRadioButtons.push(radioButtons); //Pushar in varje radiobutton
        labels.push(label); //Pushar in varje label

        //change event !!!

        radioButtons.addEventListener("change", () => {
          allRadioButtons.forEach((button) => {
            button.style.display = "none"; // Tar bort forEach radio button
          });
          labels.forEach((label) => {
            label.style.display = "none"; // Tar bort forEach label
          });

          if (radioButtons.value === quiz[index].correctAnswer) {
            score++;
            answeredQuestions++;
            scoreDisplay.textContent = `${score}`;
            card.style.backgroundColor = "lightgreen";
          } else {
            card.style.backgroundColor = "salmon";
            answeredQuestions++;
          }
          console.log(answeredQuestions, score);
          if (answeredQuestions >= 12) {
            displayResults();
          }
        });
      });
      //CHECKBOXES CHECKBOXES CHECKBOXES CHECKBOXES CHECKBOXES CHECKBOXES CHECKBOXES CHECKBOXES CHECKBOXES CHECKBOXES
    } else if (quiz[index].type === "checkbox") {
      let selectedCheckboxes = 0; //En array att spara checkboxarna i. Borde gjort array i objektet. Visste inte att det gick.

      let selectedValues = [];

      answers.forEach((answer) => {
        let checkBoxes = document.createElement("input");
        checkBoxes.type = "checkbox";
        checkBoxes.name = `question_${index}`;
        checkBoxes.value = answer;

        let labelCheckbox = document.createElement("label");
        labelCheckbox.textContent = answer;

        card.appendChild(checkBoxes);
        card.appendChild(labelCheckbox);

        // lägger in i arrayen

        console.log(`question_${index}`);

        // Change event !!!
        checkBoxes.addEventListener("click", () => {
          let correctAnswers = quiz[index].correctAnswer;
          console.log(correctAnswers);
          if (checkBoxes.checked) {
            selectedCheckboxes++;
            selectedValues.push(checkBoxes.value);
          } else {
            selectedCheckboxes--;
          }
          if (selectedCheckboxes > 2) {
            checkBoxes.checked = false;
            selectedCheckboxes--;
          }

          if (selectedCheckboxes === 2) {
            let allCorrect = correctAnswers.every((answer) =>
              selectedValues.includes(answer)
            );
            if (allCorrect && selectedValues.length === correctAnswers.length) {
              score++;
              answeredQuestions++;
              scoreDisplay.textContent = `${score}`;
              checkBoxes.parentNode.style.backgroundColor = "lightgreen";
            } else {
              checkBoxes.parentNode.style.backgroundColor = "salmon";
              answeredQuestions++;
            }
          }
          console.log(selectedValues, correctAnswers, answeredQuestions, score);
          if (answeredQuestions >= 12) {
            displayResults();
          }
        });
      });
    }
  });
  introCard.style.display = "none";
  // checkQuestions();
}

function checkQuestions() {
  if (answeredQuestions >= 12) {
    displayResults();
  }
}

function displayResults() {
  let resultDiv = document.createElement("div");
  resultDiv.classList.add("resultDiv");
  resultDiv.textContent = "Your score: " + score;
  if (score === quiz.length * 0.5) {
    resultDiv.style.background = "crimson";
  } else if (score === quiz.length * 0.75) {
    resultDiv.style.background = "orange";
  } else {
    resultDiv.style.background = "green";
  }
  body.appendChild(resultDiv);
}
//   if (selectedCheckboxes === 2) {
//     let allCorrect = correctAnswers.every((answer) =>
//       selectedValues.includes(answer)
//     );
//     if (selectedValues === correctAnswers) {
//       score++;
//       scoreDisplay.textContent = `${score}`;
//       checkBoxes.parentNode.style.backgroundColor = "lightgreen";
//     } else {
//       checkBoxes.parentNode.style.backgroundColor = "salmon";
//     }
//   }
//   console.log(selectedValues, correctAnswers);
//   {
//     question:
//       "Which dessert is known for its layers of sponge cake, custard, and whipped cream?",
//     answers: ["Tiramisu", "Trifle", "Eclair"],
//     correctAnswer: "Trifle",
//   },
