const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlinks and Text Markup Language", correct: false },
            { text: "Hyper Text Machine Language", correct: false }
        ]
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        answers: [
            { text: "font-color", correct: false },
            { text: "text-color", correct: false },
            { text: "color", correct: true },
            { text: "text-style", correct: false }
        ]
    },
    {
        question: "What is the correct syntax to link an external CSS file in HTML?",
        answers: [
            { text: "&lt;link href='style.css' rel='stylesheet'&gt;", correct: true },
            { text: "&lt;stylesheet&gt;style.css&lt;/stylesheet&gt;", correct: false },
            { text: "&lt;css link='style.css'&gt;", correct: false },
            { text: "&lt;link src='style.css' type='text/css'&gt;", correct: false }
        ]
    },
    {
        question: "Which HTML element is used to define a JavaScript script?",
        answers: [
            { text: "&lt;javascript&gt;", correct: false },
            { text: "&lt;js&gt;", correct: false },
            { text: "&lt;script&gt;", correct: true },
            { text: "&lt;code&gt;", correct: false }
        ]
    },
    {
        question: "Which of the following is a JavaScript framework?",
        answers: [
            { text: "React", correct: true },
            { text: "Laravel", correct: false },
            { text: "Django", correct: false },
            { text: "Spring", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Creative Style Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Style Sheets", correct: false },
            { text: "Colorful Style Sheets", correct: false }
        ]
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        answers: [
            { text: "class", correct: false },
            { text: "styles", correct: false },
            { text: "style", correct: true },
            { text: "font", correct: false }
        ]
    },
    {
        question: "What is the purpose of the &lt;head&gt; element in HTML?",
        answers: [
            { text: "To contain the main content of the page", correct: false },
            { text: "To contain meta-information about the document", correct: true },
            { text: "To create a header for the document", correct: false },
            { text: "To define the title of the document", correct: false }
        ]
    },
    {
        question: "Which of the following is NOT a valid JavaScript data type?",
        answers: [
            { text: "String", correct: false },
            { text: "Number", correct: false },
            { text: "Boolean", correct: false },
            { text: "Element", correct: true }
        ]
    },
    {
        question: "How can you make a list that lists its items with numbers in HTML?",
        answers: [
            { text: "&lt;ul&gt;", correct: false },
            { text: "&lt;ol&gt;", correct: true },
            { text: "&lt;list&gt;", correct: false },
            { text: "&lt;dl&gt;", correct: false }
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
    updateButtonVisibility();
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct == "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    updateButtonVisibility();
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function updateButtonVisibility() {
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.innerHTML = "Finish";
    } else {
        nextButton.innerHTML = "Next";
    }

    nextButton.style.display = "block";
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
