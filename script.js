const quiz = [
  {
    question:
      "is the semla known for its layers of sponge cake, custard, and whipped cream?",
    answers: ["True", "False"],
    correctAnswer: "True",
    type: "trueFalse",
  },
  {
    question: "Are mondays made from frozen fruit and sugar?",
    answers: ["True", "False"],
    correctAnswer: "False",
    type: "trueFalse",
  },
  {
    question:
      "Frans is French dessert, known for its caramelized sugar topping?",
    answers: ["True", "False"],
    correctAnswer: "True",
    type: "trueFalse",
  },
  {
    question:
      "Frans is often associated with New York and consists of a creamy cheese filling on a crust?",
    answers: ["True", "False"],
    correctAnswer: "True",
    type: "trueFalse",
  },
  {
    question:
      "Frans made an Italian dessert translated to 'pick me up'? aka Tiramisu",
    answers: ["True", "False"],
    correctAnswer: "False",
    type: "trueFalse",
  },
  {
    question:
      "Is Frans filled with almond paste and sometimes topped with icing and sliced almonds?",
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
      "Which dessert is a Russian cake consisting of layers of sponge cake and buttercream? + which one is a cat?",
    answers: ["Pavlova", "Opera cake", "Napoleon", "Spoingus"],
    correctAnswer: ["Opera cake", "Spoingus"],
    type: "checkbox",
  },
  {
    question:
      "What dessert is made from meringue, whipped cream, and fruit? + which one is a cat?",
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
startButton.addEventListener("click", function () {
  displayQuestion();
  playAudio();
});

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
let endDiv = document.querySelector(".endDiv");
// LJUD
let NOaudio = new Audio("/mps/no.mp3");
let YESaudio = new Audio("/mps/yes.mp3");
let audio = new Audio("/mps/song.mp3");
audio.volume = 0.1;

// Funktion för att visa frågor i quiz
function displayQuestion() {
  //Loopa igenom varje card(fråga i quizet)
  cards.forEach((card, index) => {
    //Loggar för att se card och index
    console.log(card, index);
    //Få frågan och svaret för specifika indexet (objectet) i arrayn
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
          Correct();
          yesAudio();
          card.style.backgroundColor = "lightgreen";
        } else {
          noAudio();
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
          Correct();
          yesAudio();
          card.style.backgroundColor = "lightgreen";
        } else {
          noAudio();
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

      //Loopa igenom varje fråga skapar jag radio buttons
      answers.forEach((answer) => {
        let radioButtons = document.createElement("input");
        radioButtons.type = "radio";
        radioButtons.name = `question_${index}`;
        radioButtons.value = answer;

        let label = document.createElement("label");
        label.textContent = answer;

        card.appendChild(label);
        card.appendChild(radioButtons);

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
          // Make funk efter if satsa
          if (radioButtons.value === quiz[index].correctAnswer) {
            Correct();
            yesAudio();
            card.style.backgroundColor = "lightgreen";
          } else {
            noAudio();
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
      let questionLocked = false; //För att inte tillåta att checka av boxar

      answers.forEach((answer) => {
        let checkBoxes = document.createElement("input");
        checkBoxes.type = "checkbox";
        checkBoxes.name = `question_${index}`;
        checkBoxes.value = answer;

        let labelCheckbox = document.createElement("label");
        labelCheckbox.textContent = answer;

        card.appendChild(labelCheckbox);
        card.appendChild(checkBoxes);

        // lägger in i arrayen

        console.log(`question_${index}`);

        // Change event !!!
        checkBoxes.addEventListener("click", () => {
          //Skapar en array som lyssnar på alla checkboxar (Tar in alla checkboxars värde)
          let correctAnswers = quiz[index].correctAnswer;
          console.log(correctAnswers);
          //Kollar först om checkboxen är False. alltså inte låste än. och koden innanför kommer fortsätta
          if (!questionLocked) {
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
          }

          //Jämför selectedCheckboxes med selectedValues och sedan returnerar true eller false med (Includes)
          if (selectedCheckboxes === 2) {
            //Kollar sant eller falskt
            let allCorrect = correctAnswers.every((answer) =>
              selectedValues.includes(answer)
            );
            //Om allCorrect är true och selectedValues.length = 2 och stämmer överens med correctAnswers.length = är 2 alltid
            if (allCorrect && selectedValues.length === correctAnswers.length) {
              Correct();
              yesAudio();
              checkBoxes.parentNode.style.backgroundColor = "lightgreen";
            } else {
              noAudio();
              checkBoxes.parentNode.style.backgroundColor = "salmon";
              answeredQuestions++;
            }
            questionLocked = true;
            // Disabla alla checkboxar när två väl tryckts ned. Det ända sättet att motverka mina misstag
            //Går igenom alla checkboxar och gör dem true - DISABLED!!!
            document
              .querySelectorAll(`input[name="question_${index}"]`)
              .forEach((checkbox) => {
                checkbox.disabled = true;
              });
          }
          console.log(selectedValues, correctAnswers, answeredQuestions, score);
          if (answeredQuestions >= 12) {
            endQuiz();
          }
        });
      });
    }
  });
  introCard.style.display = "none";
  // checkQuestions();
}
//Funktion som hanterar korrekta svar
function Correct() {
  score++;
  answeredQuestions++;
  scoreDisplay.textContent = `${score}`;
}
function False() {}

function checkQuestions() {
  if (answeredQuestions >= 12) {
    displayResults();
  }
}

//Reseta quiz
function resetQuiz() {
  score = 0;
  answeredQuestions = 0;
  let scoreDisplay = document.querySelector("#scoreDisplay");
  scoreDisplay.innerText = 0;

  let resultDiv = document.querySelector(".resultDiv");
  if (resultDiv) {
    // Om result div finns i bodyn. Defensive check
    body.removeChild(resultDiv);
  }
  cards.forEach((card) => {
    card.textContent = "";
    card.style.backgroundColor = "";
    console.log(card);
  });

  displayQuestion();
}

function displayResults() {
  let retryButton = document.createElement("button");
  retryButton.innerText = "Play again?";
  retryButton.addEventListener("click", resetQuiz);
  let resultDiv = document.createElement("div");
  resultDiv.classList.add("resultDiv");
  resultDiv.textContent = "Your score: " + score;
  if (score <= quiz.length * 0.5) {
    resultDiv.style.background = "salmon";
  } else if (score <= quiz.length * 0.75) {
    resultDiv.style.background = "orange";
  } else {
    resultDiv.style.background = "lightgreen";
  }
  body.appendChild(resultDiv);
  resultDiv.appendChild(retryButton);
  movingDivTest();
}

function movingDivTest() {
  let resultDiv = document.querySelector(".resultDiv");
  let topPositon = 0;
  let leftPositon = 0;
  resultDiv.style.position = "absolute";
  resultDiv.style.top = topPositon + "px";
  resultDiv.style.left = leftPositon + "px";

  let interval = setInterval(() => {
    topPositon += 1;
    leftPositon += 3;
    if (topPositon > 275) {
      topPositon -= 1;
      leftPositon -= 3;
    }

    resultDiv.style.top = topPositon + "px";
    resultDiv.style.left = leftPositon + "px";
  }, 10);
}

function playAudio() {
  audio.play();
}
function yesAudio() {
  YESaudio.volume = 0.1;
  YESaudio.play();
}
function noAudio() {
  NOaudio.volume = 0.1;
  NOaudio.play();
}

function stopAudio() {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}

//Stoppa ljudet

document.querySelector("#stopAudio").addEventListener("click", toggleAudio);

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function endQuiz() {
  let endQuizBtn = document.createElement("button");
  endQuizBtn.classList.add("endQuizBtn");
  endQuizBtn.innerText = "End quiz to see result";
  endDiv.append(endQuizBtn);
  endQuizBtn.addEventListener("click", () => {
    displayResults();

    endQuizBtn.remove();
  });
}

// function stopAudio() {
//   audio.pause();
//   audio.currentTime = 0;
// }
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
