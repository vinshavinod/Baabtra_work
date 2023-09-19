// Define your quiz questions and answers
const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        choices: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
        
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: "Carbon Dioxide"
        
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["African Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        correctAnswer: "Blue Whale"
        
    },
    {
        question: "Which famous scientist formulated the theory of relativity?",
        choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
        correctAnswer: "Albert Einstein"
       
    },
    // Add more questions here...
];

// Other variables
let currentQuestion = 0;
let score = 0;
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("score");
const nextButton = document.getElementById("next-btn");
const completionMessage = document.getElementById("completion-message");

// Function to load the current question
function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;

    // Clear previous choices
    choicesElement.innerHTML = "";

    // Populate answer choices
    currentQuizData.choices.forEach((choice, index) => {
        const choiceItem = document.createElement("li");
        choiceItem.innerText = choice;
        choiceItem.addEventListener("click", () => checkAnswer(choice));
        choicesElement.appendChild(choiceItem);
    });
}

// Function to check the selected answer
function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
    if (answer === currentQuizData.correctAnswer) {
        score++;
    }

    // Highlight the selected answer
    choicesElement.childNodes.forEach((choiceItem) => {
        choiceItem.classList.remove("selected");
        if (choiceItem.innerText === answer) {
            choiceItem.classList.add("selected");
        }
    });

    // Disable further selections for this question
    choicesElement.classList.add("disabled");
    nextButton.disabled = false;
}

// Function to load the next question
function nextQuestion() {
    currentQuestion++;

    // Check if the quiz is completed
    if (currentQuestion < quizData.length) {
        loadQuestion();
        choicesElement.classList.remove("disabled");
        nextButton.disabled = true;
    } else {
        showCompletionMessage();
    }
}

// Function to display completion message and store the score in local storage
function showCompletionMessage() {
    completionMessage.classList.remove("hidden");
    scoreElement.innerText = score;
    document.getElementById("final-score").innerText = score;
    document.getElementById("total-score").innerText = quizData.length;
    
    // Store the score in local storage
    localStorage.setItem("quizScore", score);
}

// Event listeners
nextButton.addEventListener("click", nextQuestion);

// Initial load
loadQuestion();
nextButton.disabled = true;




// ... (your existing code)

// Function to restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    completionMessage.classList.add("hidden");
    scoreContainer.classList.add("hidden");
    loadQuestion();
    nextButton.disabled = true;

    // Clear the selected answer highlights
    choicesElement.childNodes.forEach((choiceItem) => {
        choiceItem.classList.remove("selected");
    });
}

// Event listener for the "Restart Quiz" button
restartButton.addEventListener("click", restartQuiz);

// ... (your existing code)
