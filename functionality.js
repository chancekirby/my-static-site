const questions = [{question: "What is the powerhouse of the cell?",
                    answers: ["Mitochondria", "Golgi Body", "Nucleus", "Lysosome"],
                    answer: "answer1"},
                    {question: "What organelle makes proteins?",
                    answers: ["Mitochondria", "Golgi Body", "Ribosome", "Lysosome"],
                    answer: "answer3"},
                    {question: "What is the brain of the cell?",
                    answers: ["Mitochondria", "Golgi Body", "Ribosome", "Nucleus"],
                    answer: "answer4"},
                    {question: "What property fo water makes it stick to surfaces?",
                    answers: ["Turgor", "Tension", "Adhesion", "Cohesion"],
                    answer: "answer3"}]




const quiz = document.getElementById("quiz")
const begin = document.getElementById("begin")
let correctAnswers = 0 
let currQuestion = 0


begin.addEventListener("click", () => {
    main()
})

function main() {
    nextQuestion()
}

function wrongAnswer() {
    quiz.innerHTML = `<h1 class="wrong">WRONG!</h1>`
    
    setTimeout(nextQuestion, 500)

}

function rightAnswer() {
    quiz.innerHTML = `<h1 class="right">CORRECT!</h1>`
    correctAnswers++

    setTimeout(nextQuestion, 500)
}


function nextQuestion() {
    currQuestion++

    if (currQuestion <= questions.length) {
        let question = currQuestion - 1

        quiz.innerHTML = `<h1 class="question">${questions[question].question}</h1>
                            <div id="answers" class="answers">
                                <button type="button" id="answer1" class="answerButton">${questions[question].answers[0]}</button>
                                <button type="button" id="answer2" class="answerButton">${questions[question].answers[1]}</button>
                                <button type="button" id="answer3" class="answerButton">${questions[question].answers[2]}</button>
                                <button type="button" id="answer4" class="answerButton">${questions[question].answers[3]}</button>
                            </div>`
    
    
        const answers = document.getElementsByTagName("button")
        const answersArray = Array.from(answers)
        for (i in answersArray) {
            if (answersArray[i].id === questions[question].answer) {
                answersArray[i].addEventListener("click", () => {
                    rightAnswer()
                })
            } else {
                answersArray[i].addEventListener("click", () => {
                    wrongAnswer()
                })
            }
        }

    } else {
        quiz.innerHTML = `<h1>All Done!</h1>
                        <p>You got ${correctAnswers} out of ${questions.length} questions correct.</p>`
    }

}