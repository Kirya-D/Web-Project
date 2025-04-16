function addition() {
    var questionsDiv = document.getElementById("questions")
    var childCount = questionsDiv.childElementCount
    console.log(childCount)
    var questionElement = document.createElement("p")
    var answerElement = document.createElement("button")
    questionsDiv.appendChild(questionElement)

    var firstNum = Math.floor(Math.random() * 8 + 1)
    var secondNum = Math.floor(Math.random() * 8 + 1)
    questionElement.setHTMLUnsafe("Question " + (childCount + 1) + ": What is " + firstNum + " + " + secondNum + "? ")
    questionElement.appendChild(answerElement)
    answerElement.setHTMLUnsafe("Show Answer")
    answerElement.onclick = function(){
        answerElement.setHTMLUnsafe("Answer: " + (firstNum + secondNum))
    }
}

function subtraction() {
    var questionsDiv = document.getElementById("questions")
    var childCount = questionsDiv.childElementCount
    console.log(childCount)
    var questionElement = document.createElement("p")
    var answerElement = document.createElement("button")
    questionsDiv.appendChild(questionElement)

    var firstNum = Math.floor(Math.random() * 8 + 1)
    var secondNum = Math.floor(Math.random() * 8 + 1)
    questionElement.setHTMLUnsafe("Question " + (childCount + 1) + ": What is " + firstNum + " - " + secondNum + "? ")
    questionElement.appendChild(answerElement)
    answerElement.setHTMLUnsafe("Show Answer")
    answerElement.onclick = function(){
        answerElement.setHTMLUnsafe("Answer: " + (firstNum - secondNum))
    }
}

function multiplication() {
    var questionsDiv = document.getElementById("questions")
    var childCount = questionsDiv.childElementCount
    console.log(childCount)
    var questionElement = document.createElement("p")
    var answerElement = document.createElement("button")
    questionsDiv.appendChild(questionElement)

    var firstNum = Math.floor(Math.random() * 8 + 1)
    var secondNum = Math.floor(Math.random() * 8 + 1)
    questionElement.setHTMLUnsafe("Question " + (childCount + 1) + ": What is " + firstNum + " × " + secondNum + "? ")
    questionElement.appendChild(answerElement)
    answerElement.setHTMLUnsafe("Show Answer")
    answerElement.onclick = function(){
        answerElement.setHTMLUnsafe("Answer: " + (firstNum * secondNum))
    }
}

function division() {
    var questionsDiv = document.getElementById("questions")
    var childCount = questionsDiv.childElementCount
    console.log(childCount)
    var questionElement = document.createElement("p")
    var answerElement = document.createElement("button")
    questionsDiv.appendChild(questionElement)

    var firstNum = Math.floor(Math.random() * 8 + 1)
    var secondNum = Math.floor(Math.random() * 8 + 1)
    questionElement.setHTMLUnsafe("Question " + (childCount + 1) + ": What is " + firstNum + " ÷ " + secondNum + "? ")
    questionElement.appendChild(answerElement)
    answerElement.setHTMLUnsafe("Show Answer")
    answerElement.onclick = function(){
        answerElement.setHTMLUnsafe("Answer: " + (firstNum / secondNum))
    }
}