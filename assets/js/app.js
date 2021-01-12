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

// intialize time
let timeLeft = 20;



// set timeInterval
const setTime = setInterval(() => {

    startTime.textContent = timeLeft;
    timeLeft--;
    if (timeLeft <= 0) {
        clearInterval(timeLeft = 0);
    }

    return setTime;
}, 1000);

// view score
function highScore() {
    const highScoreTag = document.querySelector('.high-score');
    const modalContainer = document.querySelector('.modal-container');

    highScoreTag.addEventListener('click', () => {
        modalContainer.classList.toggle('.show');
    })
}


// start quiz
function startQuiz() {
    // add and remove class
    if (quizSection.classList.contains('hide')) {
        quizSection.classList.remove('hide');
    } else {
        startSection.classList.add('hide');
    }
    // call showQuestion
    showQuestion();

}

const lastQuestion = questionArray.length - 1;
let currentQuestion = 0;
let score = 0;
let count;
let optBtn;
// render a question
function showQuestion() {
    let q = questionArray[currentQuestion];
    questionEl.textContent = q.question;
    let opt = q.option;

    // clear out buttons
    clearDisplay();

    // loop through options to create multiple answer
    opt.forEach((btn) => {
        optBtn = document.createElement('button');
        optBtn.classList.add('btn-option');
        // set button text to text in array
        optBtn.textContent = btn.text;
        optionBtns.appendChild(optBtn);
        optBtn.addEventListener('click', (e) => {
            let checkAnswer = e.target.innerText === questionArray[currentQuestion].answer;
            checkAnswers(checkAnswer);
            incrementQuestion();

        });
    });

}



// render score
function quizScore() {
    let msg = `You got ${score}/ ${questionArray.length}`;
    localStorage.setItem('msg', JSON.stringify(msg));
    displayMessage.textContent = msg;
    return msg;
}

// stop function
function stopTime() {
    clearInterval(setTime);
}

// clear footer
function clearDisplay() {
    // clear out btns for the next question
    optionBtns.innerHTML = '';
}

// game over
function gameOver() {
    if (currentQuestion >= lastQuestion || timeLeft <= 0) {
        optBtn.disabled = true;
        stopTime();
        quizScore();
    }
    highScore();
}

// check answer
function checkAnswers(answer) {
    if (answer) {
        score++;
        displayMessage.textContent = 'Correct';

    } else {
        // subtract 5s from time left
        timeLeft -= 5;
        displayMessage.textContent = 'wrong';
    }
    return answer;
}

// increment question
function incrementQuestion() {
    if (currentQuestion < lastQuestion) {
        currentQuestion++;
        showQuestion();
    } else {
        gameOver();

    }
}

// saveScore













