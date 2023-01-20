const quizData = [
    {
        question: " you have 8 questions starting with Question 1: Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Question 2: What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "Question 3: What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "Question 4: How to write an IF statement in JavaScript ?",
        a: "if i==5 then ",
        b: "(if i==5 )",
        c: "if(i==5)",
        d: "none of the above",
        correct: "c",
    },
      { question: "Question 5: Inside which HTML element do we put the JavaScript?",
        a: "<script>" ,
        b: "<scripting>",
        c: "<javascript>",
        d: "<js>",
        correct: "a",
      } ,
    { 
      question: "Question 6: The external JavaScript file must contain the <script> tag.",
     a: "False" ,
     b: "True" ,
     c: "Work with or without it" ,
     d: "None of the above" ,
     correct: "a" ,
    },
  { 
    question: "Question 7: Which event occurs when the user clicks on an HTML element?",
     a: "onmouseover" ,
     b: "onclick " , 
     c: "onmouseclick" ,
     d: "onchange" ,
     correct: "b" ,
    },
  { 
    question: "Final question : How do you display hyperlinks without an underline?",
     a: "a {underline:none;}" ,
     b: "a {text-decoration:no-underline;}" ,
     c: "a {text-decoration:none;} " ,
     d: "a {decoration:no-underline;}" ,
     correct: "c" ,
    },
  
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

var snd1 = new Audio("music1.mp3");
var snd2 = new Audio("music2.mp3");

let currentQuiz = 0
let score = 0

loadQuiz()
function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
          if(score < (quizData.length)/2 ){ 
           quiz.innerHTML = ` 
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <h4> hard luck you can try again </h4> 
                <h5><a href="i01correctionquiz.html" style="color:green ; font-weight:bolder" > tap here to show the answers </a></h5>
                <h5><a href="https://www.w3schools.com/quiztest/default.asp">tap here for more quizzes</a>
                <br><br> <a href="mailto: charbelkaraki43@gmail.com">send a feedback</a></h5>
                <h5 style="color:blue" >tap try again to reload the quiz</h5>
                <button onclick="location.reload()">TRY AGAIN !!</button> 
            `
	    snd2.play();
           }else if(score == (quizData.length)/2 ){ 
              quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <h4> Not bad you got the middle average you can try again</h4>
                <h5><a href="i01correctionquiz.html" style="color:green ; font-weight:bolder" > tap here to show the answers </a></h5>
                <h5><a href="https://www.w3schools.com/quiztest/default.asp">tap here for more quizzes</a>
                <br><br> <a href="mailto: charbelkaraki43@gmail.com">send a feedback</a></h5>
                <h5 style="color:blue" >tap try again to reload the quiz</h5>
                <button onclick="location.reload()">Try again</button>
             ` 
            snd2.play();
           }else if(score >(quizData.length)/2 && score <(quizData.length) ){
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <h4><N>NICE ONE !!</N> <br><br> You can be proud of yourself !</h4>
                <h5><a href="i01correctionquiz.html" style="color:green ; font-weight:bolder" > tap here to show the answers </a></h5>
                <h5><a href="https://www.w3schools.com/quiztest/default.asp">tap here for more quizzes</a>
                <br><br> <a href="mailto: charbelkaraki43@gmail.com">send a feedback</a></h5>
                <h5 style="color:blue" >tap reload to reload the quiz</h5>
                <button onclick="location.reload()">reload</button>
            ` 
            snd1.play();
           }else if(score == quizData.length ){
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
<h3><C>C</C><O>O</O><N>N</N><G>G</G><R>R</R><A>A</A><T>T</T><UU>U</UU><L>L</L><AA>A</AA><TT>T</TT><II>I</II><OO>O</OO><NN>N</NN>
                <C>!</C><N>!</N>
                <br><br>YOU GOT IT !</h3>
                <h5><a href="i01correctionquiz.html" style="color:green ; font-weight:bolder" > tap here to show the answers </a></h5>
                <h5><a href="https://www.w3schools.com/quiztest/default.asp">tap here for more quizzes</a>
                <br><br> <a href="mailto: charbelkaraki43@gmail.com">send a feedback</a></h5>
                <h5 style="color:blue" >tap reload to reload the quiz</h5>
                <button onclick="location.reload()">reload</button>
                
             ` 
             snd1.play();
             

}
        }

    }
else {
    alert("you should select one of them")
}
})