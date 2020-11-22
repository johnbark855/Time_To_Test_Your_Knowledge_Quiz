//select elements
const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const qImg = document.getElementById("qImg");

const choiceA = document.getElementById("A");

const choiceB = document.getElementById("B");

const choiceC = document.getElementById("C");

const choiceD = document.getElementById("D");

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timeGauge");

const progress = document.getElementById("progress");

const scoreDiv = document.getElementById("scoreContainer");

//create the questions
let questions = [

    {

        question : "Who is the protagonist of the Devil May Cry series?",

        choiceA : "Dante",

        choiceB : "Nero",

        choiceC : "Vergil",

        choiceD : "Tom",

        correct : "A"

    },{

        question : "What does BRB stand for?",

        choiceA : "Bring Reliable Bacon",

        choiceB : "Be Right Back",

        choiceC : "Best Robotics Burner",

        choiceD : "Bro Really Bro?",

        correct : "B"

    },{

        question : "What does JS stand for?",

        imgSrc : "img/js.png",

        choiceA : "Jokescript",

        choiceB : "Jesterscript",

        choiceC : "Jojoscript",

        choiceD : "Javascript",

        correct : "D"

    },{

        question : "What is the sword's name in the game Xenoblade Chronicles?",

        choiceA : "Yamato",

        choiceB : "Buster Sword",

        choiceC : "Monado",

        choiceD : "Master Sword",

        correct : "C"

        
    },{

        question : "What are the checkpoints in Dark Souls?",

        choiceA : "Bonfire",

        choiceB : "Bed",

        choiceC : "Cafe",

        choiceD : "Plastic Chair",

        correct : "A"

    },{

        question : "Who is NOT an umbra witch?",

        choiceA : "Bayonetta",

        choiceB : "Jeanne",

        choiceC : "Rosa",

        choiceD : "Balder",

        correct : "D"


    },{
    question : "Monsoon told Raiden about what in Metal Gear Rising?",

    choiceA : "Metal Gears",

    choiceB : "Memes",

    choiceC : "President Armstrong",

    choiceD : "The history of Konami",

    correct : "B"

    },{

        question : "What is the card game that Han Solo played with the cheater Lando Calrissian?",

        choiceA : "Sebac",

        choiceB : "Space Poker",

        choiceC : "Go Gungan",

        choiceD : "Hearts",

        correct : "A"

    },{
 question : "What is the nickname of the protagonist of Persona 5?",

        choiceA : "Skull",

        choiceB : "Queen",

        choiceC : "Joker",

        choiceD : "Fox",

        correct : "C"

    },{
        question : "What is NOT a weapon in Monster Hunter World?",

        choiceA : "Bow",

        choiceB : "Heavy Bowgun",

        choiceC : "Hunting Horn",

        choiceD : "Hunting Spear",

        correct : "D"

    }
];


// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}
