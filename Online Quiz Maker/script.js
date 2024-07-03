const questions = [
    {
        question : "which  is largest animal ?",
        answers :[
            {
                text:"shark",correct:false
            },
            {
                text:"Blue Whale",correct:true
            },
            {
                text:"Elephant",correct:false
            },
            {
                text:"Giraffe",correct:false
            },
            
            
        ]
    },
    {
        question : "which  is smallest continent in the world ?",
        answers :[
            {
                text:"Asia",correct:false
            },
            {
                text:"Australia",correct:true
            },
            {
                text:"Arctic",correct:false
            },
            {
                text:"Africa",correct:false
            },
            
            
        ]

    },
    {
        question : "which  is largest deser in the world ?",
        answers :[
            {
                text:"Kalakhari",correct:false
            },
            {
                text:"Gobi",correct:true
            },
            {
                text:"Sahara",correct:false
            },
            {
                text:"Antaractica",correct:false
            },
            
            
        ]

    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex =0;
let score=0;
function  startQuiz(){
    currentQuestionIndex = 0;
    score =0;
    nextButton.innerHTML ="Next";
     showQuestion();
}
function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let QuestionNo = currentQuestionIndex +1;
    questionElement.innerHTML = QuestionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer =>{
         const button = document.createElement(button);
         button.innerHTML =answer.text;
         button.classList.add("btn");
         answerButton.appendChild(button);
    });

}
startQuiz();