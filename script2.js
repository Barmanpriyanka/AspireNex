document.addEventListener('DOMContentLoaded', function() {
    const totalQuestionsForm = document.getElementById('total-question-form');
    const questionForm = document.getElementById('question-form');
    const questionsContainer = document.getElementById('questions-container');
    const questionsList = document.getElementById('questions-list');

    let totalQuestions = 0;
    let currentQuestion = 1;

    totalQuestionsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        totalQuestions = parseInt(document.getElementById('total-questions').value, 10);
        if (totalQuestions > 0) {
            totalQuestionsForm.style.display = 'none';
            questionForm.style.display = 'block';
        }
    });

    questionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const question = document.getElementById('question-input').value;
        const answer1 = document.getElementById('answer1').value;
        const answer2 = document.getElementById('answer2').value;
        const answer3 = document.getElementById('answer3').value;
        const answer4 = document.getElementById('answer4').value;
        const correctAnswer = document.querySelector('input[name="correct-answer"]:checked').value;
        
        // Create new list item for question
        const li = document.createElement('li'); 
        li.innerHTML = `
            <strong>${currentQuestion}. ${question}</strong><br>
            A. ${answer1}<br>
            B. ${answer2}<br>
            C. ${answer3}<br>
            D. ${answer4}<br>
            Correct Answer: ${correctAnswer === '1'? 'A' : correctAnswer === '2'? 'B' : correctAnswer === '3'? 'C' : 'D'}
        `;
        
        questionsList.appendChild(li); // Append the li element to the questionsList
        
        // Reset form values
        document.getElementById('question-input').value = '';
        document.getElementById('answer1').value = '';
        document.getElementById('answer2').value = '';
        document.getElementById('answer3').value = '';
        document.getElementById('answer4').value = '';
        document.getElementById('correct-answer1').checked = true;
        
        currentQuestion++;
        
        // Show questions container if all questions added
        if (currentQuestion > totalQuestions) {
            questionForm.style.display = 'none';
            questionsContainer.style.display = 'block';
        }
    });
});