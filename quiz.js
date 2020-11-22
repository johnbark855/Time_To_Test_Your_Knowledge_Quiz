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
//index of first and last question
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
//render questions
function renderQuestion(){

    let q = questions[runningQuestion];

   

    question.innerHTML = "<p>"+ q.question +"</p>";

    qImg.innerHTML = "<img src="+ q.imgSrc +">";

    choiceA.innerHTML = q.choiceA;

    choiceB.innerHTML = q.choiceB;

    choiceC.innerHTML = q.choiceC;

}
//render the progress
function renderProgress(){

    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){

        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";

    }
//start the quiz
    start.addEventListener("click",startQuiz);

}