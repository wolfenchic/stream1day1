let score = 0;
let scorebox = document.getElementById("score");
let questionbox = document.getElementById("question");
let answerform = document.getElementById("myForm");

function checkAnswer() {
    let gametype = document.getElementById("myForm").getAttribute("data-gametype");
    if (answerform["answer"].value == answerform["rightAnswer"].value) {
        alert("Hey, you got it right!");
        score++;
    } else {
        alert("Sorry, you got it wrong :(");
    }
    scorebox.textContent = score;
    if(gametype == "addition") {
        additionQuiz();
    }
    else if(gametype == "subtraction") {
        subtractionQuiz();
    }
    else if(gametype == "multiplication") {
        multiplicationQuiz();
    }
    return false;
    }


function setAdditionGame() {
    document.getElementById("myForm").setAttribute("data-gametype", "addition");
    additionQuiz();
}


function additionQuiz() {
    let num1 = Math.floor(Math.random() * 50);
    let num2 = Math.floor(Math.random() * 50);
    questionbox.textContent = "What is: " + num1 + " + " + num2 + "?";
    answerform["rightAnswer"].value = (num1 + num2);
    
}

additionQuiz();


function setSubtractionGame() {
    document.getElementById("myForm").setAttribute("data-gametype", "subtraction");
    subtractionQuiz();
}

function setMultiplicationGame() {
    document.getElementById("myForm").setAttribute("data-gametype", "multiplication");
    multiplicationQuiz();
}

function multiplicationQuiz() {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    questionbox.textContent = "What is: " + num1 + " * " + num2 + "?";
    answerform["rightAnswer"].value = (num1 * num2);
    
}

multiplicationQuiz();



    


