var createCanvas;
var database;
var contestantCount;
var gameState = 0;
var answer;
var allConstestants;
var backgroundImage;
var quiz, constestant, question;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

quiz = new Quiz();
quiz.getState();
quiz.start();
}


function draw(){
  background("red");
 if(contestantCount===4){
   quiz.update(1);

 }
if (gameState===1){
  clear();
  quiz.play();
}
}