// These questions are collected 
// it's possible to add more question to this array

const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerElements = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

// we need an index for the correct quizz

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    // currentQuizData is one of the objects in the array
    questionEl.innerText = currentQuizData.question
    // for the answer
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    // nodelist loop through
    answerElements.forEach(answerElement => answerElement.checked = false)
}

function getSelected() {
    // intialize this variable
    let answer

    answerElements.forEach(answerElement =>{
        if(answerElement.checked){
            answer = answerElement.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', ()=>{
    const answer = getSelected()
    //console.log(answer) //outputs the correct answer

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        // go to next quizee
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        }else {
            quiz.innerHTML = `
            <h2>You answered correctly at ${score} / ${quizData.length} questions </h2>

            <button onclick="location.reload()">Reload<button>
            `
        }

    }
})