const questions = [
    {
        question: "What is the capital of France?",
        options: ["Madrid", "London", "Paris", "Rome"],
        correctAnswer: 2, // Index of correct answer (Paris)
        explanation: "Paris is the capital of France."
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: 1,
        explanation: "mars is known as the red planet"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: 2,
        explanation: "Carbon Dioxide"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["African Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        correctAnswer: 2,
        explanation: "Blue whale"
    },
    {
        question: "Which famous scientist formulated the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        correctAnswer: 1,
        explanation: "Albert Einstein"
    },
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score');
const restartButton = document.getElementById('restart-button');

function loadQuestion() {
    const currentQuizData = questions[currentQuestion];
    questionText.textContent = currentQuizData.question;
    optionsContainer.innerHTML = '';
    
    currentQuizData.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(optionElement);
    });
}

function selectAnswer(selectedIndex) {
    const currentQuizData = questions[currentQuestion];
    if (selectedIndex === currentQuizData.correctAnswer) {
        score++;
    }
    optionsContainer.querySelectorAll('.option').forEach((option, index) => {
        if (index === selectedIndex) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
    nextButton.classList.remove('hidden');
}

function showScore() {
    questionText.textContent = "Quiz completed!";
    optionsContainer.innerHTML = '';
    nextButton.classList.add('hidden');
    scoreContainer.classList.remove('hidden');
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
    restartButton.classList.remove('hidden');
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    scoreContainer.classList.add('hidden');
    restartButton.classList.add('hidden');
    loadQuestion();
}

loadQuestion();

nextButton.addEventListener('click', () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
        nextButton.classList.add('hidden');
    } else {
        showScore();
    }
});

restartButton.addEventListener('click', restartQuiz);
