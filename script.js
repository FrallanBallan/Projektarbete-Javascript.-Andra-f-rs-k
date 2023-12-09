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
    answers: ["Croissant", "False"],
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
    correctAnswer: "Opera cake",
    type: "checkbox",
  },
  {
    question: "What dessert is made from meringue, whipped cream, and fruit?",
    answers: ["Eton mess", "Pavlova", "Opera cake", "Bingus"],
    correctAnswer: "Pavlova",
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

//Medel
//Hämtar alla card element
let cards = document.querySelectorAll(".card");

quiz.forEach((question, index) => {
  console.log(question, index);
});

function displayQuestion() {
  cards.forEach((card, index) => {
    console.log(card, index);
    let question = quiz[index].question;
    let answers = quiz[index].answers;
    card.textContent = question + answers;
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

      //Append knappar
      card.appendChild(trueButton);
      card.appendChild(falseButton);
      // RADIO BUTTONS RADIO BUTTONS RADIO BUTTONS RADIO BUTTONS  RADIO BUTTONS RADIO BUTTONS RADIO BUTTONS RADIO BUTTONS
    } else if (quiz[index].type === "radio") {
      answers.forEach((answer) => {
        let radioButtons = document.createElement("input");
        radioButtons.type = "radio";
        radioButtons.name = `question_${index}`;
        radioButtons.value = answer;

        let label = document.createElement("label");
        label.textContent = answer;

        card.appendChild(radioButtons);
        card.appendChild(label);

        //change event !!!
      });
      //CHECKBOXES CHECKBOXES CHECKBOXES CHECKBOXES CHECKBOXES CHECKBOXES CHECKBOXES CHECKBOXES CHECKBOXES CHECKBOXES
    } else if (quiz[index].type === "checkbox") {
      answers.forEach((answer) => {
        let checkBoxes = document.createElement("input");
        checkBoxes.type = "checkbox";
        checkBoxes.name = `question_${index}`;
        checkBoxes.value = answer;

        let labelCheckbox = document.createElement("label");
        labelCheckbox.textContent = answer;

        card.appendChild(checkBoxes);
        card.appendChild(labelCheckbox);
        console.log(`question_${index}`);

        //Change event !!!
      });
    }
  });
  introCard.style.display = "none";
}

// cards.forEach((card, index) => {
//   //Går igenom varje Card
//   // card representerar varje .card i loopen
//   displayQuestion(card, index);
// });

//   {
//     question:
//       "Which dessert is known for its layers of sponge cake, custard, and whipped cream?",
//     answers: ["Tiramisu", "Trifle", "Eclair"],
//     correctAnswer: "Trifle",
//   },
