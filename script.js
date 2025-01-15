

const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<js>", "<scripting>", "<script>"],
        correct: 2
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["funtion", "myfunction()", "function:myfunction()"],
        correct: 1
    },
    {
        question: "The external JavaScript must contain the <?",
        options: ["True", "False"],
        correct: 0
    },
    {
        question: "How does a while loop start?",
        options: ["while i = 1 to 10", "while(i<=10 ; i++)"],
        correct: 1
    }
];

let currentQuestion = 0;  
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextbuttonElement = document.getElementById("next-btn");
const scoreboxElement = document.getElementById("score-box");

function loadQuestions() {
    const questionData = questions[currentQuestion];  
    questionElement.textContent = questionData.question;  

    optionsElement.innerHTML = ""; 

   
    for (let i = 0; i < questionData.options.length; i++) {  
        const button = document.createElement("button");
        button.textContent = questionData.options[i];  
        button.onclick = function () {
            checkAnswer(i);  
        };
        optionsElement.appendChild(button);
    }

    nextbuttonElement.style.display = "none";
}

function checkAnswer(selectedIndex) {
    const correctAnswer = questions[currentQuestion].correct;

    if (selectedIndex === correctAnswer) {
        score++;
        alert("Correct");
    } else {
        alert("Incorrect Answer");
    }

    nextbuttonElement.style.display = "block"; 
}

nextbuttonElement.addEventListener("click", function () {
    currentQuestion++; 

    if (currentQuestion < questions.length) {
        loadQuestions();  
    } else {
        questionElement.textContent = "Quiz Finished!";
        optionsElement.innerHTML = "";
        nextbuttonElement.style.display = "none";
        scoreboxElement.textContent = `Your final score is: ${score} / ${questions.length}`; 
    }
});


loadQuestions();
