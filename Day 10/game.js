let score = 0;
let scorebox = document.getElementById("score");
let questionbox = document.getElementById("question");
let answerform = document.getElementById("myForm");
let difficulty = 50;

function checkAnswer() {
    let gametype = $("#myForm").attr("data-gametype");
    if ($("[name=answer]").val() == answerform["rightAnswer"].value) {
       // alert("Hey, you got it right!");
       $("body").append("<div class='message'><h1>Yay! You got it right!</h1></div>");
       $(".message").css("background-color", "green");
       $(".message").fadeIn(1000);
       $(".message").fadeOut(1000);
       $(".message").remove();
        score++;
    } else {
       // alert("Sorry, you got it wrong :(");
       $("body").append("<div class='message'><h1>Waahhhhhh, wrong.</h1></div>");
       $(".message").css("background-color", "red");
       $(".message").fadeIn(1000);
       $(".message").fadeOut(1000);
       $(".message").remove();
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
   $("#myForm").attr("data-gametype", "addition"); 
    //document.getElementById("myForm").setAttribute("data-gametype", "addition");
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
    $("#myForm").attr("data-gametype", "subtraction"); 
    subtractionQuiz();
}

function setMultiplicationGame() {
    $("#myForm").attr("data-gametype", "multiplication"); 
    multiplicationQuiz();
}

function multiplicationQuiz() {
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
   // questionbox.textContent = "What is: " + num1 + " * " + num2 + "?";
   // answerform["rightAnswer"].value = (num1 * num2);
   $("question").text("What is: " + num1 + " + " + num2 + "?");
    
}

multiplicationQuiz();



    


