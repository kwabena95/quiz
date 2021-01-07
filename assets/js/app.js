// create an array objects
const questionArray = [
    {
        question: '1.	Which option or options apply to JavaScript?',
        option: [
            { text: 'JavaScript is a scripting language that can be inserted into HTML pages and is understood by web browsers.' },
            { text: 'It can be use as a client-side or server-side.' },
            { text: 'JavaScript is also an object-oriented programming language.' },
            { text: 'All of the above.' }
        ],
        answer: 'All of the above.'

    },
    {
        question: '2.	What are JavaScript data types?',
        option: [
            { text: 'Number, String, Boolean, Undefined, Object.' },
            { text: 'Null, ParseInt, ParseDecimal, Known.' },
            { text: 'Array, ToolKits, NaN, Empty.' },
            { text: 'StringNumber, Number, UndefinedEmpty.' }
        ],
        answer: 'Number, String, Boolean, Undefined, Object.'
    },
    {
        question: '3.	What is the use of isNaN function?',
        option: [
            { text: 'isNaN is use to determine the result of a Boolean.' },
            { text: 'isNaN returns true if an argument is not a number otherwise it returns false.' },
            { text: 'isNaN is a control flow statement.' },
            { text: 'isNaN is use to loop through an array.' }
        ],
        answer: 'isNaN returns true if an argument is not a number otherwise it returns false.'
    },
    {
        question: '4.	Which property is NOT a loop property?',
        option: [{ text: 'for' }, { text: 'while' }, { text: 'doWhile' }, { text: 'whileStill' }],
        answer: 'whileStill'
    },
    {
        question: '5.	What are two basic groups of datatypes in JavaScript?',
        option: [
            { text: 'Boolean and ParseInt' },
            { text: 'Primitive and Reference' },
            { text: 'Domesticated and Direct' },
            { text: 'Console.write and Console.log' }
        ],
        answer: 'Primitive and Reference'
    }


];


// grab UI elements
const startSection = document.querySelector('.start-section');
const btnStart = document.querySelector('#start-quiz');
const quizSection = document.querySelector('#quiz-section');
const startTime = document.querySelector('p .count-down');
const questionEl = document.querySelector('#questions');
const optionBtns = document.querySelector('.btn-list');
const displayMessage = document.querySelector('.display-message');

// add event listeners
btnStart.addEventListener('click', startQuiz);


function timeInterval() {
    // intialize time
    let timeLeft = 60;
    // set timeInterval
    const setTime = setInterval(() => {
        if (timeLeft >= 0) {
            startTime.textContent = timeLeft;
            timeLeft--;
        } else {
            clearInterval(timeLeft);
        }
    }, 1000);
    return setTime;
}

// start quiz
function startQuiz() {
    // add and remove class
    if (quizSection.classList.contains('hide')) {
        quizSection.classList.remove('hide');
    } else {
        startSection.classList.add('hide');
    }
    // call timeInterval
    timeInterval();
    showQuestion();
}

const lastQuestion = questionArray.length - 1;
let currentQuestion = 0;
let score = 0;
let count;

// render a question
function showQuestion() {
    let q = questionArray[currentQuestion];
    questionEl.textContent = q.question;
    let opt = q.option;
    opt.forEach((btn) => {
        const optBtn = document.createElement('button');
        optBtn.classList.add('btn-option');
        optBtn.textContent = btn.text;
        optionBtns.appendChild(optBtn);
        optBtn.addEventListener('click', checkAnswer);
    });

}

// check answer
function checkAnswer(answer) {
    let correctAnswer = questionArray[currentQuestion].answer;
    if (answer != correctAnswer) {
        notCorrect();

    } else {
        isCorrect();
    }
    count = 0;
    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        showQuestion();
    } else {
        clearInterval(startTime);
        quizScore();
    }
}

function isCorrect() {
    score++;
    displayMessage.textContent = 'Correct';
    document.querySelector('.btn-option').style.backgroundColor = 'green';
}
function notCorrect() {
    displayMessage.textContent = 'Wrong';
    document.querySelector('.btn-option').style.backgroundColor = 'red';
}
// render score
function quizScore() {
    let msg = `You got ${score}/ ${questionArray.length}`;
    displayMessage.textContent = msg;
    return msg;
}

console.log(questionArray[currentQuestion].answer);

// start quiz
// show questions and options
// check answer
// add score to each correct answer
// display message for correct or wrong answer
// subtract time for wrong answer
// navigation to next question
















